import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./sections/Home.jsx";
import Layout from "./sections/Layout.jsx";
import About from "./sections/About.jsx";
import NotFound from "./sections/NotFound.jsx";
import Resume from "./sections/Resume.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const promise = [
  fetch("./assets/pdf/1.png"),
  fetch("./assets/pdf/2.png"),
  fetch(
    "https://github.com/VarunGaikwad/VarunGaikwad/raw/master/Varun_Gaikwad_Resume.pdf"
  ),
];

Promise.all(promise);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
