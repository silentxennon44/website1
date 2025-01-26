function getImageUrl(name: string) {
  return new URL(name, import.meta.url).href;
}

const images = import.meta.glob("./*/**");

const imageArr = Object.keys(images);

function processFilename(filename: string): string {
  const match = filename.match(/^(.*?)\.(png|jpg|jpeg|gif|svg|mp4)$/);
  return match ? match[1] : filename;
}

export type ImageType = {
  src: string;
  alt: string;
  // height: number;
  // width: number;
  // blurDataURL: string;
  // blurWidth: number;
  // blurHeight: number;
};

interface NavigationType {
  [key: string]: NavigationType | ImageType | any; // Dynamic keys allowed
}
function createObjectFromStrings(strings: Array<string>): NavigationType {
  const resultObject = {};

  for (const string of strings) {
    const values = string.split("/").slice(1); // Remove leading './' and split path
    let currentObject = resultObject;

    for (const value of values) {
      const formattedValue = processFilename(value);

      if (!currentObject[formattedValue]) {
        currentObject[formattedValue] = {};
      }

      // If it's a file (not a folder), generate the image data
      if (value === formattedValue + value.substring(value.indexOf("."))) {
        currentObject[formattedValue] = {
          src: getImageUrl(string), // Image path as the source
          alt: formattedValue.replace(/[-_]/g, " "),
          // TODO: Find a way to get the image dimensions
          // height: 100, // Example static value, replace with actual image data if needed
          // width: 100, // Example static value
          // blurDataURL: "", // Example static value
          // blurWidth: 10, // Example static value
          // blurHeight: 10, // Example static value
        };
      }

      // Move to the next nested object or image data
      currentObject = currentObject[formattedValue];
    }
  }

  return resultObject;
}

export default createObjectFromStrings(imageArr);
