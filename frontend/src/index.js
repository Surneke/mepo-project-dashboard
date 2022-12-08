import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthProvider";
import { GlobalProvider } from "./context/GlobalContext";
import { theme } from "./context/Theme";
import reportWebVitals from "./reportWebVitals";
import { RoutesComponent } from "./routes";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalProvider>
      <AuthProvider>
        <RoutesComponent />
      </AuthProvider>
    </GlobalProvider>
  </ThemeProvider>
);
reportWebVitals();