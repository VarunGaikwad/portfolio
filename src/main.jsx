import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./global.css";
import posthog from "posthog-js";
import App from "./App.jsx";

// posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
//   api_host: "https://app.posthog.com",
// });

// posthog.capture("my event", { property: "value" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
