
export const RegistrationSteps = [
  "Contact Info",
  "ID",
  "Photo",
  "Personal Info",
  "Financial Info",
  "Summary",
] as const

export const RegistrationStepsObj = [
  {
    title: "Contact Info",
    description: "Contact information details",
  },
  {
    title: "ID",
    description: "Identification document details",
  },
  {
    title: "Photo",
    description: "Profile photo upload",
  },
  {
    title: "Personal Info",
    description: "Personal information details",
  },
  {
    title: "Financial Info",
    description: "Financial information details",
  },
  {
    title: "Summary",
    description: "Review and confirmation details",
  },
] as const;

export type RegistrationStep = typeof RegistrationSteps[number];

export const RegistrationFields = [
  "Mobile Number",
  "Email",
  "Confirm Email",
] as const

export type RegistrationFields = typeof RegistrationFields[number];

export const RegistrationLabels = {
  contact: {
    section: "Contact Information",
    step: "Contact Info",
    fields: {
      mobileNumber: "Mobile Number",
      email: "Email Address",
    },
  },

  personal: {
    section: "Personal Information",
    step: "Personal Info",
    fields: {
      firstName: "First Name",
      lastName: "Last Name",
      address: "Address",
      birthday: "Birthday",
      birthPlace: "Birth Place",
    },
  },

  address: {
    section: "Home Address",
    step: "Personal Info",
    fields: {
      street: "House no/Bldg., Street, Village",
      barangay: "Barangay",
      city: "City",
      province: "Province",
      country: "Country",
      zipCode: "ZIP Code",
    },
  },

  MailingAddress: {
    section: "Mailing Address",
    step: "Personal Info",
    fields: {
      street: "House no/Bldg., Street, Village",
      barangay: "Barangay",
      city: "City",
      province: "Province",
      country: "Country",
      zipCode: "ZIP Code",
    },
  },

  citizenship: {
    section: "Citizenship Information",
    step: "Personal Info",
    fields: {
      citizenship: "Citizenship",
      isFilipino: "Filipino Citizen",
    },
  },

  politics: {
    section: "Political Information",
    step: "Personal Info",
    fields: {
      isPolitician: "Are you an elected/appointed public servant or government official?",
      isConnectedToPolitician: "Are you related to an elected/appointed public servant or government official?",
      // isPolitician: "Politician/Public Servant",
      // isConnectedToPolitician: "Related To Politician",
    },
  },

  work: {
    section: "Work Information",
    step: "Financial Info",
    fields: {
      source: "Source of Income",
      nature: "Nature of Work",
    },
  },
} as const;

// export type SubMenuItem = {
//   title: string; // Title of the menu item
//   link: string; // Link to the page.
//   component?: React.ReactNode;
//   subMenu?: SubMenuItem[] | null; // Recursive type for nested submenus
// };

// const flattenAndFilterNavItems = (
//   navItems: SubMenuItem[],
//   titlesToFilter: string[]
// ): { title: string; link: string }[] => {
//   const result: { title: string; link: string }[] = [];

//   const traverse = (items: SubMenuItem[]) => {
//     for (const item of items) {
//       if (titlesToFilter.includes(item.title)) {
//         result.push({ title: item.title, link: item.link });
//       }
//       if (item.subMenu) {
//         traverse(item.subMenu); // Recursively process subMenu
//       }
//     }
//   };

//   traverse(navItems);

//   return result;
// };

/**
 * An object representing the screen breakpoints for responsive design.
 * Each key represents a breakpoint size with its corresponding pixel value.
 */
export const screenBreakpoints = {
  // Extra small devices (portrait phones)
  xs: 0,
  // Small devices (landscape phones)
  sm: 576,
  // Medium devices (tablets)
  md: 768,
  // Large devices (desktops)
  lg: 992,
  // Extra large devices (large desktops)
  xl: 1200,
  // Extra extra large devices (larger desktops)
  xxl: 1400,
  // Extra extra extra large devices (very large desktops)
  // added 50px to compensate for teh default 50px padding on each side
  xxxl: 1650,
};
