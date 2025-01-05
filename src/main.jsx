
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./components/Homepage";
import Essentials from "./components/Essentials";
import ExtraSection from "./components/ExtraSection";
import AuthProfile from "./components/AuthProfile";
import WishList from "./components/WishList";
import { Auth0Provider } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
const redirectUri = `${location.origin}${location.pathname}`;
const domain = import.meta.env.VITE_AUTH0_DOMAIN?.trim();
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID?.trim();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <HashRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/essentials" replace />} />
          <Route path="/essentials" element={<Homepage />} />
          <Route path="/essentials/essentialSection/:essentialId" element={<Essentials />} />
          <Route path="/essentials/extraDetails/:extraDetailId" element={<ExtraSection />} />
          <Route path="logins/:loginId" element={<AuthProfile />} />
          <Route path="wishlists/:wishlistId" element={<WishList />} />
        </Routes>
      </HashRouter>
    </Auth0Provider>
  </React.StrictMode>
);


