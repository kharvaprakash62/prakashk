import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import portraitImage from "../assets/portrait_clean.png";

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = portraitImage;
document.head.appendChild(favicon);

createRoot(document.getElementById("root")!).render(<App />);
