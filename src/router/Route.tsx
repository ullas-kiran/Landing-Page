import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// components
import MainLayout from "@/layout/MainLayout";
import RouterError from "@/components/errorBoundary/RouterError";

// pages
const Home = lazy(() => import("@/pages/home/Home"));

const Router: React.FunctionComponent = (): JSX.Element => {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
         path:"",
          element: (
            <Suspense fallback={<div>loading........</div>}>
              <Home />
            </Suspense>
          ),
          ErrorBoundary: RouterError,
        },
      ],
    },
    {
      path: "*",
      element: <div>No page</div>,
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Router;
