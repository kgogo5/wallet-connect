import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Web3ModalProvider } from "./Web3Provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <App />
    </Web3ModalProvider>
  </React.StrictMode>
);
