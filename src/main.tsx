import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import "./index.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="dark:bg-primary duration-700 font-Fira-Sans">
          <App />
          <ToastContainer autoClose={2000} />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
