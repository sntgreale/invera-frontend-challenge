import React from "react";
import ReactDOM from "react-dom/client";

// Components
import Dashboard from "./pages/Dashboard";

// Utils
import { ThemeProvider } from "./providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>
);
