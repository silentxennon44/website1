import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import combineMediaQuery from "postcss-combine-media-query";
import combineDuplicatedSelectors from "postcss-combine-duplicated-selectors";
import prettify from "postcss-prettify";

export default {
  plugins: [
    tailwindcss,
    autoprefixer,

    combineMediaQuery,
    combineDuplicatedSelectors,
    prettify,
  ],
};

// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };