/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import crypto from "crypto"; // Import the crypto module
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import fs from "fs";
import autoprefixer from "autoprefixer";
import generateCssVariablesPlugin from "./generateCSsVars";
// import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

// https://vite.dev/config/

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      ...Object.keys(env).reduce((prev, key) => {
        const sanitizedKey = key.replace(/[^a-zA-Z0-9_]/g, "_");

        prev[`process.env.${sanitizedKey}`] = JSON.stringify(env[key]);

        return prev;
      }, {}),
    },
    plugins: [
      react(),
      ViteImageOptimizer({}),
      {
        name: "post-build-commands", // the name of your custom plugin. Could be anything.
        closeBundle: () => {
          console.log("Vite build complete! Running post-build tasks...");
          const distAssetsDir = path.join(process.cwd(), "dist", "assets");

          console.log("Vite build complete! Cleaning up JS files...");

          if (fs.existsSync(distAssetsDir)) {
            // Read all files in the directory
            const files = fs.readdirSync(distAssetsDir);

            files.forEach((file) => {
              const filePath = path.join(distAssetsDir, file);

              // Check if the file is a .js file and doesn't start with "index"
              if (file.endsWith(".js") && !file.startsWith("index")) {
                // Delete the file
                fs.unlinkSync(filePath);
                console.log(`Deleted: ${file}`);
              }
            });
          } else {
            console.log(`Directory not found: ${distAssetsDir}`);
          }
        },
      },
      generateCssVariablesPlugin({
        assetsDir: "./src/assets", // Adjust the assets directory if needed
        outputFile: "./src/styles/cssVars.css", // Output location for variables.css
      }),
      // obfuscatorPlugin({
      //   options: {
      //     // your javascript-obfuscator options
      //     compact: true,
      //     transformObjectKeys: true,
      //     // target: "browser",
      //     // splitStrings: true,
      //     // stringArrayShuffle: true,
      //     // stringArray: true,
      //     // selfDefending: true,
      //     // renameProperties: true,
      //     // renameGlobals: true,
      //     numbersToExpressions: true,
      //     debugProtection: true,
      //     // ...  [See more options](https://github.com/javascript-obfuscator/javascript-obfuscator)
      //   },
      // }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    optimizeDeps: {
      include: ["**/*.scss"], // Include all .scss files
    },

    css: {
      transformer: "postcss",
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/global" as *;',
        },
      },
      modules: {
        // generateScopedName: "[name]_[local]_[hash:base64:5]",

        generateScopedName: (className, file, css) => {
          const fileName = path.basename(file, ".module.css");

          const hash = crypto
            .createHash("sha1")
            .update(css)
            .digest("hex")
            .substring(0, 4);

          const prodCss = crypto
            .createHash("sha1")
            .update(className)
            .digest("base64")
            .replace(/[^a-zA-Z0-9]/g, "") // Remove invalid characters
            .replace(/^\d/, () =>
              String.fromCharCode(97 + Math.floor(Math.random() * 26))
            ) // Replace first char with random letter if it's a number
            .substring(0, 5);

          // return `${fileName.replace(".module.scss", "")}_${className}_${hash}`;
          return command === "build"
            ? prodCss
            : `${fileName.replace(".module.scss", "")}_${className}_${hash}`;
        },
      },
      postcss: {
        plugins: [autoprefixer({})],
      },
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      minify: true,
      assetsDir: "assets",
      cssCodeSplit: true,
      rollupOptions: {
        treeshake: true,
        logLevel: "info",
        output: {
          manualChunks: undefined,

          assetFileNames: ({ name, originalFileName }) => {
            if (
              /\.(gif|jpe?g|png|svg|mp4)$/.test(name ?? "") &&
              originalFileName != null
            ) {
              return `assets/${originalFileName.replace(
                /^src\/assets\/(.*)\/[^/]+$/,
                "$1"
              )}/[name][extname]`;
            }

            if (/\.css$/.test(name ?? "")) {
              return "css/[name]-[hash][extname]";
            }

            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return "[name]-[hash][extname]";
          },
        },
      },
    },
    assetsInclude: [
      "**/*.png",
      "**/*.jpg",
      "**/*.gif",
      "**/*.svg",
      "**/*.webp",
      "**/*.mp4",
      "**/*.jpeg",
      "**/*.ico",
    ],
  };
});
