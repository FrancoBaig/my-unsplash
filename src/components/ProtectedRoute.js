import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
    const user = useSelector((store) => store.user);

    if (user.email === undefined || user.email === "") {
        return <Navigate to="/" replace />;
    }
    console.log(user);

    return children;
}

export default ProtectedRoute;
