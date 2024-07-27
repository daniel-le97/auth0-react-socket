import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useNavigator } from "../lib/navigator";
import Profile from "../components/Profile";

const Home = () => {
  const navigate = useNavigate();
  useNavigator(navigate);
  const { loginWithRedirect, logout } = useAuth0();

  const login = async () => {
    const application = await import("socket:application");
    const currentWindow = await application.getCurrentWindow();
    return await loginWithRedirect({
      async openUrl(url) {
        await currentWindow.openExternal(url);
      },
    });
  };

  const logOut = async () => {
    const application = await import("socket:application");
    const currentWindow = await application.getCurrentWindow();
    return await logout({
      async openUrl(url) {
        await currentWindow.openExternal(url);
      },
    });
  };

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={login}>sign in</button>
      <button onClick={logOut}>sign out</button>
      <Profile />
    </div>
  );
};

export default Home;
