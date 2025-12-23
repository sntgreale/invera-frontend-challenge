// Externals
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

// Components
import Dashboard from "./pages/Dashboard";

// Utils
import { ThemeProvider } from "./providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Toaster richColors position="top-right" />
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>
);
