import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router-dom";
import RouteManagerComponent from "./Routes.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/Theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RouteManagerComponent />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
