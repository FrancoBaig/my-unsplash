import React from "react";
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
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
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
                        />
                    </Box>
                    <Box sx={{ display: "grid", gap: "1rem", mb: 2 }}>
                        <Label>Photo URL</Label>
                        <CssInput
                            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
                            fullWidth
                        />
                    </Box>
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            variant="text"
                            size="medium"
                            sx={{ color: "#BDBDBD" }}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleClose} variant="contained">
                            Submit
                        </Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default ImageForm;
