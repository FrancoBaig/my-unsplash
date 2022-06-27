import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
    const user = useSelector((store) => store.user);

    if (user.email === undefined) {
        return <Navigate to="/" replace />;
    }
    console.log("pasó");

    return children;
}

export default ProtectedRoute;
