import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "@/pages/notFound/notFound";
import Navbar from "@/components/navbar";
import { footerItems, navItems } from "@/static/staticData";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "@/pages/errorPage";

const logError = (
  error: Error,
  info: { componentStack?: string | null; digest?: string | null }
) => {
  console.error("Caught an error:", error, info);
  // Do something with the error, e.g. log to an external API
};

export const pageTemplate = (Page: React.ReactNode, title = "") => {
  return (
    <>
      <ErrorBoundary
        fallbackRender={ErrorPage}
        onError={logError}
        // onReset={(details) => {
        //   // Reset the state of your app so the error doesn't happen again
        // }}
      >
        <Helmet>
          <title>{`${title} - ${process.env.WEBSITE_NAME}`}</title>
        </Helmet>
        <Navbar />
        {Page}
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName="toastContainer"
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "toast",
            duration: 2000,
            style: {
              fontFamily: "Poppins, sans-serif",
              // background: "#363636",
              // color: "#fff",
            },
            icon: {},

            // Default options for specific types
            success: {
              icon: "✅",
              style: {
                background: "#fff",
                color: "#363636",
              },
            },
            error: {
              icon: " ❗",
              style: {
                background: "#363636",
                color: "#fff",
              },
            },
            // custom: {
            //   icon: "🛈 ",
            //   style: {
            //     background: "rgb(254, 246, 213)",
            //     color: "#fff",
            //   },
            // },
          }}
        />
      </ErrorBoundary>
    </>
  );
};

/**
 * Recursively generates routes from the navItems array.
 *
 * @param {SubMenuItem[]} items - The array of SubMenuItem objects.
 * @returns {RouteObject[]} An array of RouteObjects.
 */
export const generateRoutes = (items) => {
  return items.map((item) => {
    if (item.subMenu != null) {
      // Item has subMenu, generate routes for it
      return {
        path: item.link === "#" ? null : item.link,
        element:
          item.link !== "#" ? pageTemplate(item.component, item.title) : null,
        children: generateRoutes(item.subMenu), // Recursively add subMenu routes
      };
    } else {
      // Item is a simple route
      return {
        path: item.link,
        element: pageTemplate(item.component, item.title),
        // errorElement: <ErrorPage />,
      };
    }
  });
};

const router = createBrowserRouter([
  ...generateRoutes(navItems),
  ...generateRoutes(footerItems.support),
  { path: "/", element: <Navigate to="/home" replace /> }, // Redirect to home
  {
    path: "*",
    element: pageTemplate(<NotFound />),
    // errorElement: <div>ERROR</div>,
    // ErrorBoundary: <ErrorBoundary />,
  }, // Catch-all route
]);

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Navigate to="/home" replace />, // Redirect root path to /home
//   },
//   {
//     path: "/",
//     element: <Navigate to="/home" replace />, // Explicitly redirect / to /home
//   },
//   {
//     path: "/home",
//     element: pageTemplate(<Home />), // Home route
//     index: true, // Marking /home as the index page
//   },
//   {
//     path: "/contacts",
//     element: pageTemplate(<Contacts />), // Contacts route
//   },
//   {
//     path: "*",
//     element: pageTemplate(<NotFound />), // Catch-all for undefined routes
//   },
// ]);

export default router;
