import "./lib/onApplicationURLEvent";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const app = document.querySelector("#root");
const root = app && createRoot(app);

root?.render(<App />);
