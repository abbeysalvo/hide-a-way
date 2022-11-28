import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Error from "./components/Error/Error";
import DoorBuilder, {
  loader as shopLoader,
} from "./components/DoorBuilder/DoorBuilder";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Privacy from "./components/Privacy/Privacy";
import Location from "./components/Location/Location";
import Shop from "./components/Shop/Shop";

export const siteNavigation = [
  { path: "/", title: "Home" },
  { path: "/shop", title: "Shop" },
  { path: "/about", title: "About Us" },
];

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/builder",
        element: <DoorBuilder />,
        loader: shopLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/visit",
        element: <Location />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/privacy-terms",
        element: <Privacy />,
      },
    ],
    element: <App />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
