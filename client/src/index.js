import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.js";


ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
    <AuthContextProvider>
      <SocketContextProvider>
    <App />
      </SocketContextProvider>
    </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
