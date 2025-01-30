export const validEmailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const validNameRegex =
  /^[A-Z][a-zA-Z'-]+(?: [A-Z]+(?: [A-Z]+)?)?(?: [IVXLCDM]+)?$/;

export const IsDesktop: () => boolean = () => {
  // Check if the user is on a mobile device
  const isMobile =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    console.log("User is on a mobile device.");
    return false;
  } else {
    console.log("User is on a desktop browser.");
    return true;
  }

  // return !isMobile;
};

export function calculateElementVisibility(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const visibleHeight = Math.max(
    0,
    Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
  );
  const visibleWidth = Math.max(
    0,
    Math.min(rect.right, windowWidth) - Math.max(rect.left, 0)
  );
  const visibleArea = visibleHeight * visibleWidth;

  const totalArea = rect.height * rect.width;
  const visibilityPercentage = (visibleArea / totalArea) * 100;

  return {
    visibleHeight,
    visibleWidth,
    visibleArea,
    visibilityPercentage,
  };
}
