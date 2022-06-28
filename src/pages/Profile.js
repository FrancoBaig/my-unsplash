import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { removePhoto } from "../reducers/userReducer";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Nav from "../components/Nav";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CollectionsIcon from "@mui/icons-material/Collections";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";

const Card = styled(Paper)(({ theme }) => ({
    marginTop: "2rem",
    padding: "1rem",
    width: "10rem",
    fontSize: "1.4rem",
    color: "4F4F4F",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    "& .MuiTypography-subtitle1": {
        fontSize: "2rem",
        color: theme.palette.text.primary,
        fontWeight: 700,
    },

    "& .MuiTypography-subtitle2": {
        fontSize: "1.2rem",
    },
}));

function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [value, setValue] = useState(0);
    const images = useSelector((state) => {
        if (value === 0) {
            return state.user.userImages;
        } else {
            return state.user.liked;
        }
    });

    const [anchorElUser, setAnchorElUser] = useState(null);
    const data = useSelector((state) => state);
    const numberPublications = user.userImages.length;
    const numberLikes = user.userImages.reduce(
        (prev, curr) => (prev += curr.likes),
        0
    );
    const matches = useMediaQuery("(min-width:600px");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleRemove = (imageId) => {
        dispatch(removePhoto(imageId));
    };

    return (
        <Container maxWidth={matches ? "lg" : "md"}>
            <Nav />
            <div
                style={{
                    marginTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Avatar sx={{ width: 56, height: 56 }}>
                    {data.user.name.toUppercase}
                </Avatar>
                <Typography variant="h4" sx={{ mt: 1, fontSize: "2.4rem" }}>
                    {data.user.name}
                </Typography>
                <Box sx={{ display: "flex", gap: "2rem" }}>
                    <Card elevation={3}>
                        <Typography variant="subtitle1">
                            {numberPublications}
                        </Typography>
                        <Typography variant="subtitle2">Photos</Typography>
                    </Card>
                    <Card elevation={3}>
                        <Typography variant="subtitle1">
                            {numberLikes}
                        </Typography>
                        <Typography variant="subtitle2">Likes</Typography>
                    </Card>
                </Box>
            </div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab
                            icon={<CollectionsIcon />}
                            aria-label="person"
                            sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: "3rem",
                                },
                            }}
                        />
                        <Tab
                            icon={<FavoriteIcon />}
                            aria-label="favorite"
                            sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: "3rem",
                                },
                            }}
                        />
                    </Tabs>
                </Box>
            </Box>
            <Box sx={{ m: 3 }}>
                <ImageList cols={matches ? 3 : 2} gap={20}>
                    {images.map((item) => (
                        <ImageListItem
                            key={item.id}
                            sx={{ borderRadius: "12px" }}
                        >
                            <img
                                src={`${item.link}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.description}
                                loading="lazy"
                                styles={{ borderRadius: "12px" }}
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                                        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                                    borderRadius: "12px",
                                }}
                                title={item.title}
                                position="top"
                                actionIcon={
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <IconButton
                                            sx={{ color: "white" }}
                                            aria-label={`star ${item.title}`}
                                        >
                                            <FavoriteIcon
                                                fontSize="large"
                                                sx={{
                                                    color: "#e93435",
                                                    fontSize: "18px",
                                                }}
                                            />
                                        </IconButton>
                                        <Typography
                                            sx={{
                                                fontSize: "1.4rem",
                                                color: "#FFFFFF",
                                                paddingBottom: "1px",
                                            }}
                                        >
                                            {item.likes}
                                        </Typography>
                                        <Box
                                            sx={{
                                                flexGrow: 0,
                                                position: "absolute",
                                                right: 5,
                                                top: 7,
                                            }}
                                        >
                                            <Tooltip title="Open settings">
                                                <IconButton
                                                    onClick={handleOpenUserMenu}
                                                    sx={{
                                                        p: 0,
                                                    }}
                                                >
                                                    <MoreVertIcon
                                                        sx={{
                                                            color: "#FFFFFF",
                                                            fontSize: "1.8rem",
                                                        }}
                                                    />
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                                sx={{
                                                    mt: "22px",
                                                }}
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
                                                    <Typography
                                                        textAlign="center"
                                                        sx={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: ".3rem",
                                                            fontSize: "1.2rem",
                                                        }}
                                                        onClick={() => {
                                                            handleRemove(
                                                                item.id
                                                            );
                                                        }}
                                                    >
                                                        <DeleteIcon />
                                                        Delete
                                                    </Typography>
                                                </MenuItem>
                                            </Menu>
                                        </Box>
                                    </Box>
                                }
                                actionPosition="left"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}

export default Profile;
