import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "@/pages/notFound/notFound";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "@/pages/errorPage";
import Home from "@/pages/home/home";
import Header from "@/components/header";
import Welcome from "@/pages/welcome";
import Register from "@/pages/register";
import Loader from "@/components/loader";

const logError = (
  error: Error,
  info: { componentStack?: string | null; digest?: string | null }
) => {
  console.error("Caught an error:", error, info);
  // Do something with the error, e.g. log to an external API
};

export const pageTemplate = (Page: React.ReactNode, title = "", desc="") => {
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
        <Header title={title} desc={desc}/>
        {/* <Navbar /> */}
        <Loader/>
        {Page}
        {/* <Footer /> */}
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
            // icon: {},

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
  // ...generateRoutes(navItems),
  // ...generateRoutes(footerItems.support),
  { path: "/", element: <Navigate to="/welcome" replace /> }, // Redirect to home
  {
    path: "*",
    element: pageTemplate(<NotFound />),
  }, // Catch-all route
  {
    path: "/home",
    element: pageTemplate(<Home />,"Open an Account","Terms & Conditions"),
  }, 
  {
    path: "/welcome",
    element: pageTemplate(<Welcome /> ,"Open an Account"),
  }, 
  {
    path: "/register",
    element: pageTemplate(<Register />,"Open an Account"),
  }, 
]);

export default router;
