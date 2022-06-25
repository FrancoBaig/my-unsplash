import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#3DB46D",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#B9BDCF",
        },
        text: {
            primary: "#334680",
        },
        background: {
            default: "#f6f7fb",
            paper: "#FFFFFF",
        },
    },
    typography: {
        button: {
            fontSize: "1.6rem",
        },
        fontFamily: "Noto sans",
    },
    shape: {
        borderRadius: "8px",
    },
});
