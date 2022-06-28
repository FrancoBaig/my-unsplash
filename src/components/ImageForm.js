import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { styled } from "@mui/material/styles";

import { addPhoto } from "../reducers/imagesReducer";

const Label = styled(InputLabel)({
    fontSize: "1.4rem",
    color: "4F4F4F",
});

const CssInput = styled(InputBase)({
    "& .MuiInputBase-input": {
        borderRadius: 4,
        border: "1px solid #4F4F4F",
        padding: "1rem 1.5rem",
        borderRadius: "12px",
        fontSize: "1.4rem",
        color: "#BDBDBD",
    },

    "& .MuiInputBase-input:focus": {
        color: "black",
    },
});

function ImageForm({ open, setOpen }) {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newImage = {
            description: description,
            link: url,
            date: Date.now(),
        };

        dispatch(addPhoto(newImage, user));
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle sx={{ color: "#333333" }}>
                <Typography variant="h3" gutterBottom component="div">
                    Add a new photo
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Box component="form">
                    <Box sx={{ display: "grid", gap: "1rem", mb: 2 }}>
                        <Label>Description</Label>
                        <CssInput
                            placeholder="Suspendisse elit massa"
                            fullWidth
                            onChange={({ target }) =>
                                setDescription(target.value)
                            }
                        />
                    </Box>
                    <Box sx={{ display: "grid", gap: "1rem", mb: 2 }}>
                        <Label>Photo URL</Label>
                        <CssInput
                            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
                            fullWidth
                            onChange={({ target }) => setUrl(target.value)}
                        />
                    </Box>
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            variant="text"
                            size="medium"
                            sx={{
                                color: "#BDBDBD",
                                fontSize: {
                                    xs: "1.4rem",
                                    sm: "1.7rem",
                                },
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={(e) => handleSubmit(e)}
                            type="submit"
                            variant="contained"
                            sx={{
                                fontSize: {
                                    xs: "1.4rem",
                                    sm: "1.7rem",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default ImageForm;
