import React from "react";
import Box from "@mui/material/Container";
import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Board() {
    const images = useSelector((state) => state.Images);
    return (
        <Box sx={{ mt: 3 }}>
            <ImageList variant="masonry" cols={3} gap={25}>
                {images.map((item) => (
                    <ImageListItem key={item.id} sx={{ borderRadius: "12px" }}>
                        <img
                            src={`${item.link}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.description}
                            loading="lazy"
                            styles={{ borderRadius: "12px" }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default Board;
