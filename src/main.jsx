import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f6b17a",
    },
    secondary: {
      main: "#f5e8c7",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
