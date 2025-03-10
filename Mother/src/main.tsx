import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Pages } from "./_roots";
import { Navbar } from "./components/navbar";
import { MusicButton } from "./components/musicPlayer";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Pages />
            <Navbar />
            <MusicButton />
        </BrowserRouter>
    </StrictMode>
);
