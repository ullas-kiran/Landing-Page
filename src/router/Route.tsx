import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// components
const MainLayout=lazy(()=>import("@/layout/MainLayout"));
import RouterError from "@/components/errorBoundary/RouterError";

// pages
const Home = lazy(() => import("@/pages/home/Home"));

const LazyWrapper: React.FunctionComponent<{Component: React.ComponentType<any>; fallback?: React.ReactNode}> = ({ Component }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const Router: React.FunctionComponent = (): JSX.Element => {
  const routes = [
    {
      path: "/",
      element: <LazyWrapper Component={MainLayout} />,
      children: [
        {
          path: "",
          element: (<Home />),
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
