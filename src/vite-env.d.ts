/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    WEBSITE_NAME: string; // Replace `string` with a specific type if needed (e.g., "MyWebsite" | "AnotherWebsite")
  }
}

interface RegistrationInformationState {
  mobileNumber: string;
  email: string;

  // future fields
  firstName?: string;
  lastName?: string;
  address?: string;
}
