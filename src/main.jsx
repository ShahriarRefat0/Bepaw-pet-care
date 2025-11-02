import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routers/Routers";
import ServDataProvider from "./Context/ServDataContext";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ServDataProvider>
        <RouterProvider router={router}></RouterProvider>
      </ServDataProvider>
    </AuthProvider>
    <Toaster />
  </StrictMode>
);
