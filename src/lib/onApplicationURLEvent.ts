import { onApplicationURL } from "socket:hooks";
import { ApplicationURLEvent } from "socket:internal/events";
import { useNavigator } from "./navigator";

onApplicationURL(async (event: ApplicationURLEvent) => {
  console.log("onApplicationURL", event.url);
  const nav = useNavigator();
  if (nav) {
    localStorage.setItem("callbackURL", event.url.href);
    if (event.url.href.includes("callback")) {
      nav("/callback" + event.url.search);
    }
    if (event.url.href.includes("signout")) {
      window.location.reload();
    }
  }
});
