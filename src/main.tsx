import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";

import AppLayout from "./AppLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Index /> },   // "/#/"
      // add more: { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
