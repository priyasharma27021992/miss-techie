import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Projects from "./pages/projects";
import Home from "./pages/home.tsx";

import "./index.css";
import Contact from "./pages/contact.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/projects",
      element: <App />,
      children: [
        {
          path: "",
          element: <Projects />,
        },
      ],
    },
    {
      path: "/contact",
      element: <App />,
      children: [
        {
          path: "",
          element: <Contact />,
        },
      ],
    },
  ]
  {
    basename: "/miss-techie",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
