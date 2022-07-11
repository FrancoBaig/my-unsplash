import React from "react";
import Box from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router";
import { handleLike } from "../reducers/userReducer";
import useMediaQuery from "@mui/material/useMediaQuery";

function Board() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const filter = useSelector((state) => state.filter.toUpperCase());
    const images = useSelector((state) => {
        if (filter === "") {
            return state.images;
        } else {
            return state.images.filter((el) =>
                el.description.toUpperCase().includes(filter)
            );
        }
    });
    const matches = useMediaQuery("(min-width:600px");

    const likes = useSelector((state) => state.user.likes);

    const handleUpdateLike = (id) => {
        if (user.token === "") {
            return navigate("../login");
        }

        dispatch(handleLike(user.id, likes, id));
    };

    return (
        <Box sx={{ mt: 3 }}>
            <ImageList variant="masonry" cols={matches ? 3 : 2} gap={20}>
                {images.map((item) => (
                    <ImageListItem key={item.id} sx={{ borderRadius: "12px" }}>
                        <img
                            src={`${item.link}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.description}
                            styles={{ borderRadius: "12px" }}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{
                                background:
                                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                                borderRadius: "12px",
                                opacity: {
                                    xs: 1,
                                    sm: 0,
                                },
                            }}
                            title={item.title}
                            position="top"
                            actionIcon={
                                <IconButton
                                    sx={{ color: "white" }}
                                    aria-label={`star ${item.title}`}
                                    onClick={() => {
                                        handleUpdateLike(item.id);
                                    }}
                                >
                                    {likes.includes(item.id) ? (
                                        <FavoriteIcon
                                            fontSize="large"
                                            sx={{
                                                color: "#e93435",
                                                fontSize: "18px",
                                            }}
                                        />
                                    ) : (
                                        <FavoriteBorderIcon
                                            sx={{ fontSize: "18px" }}
                                        />
                                    )}
                                </IconButton>
                            }
                            actionPosition="left"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default Board;
