/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    WEBSITE_NAME: string; // Replace `string` with a specific type if needed (e.g., "MyWebsite" | "AnotherWebsite")
  }
}

type ClothingItem = {
  name: string; // Name of the item, e.g., "Graphic Tee"
  description?: string; // Optional: Short description of the item
  price: number; // Price in the desired currency
  sizes: string[]; // Available sizes, e.g., ["S", "M", "L", "XL"]
  colors: string[]; // Available colors, e.g., ["Red", "Blue", "Black"]
  thumbnail: string; // Thumbnail image URL
  images: string[]; // Array of image URLs
  material?: string; // Optional: Material, e.g., "100% Cotton"
  gender?: "Men" | "Women" | "Unisex"; // Target gender
  sku?: string; // Optional: Stock-keeping unit for inventory tracking
  stock: number; // Number of items in stock
  brand?: string; // Optional: Brand name
  discount?: number; // Optional: Discount percentage
  rating?: number; // Optional: Average customer rating
  reviewsCount?: number; // Optional: Number of customer reviews
  isNewArrival?: boolean; // Optional: Whether it's a new arrival
  isOnSale?: boolean; // Optional: Whether it's on sale
  tags?: string[]; // Optional: Additional tags for filtering, e.g., ["Casual", "Summer"]
  careInstructions?: string; // Optional: Care instructions, e.g., "Machine wash cold"
};

type ClothingCategory = {
  category: string; // Category name, e.g., "Tops"
  items: ClothingItem[]; // Array of items in that category
};
