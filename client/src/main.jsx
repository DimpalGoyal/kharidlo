import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import { HomeScreen } from "./screens/HomeScreen.jsx";
import Header from "./components/Header.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen/>} />
    </Route>
  ),
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
