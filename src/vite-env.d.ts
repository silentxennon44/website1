/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    WEBSITE_NAME: string; // Replace `string` with a specific type if needed (e.g., "MyWebsite" | "AnotherWebsite")
  }
}
