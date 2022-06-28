import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
import signUpService from "../services/SignUp";

import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import LockIcon from "@mui/icons-material/Lock";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signup, setSignup] = useState(false);
    const [helperText, setHelperText] = useState("");

    useEffect(() => {
        if (user.email === "") return;

        navigate("../");
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (signup) {
            try {
                await signUpService({ email, password, name });
                dispatch(login({ email, password }));
            } catch (error) {
                setHelperText("ERROR");
            }
        } else {
            try {
                dispatch(login({ email, password }));
            } catch (error) {
                console.log(error);
            }
        }
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
                            required
                        />
                        {signup ? (
                            <LoginInput
                                type="text"
                                placeholder="Name"
                                fullWidth
                                onChange={({ target }) => setName(target.value)}
                                required
                            />
                        ) : (
                            ""
                        )}
                        <LoginInput
                            type="password"
                            placeholder="Password"
                            fullWidth
                            onChange={({ target }) => setPassword(target.value)}
                            required
                        />
                        <FormHelperText sx={{ fontSize: 24 }}>
                            {helperText}
                        </FormHelperText>
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
