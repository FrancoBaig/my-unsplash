// import React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material/styles";

// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";

// function ImageListComponent({ images }) {
//     return (
//         <Box sx={{ m: 3 }}>
//             <ImageList cols={3} gap={20}>
//                 {images.map((item) => (
//                     <ImageListItem key={item.id} sx={{ borderRadius: "12px" }}>
//                         <img
//                             src={`${item.link}?w=248&fit=crop&auto=format`}
//                             srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                             alt={item.description}
//                             loading="lazy"
//                             styles={{ borderRadius: "12px" }}
//                         />
//                         <ImageListItemBar
//                             sx={{
//                                 background:
//                                     "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
//                                     "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//                                 borderRadius: "12px",
//                             }}
//                             title={item.title}
//                             position="top"
//                             actionIcon={
//                                 <Box
//                                     sx={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                     }}
//                                 >
//                                     <IconButton
//                                         sx={{ color: "white" }}
//                                         aria-label={`star ${item.title}`}
//                                         onClick={() => {
//                                             handleUpdateLike(item.id);
//                                         }}
//                                     >
//                                         {likes.includes(item.id) ? (
//                                             <FavoriteIcon
//                                                 fontSize="large"
//                                                 sx={{
//                                                     color: "#e93435",
//                                                     fontSize: "18px",
//                                                 }}
//                                             />
//                                         ) : (
//                                             <FavoriteBorderIcon
//                                                 sx={{ fontSize: "18px" }}
//                                             />
//                                         )}
//                                     </IconButton>
//                                     <Typography
//                                         sx={{
//                                             fontSize: "1.4rem",
//                                             color: "#FFFFFF",
//                                             paddingBottom: "1px",
//                                         }}
//                                     >
//                                         {item.likes}
//                                     </Typography>
//                                 </Box>
//                             }
//                             actionPosition="left"
//                         />
//                     </ImageListItem>
//                 ))}
//             </ImageList>
//         </Box>
//     );
// }

// export default ImageListComponent;
