import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { OrganizationProvider } from "./context/OrganizationContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <OrganizationProvider>
        <App />
      </OrganizationProvider>
    </Router>
  </StrictMode>
);
