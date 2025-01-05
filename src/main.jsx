import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Homepage from "./components/Homepage";
import Essentials from "./components/Essentials";
import ExtraSection from "./components/ExtraSection";
import AuthProfile from "./components/AuthProfile";
import WishList from "./components/WishList";
import {Auth0Provider} from "@auth0/auth0-react"

const redirectUri = `${location.origin}${location.pathname}`;
const domain = import.meta.env.VITE_AUTH0_DOMAIN?.trim();
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID?.trim();
const router = createBrowserRouter([
  {
    path: "/essentials",
    element: <Homepage/>,
  },
  {
    path: "/essentials/essentialSection/:essentialId",
    element: <Essentials/>,
  },
  {
    path: "/essentials/extraDetails/:extraDetailId",
    element: <ExtraSection/>,
  },
  {
    path: "logins/:loginId",
    element: <AuthProfile/>,
  },
  {
    path: "wishlists/:wishlistId",
    element: <WishList/>,
  },
]);

console.log(clientId)
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <Auth0Provider
     domain={domain}
     clientId={clientId}
     authorizationParams={{
      redirect_uri:redirectUri
     }}
    >
    <RouterProvider router={router} basename="/essentials"/>
    </Auth0Provider>
   
  </React.StrictMode>
);
