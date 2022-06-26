import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
    const user = useSelector((store) => store.user);

    if (user.mail === undefined) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute;
