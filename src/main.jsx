import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index-new.css";
import posthog from "posthog-js";
import NewHome from "./sections/NewHome.jsx";

posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
  api_host: "https://app.posthog.com",
});

posthog.capture("my event", { property: "value" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewHome />
  </React.StrictMode>
);
