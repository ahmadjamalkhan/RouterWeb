import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LayOut from "./LayOut.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/ContactUs/Contact.jsx";
import User from "./components/User/User.jsx";
import GitHub ,{gitHubLoader} from "./components/GitHub/GitHub.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LayOut />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element:<About/> ,
//       },
//       {
//         path: "contact",
//         element:<Contact/> ,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
      loader={gitHubLoader}
      path="github" element={<GitHub />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
