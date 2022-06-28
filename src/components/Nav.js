import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
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
import { filterChange } from "../reducers/filterReducer";

import ImageForm from "./ImageForm";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import useMediaQuery from "@mui/material/useMediaQuery";

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

function Nav() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const matches = useMediaQuery("(min-width:600px");

    const location = useLocation();
    const isProfile = location.pathname === "/profile" ? true : false;

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
                        <img
                            src={logo}
                            alt="page-icon"
                            onClick={() => navigate("../")}
                            style={{ cursor: "pointer" }}
                        />
                        <Search sx={{ mr: 1 }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                                onChange={({ target }) =>
                                    dispatch(filterChange(target.value))
                                }
                            />
                        </Search>
                    </Box>
                    {user.email !== "" ? (
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                    fontSize: 12,
                                    py: 1,
                                    textTransform: "none",
                                    display: {
                                        xs: "none",
                                        sm: "block",
                                    },
                                }}
                                onClick={() => setOpen(true)}
                            >
                                Add a photo
                            </Button>
                            {isProfile ? (
                                ""
                            ) : (
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton
                                            onClick={handleOpenUserMenu}
                                            sx={{ p: 0 }}
                                        >
                                            <Avatar
                                                alt={user.name.toUpperCase()}
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
                                        <MenuItem
                                            onClick={() => {
                                                navigate("../profile");
                                                handleCloseUserMenu();
                                            }}
                                        >
                                            <Typography textAlign="center">
                                                Images
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">
                                                Logout
                                            </Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            )}
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
            <Box
                sx={{
                    "& > :not(style)": {
                        position: "fixed",
                        right: 15,
                        bottom: 10,
                    },
                }}
            >
                <Fab
                    color="primary"
                    aria-label="add"
                    sx={{
                        display: {
                            sm: "none",
                        },
                    }}
                    onClick={() => setOpen(true)}
                >
                    <AddIcon />
                </Fab>
            </Box>
        </>
    );
}

export default Nav;
