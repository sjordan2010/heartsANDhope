import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./routes/error-page";
import History from "./routes/History";
import Board from "./routes/Board";
import Members from "./routes/Members";
import Outreach from "./routes/Outreach";
import Donate from "./routes/Donate";
import Events from "./routes/Events";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/history",
        element: <History />,
        errorElement: <ErrorPage />
      },
      {
        path: "/who-we-are/BoD",
        element: <Board />,
        errorElement: <ErrorPage />
      },
      {
        path: "/who-we-are/members",
        element: <Members />,
        errorElement: <ErrorPage />
      },
      {
        path: "/how-we-help/outreach",
        element: <Outreach />,
        errorElement: <ErrorPage />
      },
      {
        path: "/how-we-help/events",
        element: <Events />,
        errorElement: <ErrorPage />
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />
      },
      {
        path: "/donate",
        element: <Donate />,
        errorElement: <ErrorPage />
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);