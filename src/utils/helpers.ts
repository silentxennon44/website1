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
