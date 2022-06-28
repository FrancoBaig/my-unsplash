import React, { useEffect } from "react";
import "./App.css";

import Board from "./components/Board";
import Nav from "./components/Nav";

import { useDispatch } from "react-redux";
import { initializeImages } from "./reducers/imagesReducer";

import Container from "@mui/material/Container";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeImages());
    }, [dispatch]);

    return (
        <Container maxWidth="md">
            <Nav />
            <Board />
        </Container>
    );
}

export default App;
