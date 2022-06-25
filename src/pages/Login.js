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
        color: "#BDBDBD",
    },

    "& .MuiInputBase-input:focus": {
        color: "black",
    },
});

function Login() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const navigate = useNavigate();

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(login({ email, password }));
    };

    return (
        <Container maxWidth="xs" sx={{ marginTop: "30vh" }}>
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
                        Send
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
