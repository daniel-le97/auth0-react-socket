import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CLIENT_ID, DOMAIN, REDIRECT_URI } from "./lib/constants";

function App() {
  console.log(window.location.href);
  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      useRefreshTokens={true}
      useRefreshTokensFallback={false}
      authorizationParams={{
        redirect_uri: REDIRECT_URI,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  );
}

export default App;
