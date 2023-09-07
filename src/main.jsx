import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { VideoToShow } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VideoToShow>
      <App />
    </VideoToShow>
  </React.StrictMode>
);
