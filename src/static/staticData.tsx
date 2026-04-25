
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
