import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/reset.css";
import "@/styles/defaults.css";
import "@/styles/cssVars.css";
import Providers from "@/store/provider/provider";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/routes";
import { register } from "swiper/element/bundle";
import "animate.css/animate.compat.css";

register();

const disableAnchorDragging = () => {
  // Select all anchor elements on the page
  const anchors = document.querySelectorAll("a");

  // Disable dragging for each anchor
  anchors.forEach((anchor) => {
    anchor.setAttribute("draggable", "false");
  });
};

// Run the logic when the app initializes
disableAnchorDragging();

// Re-run the logic after the app renders (to catch dynamically added links)
const observer = new MutationObserver(() => {
  disableAnchorDragging();
});

observer.observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);
