import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SvgIcon from "@mui/material/SvgIcon";
import logo from "../logo.svg";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { initializeImages } from "../reducers/imagesReducer";
import Board from "../components/Board";

import ImageForm from "./ImageForm";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #BDBDBD",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const AddButton = styled(Button)(({ theme }) => ({
    fontSize: 16,
    backgroundColor: "red",
}));

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Images", "Logout"];

function Nav() {
    const user = useSelector((store) => store.user);

    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <Container sx={{ mt: 1 }}>
                <Toolbar
                    disableGutters
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Box sx={{ display: "flex", gap: "2rem" }}>
                        <img src={logo} alt="page-icon" />
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                    </Box>
                    {user.hasOwnProperty("token") ? (
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                    fontSize: 12,
                                    py: 1,
                                    textTransform: "none",
                                }}
                                onClick={() => setOpen(true)}
                            >
                                Add a photo
                            </Button>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0 }}
                                    >
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/images/avatar/2.jpg"
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem
                                            key={setting}
                                            onClick={handleCloseUserMenu}
                                        >
                                            <Typography textAlign="center">
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Box>
                    ) : (
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                fontSize: 12,
                                py: 1,
                                textTransform: "none",
                            }}
                            onClick={() => navigate("../login")}
                        >
                            Login
                        </Button>
                    )}
                </Toolbar>
            </Container>
            <ImageForm open={open} setOpen={setOpen} />
        </>
    );
}

export default Nav;
