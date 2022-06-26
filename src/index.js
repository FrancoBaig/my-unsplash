import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "./reducers/store";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import ProtectedRoute from "./components/ProtectedRoute";

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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);
