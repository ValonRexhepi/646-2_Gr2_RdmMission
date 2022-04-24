import React from "react"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Typography
} from "@mui/material"
import { usePopup } from "../../contexts/PopupContext"

export default function Popup() {
    const { content, setContent } = usePopup()

    const handleClose = () => {
        setContent({ ...content, isOpen: false })
    }

    const handleAgree = () => {
        content.msg?.includes("l'indice") 
        ? setContent({ ...content, isOpen: false, isHint: true, isSolution: false }) 
        : setContent({ ...content, isOpen: false, isHint: false, isSolution: true }) 
    }

    return (
        <Dialog
            open={content.isOpen}
            onClose={handleClose}
        >
            <DialogTitle>
                {"Êtes-vous sûr ?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{content.msg}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    <Typography variant="body2" color="error">No</Typography>
                </Button>
                <Button onClick={handleAgree}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
