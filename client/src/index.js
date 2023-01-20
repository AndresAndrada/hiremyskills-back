import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-gd12mqwy0uzq6wf4.us.auth0.com"
      clientId="TFwG6UEymSjhCit3nHQMip2sg8Oa9dPj"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
