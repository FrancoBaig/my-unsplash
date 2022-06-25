import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import loginService from "../services/Login";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";

import { styled } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import logo from "../logo.svg";
import Divider from "@mui/material/Divider";

import Link from "@mui/material/Link";
import signUpService from "../services/SignUp";

const Label = styled(InputLabel)({
    fontSize: "1.4rem",
    color: "4F4F4F",
});

const LoginInput = styled(InputBase)({
    "& .MuiInputBase-input": {
        border: "1px solid #4F4F4F",
        padding: "1rem 1.5rem",
        borderRadius: "4px",
        fontSize: "1.4rem",
        color: "#33333",
    },

    "& .MuiInputBase-input:focus": {
        color: "black",
    },
});

function Login() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signup, setSignup] = useState(false);

    React.useEffect(() => {
        if (user.email === "") return;

        navigate("../");
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (signup) {
            const response = await signUpService({ email, password, name });
            dispatch(login({ email, password }));
            return;
        }

        dispatch(login({ email, password }));
    };

    return (
        <Container maxWidth="xs" sx={{ marginTop: "20vh" }}>
            <Box sx={{ display: "grid", gap: "2rem" }}>
                <Box sx={{ display: "grid", justifyContent: "center" }}>
                    <Box
                        sx={{
                            display: "grid",
                            justifyContent: "center",
                            mb: 2,
                        }}
                    >
                        <img src={logo} alt="page-icon" />
                    </Box>
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                    >
                        Sing in to you account
                    </Typography>
                </Box>
                <Box component="form" onSubmit={handleSubmit}>
                    <Box sx={{ display: "grid", gap: "1rem", mb: 2 }}>
                        <LoginInput
                            type="email"
                            placeholder="Email address"
                            fullWidth
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        {signup ? (
                            <LoginInput
                                type="text"
                                placeholder="Name"
                                fullWidth
                                onChange={({ target }) => setName(target.value)}
                            />
                        ) : (
                            ""
                        )}
                        <LoginInput
                            type="password"
                            placeholder="Password"
                            fullWidth
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        startIcon={<LockIcon />}
                        fullWidth
                        type="submit"
                    >
                        {signup ? "Sign up" : "Login"}
                    </Button>
                </Box>
                <Divider />
                {signup ? (
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ justifySelf: "center", mr: 2 }}
                    >
                        Have an account?
                        <Link
                            href="#"
                            underline="none"
                            sx={{ ml: 1 }}
                            onClick={() => {
                                setName("");
                                setSignup(false);
                            }}
                        >
                            Login
                        </Link>
                    </Typography>
                ) : (
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ justifySelf: "center", mr: 2 }}
                    >
                        Don't have an account?
                        <Link
                            href="#"
                            underline="none"
                            sx={{ ml: 1 }}
                            onClick={() => setSignup(true)}
                        >
                            Sign up
                        </Link>
                    </Typography>
                )}
            </Box>
        </Container>
    );
}

export default Login;
