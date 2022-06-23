import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<App />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);
