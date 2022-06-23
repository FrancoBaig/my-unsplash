import React, { useState } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import loginService from "../services/Login";

function Login() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = {
            email: email,
            password: password,
        };

        try {
            const response = await loginService(credentials);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <CssBaseline />
            <Container
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box>
                    <Paper sx={{ p: "3.5rem" }}>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            sx={{ display: "grid", gap: 2 }}
                            onSubmit={handleSubmit}
                        >
                            <Typography variant="h3">
                                Sign in to your account
                            </Typography>

                            <TextField
                                error={error}
                                id="email"
                                fullWidth
                                required
                                onChange={({ target }) =>
                                    setEmail(target.value)
                                }
                            />

                            <TextField
                                error={error}
                                id="password"
                                fullWidth
                                required
                                onChange={({ target }) =>
                                    setPassword(target.value)
                                }
                            />

                            <Button type="submit" variant="contained" fullWidth>
                                Sign in
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </>
    );
}

export default Login;
