import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./reducers/store";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<App />} />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);
