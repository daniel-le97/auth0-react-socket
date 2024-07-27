import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigator } from "../lib/navigator";

const CallBack = () => {
  const { handleRedirectCallback } = useAuth0();
  const navigator = useNavigator();

  useEffect(() => {
    const handleRedirect = async () => {
      // callbackURL is set in ./lib/onApplicationURLEvent.ts
      // you may want to change localstorage to something else
      const results = await handleRedirectCallback(
        localStorage.getItem("callbackURL") || window.location.href
      );
      localStorage.removeItem("callbackURL");
      console.log(results);
      navigator("/");
    };
    handleRedirect();
  }, [handleRedirectCallback, navigator]);

  return <div>Loading...</div>;
};

export default CallBack;
