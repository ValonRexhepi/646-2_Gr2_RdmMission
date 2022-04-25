import React from "react"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from "@mui/material"
import { storeDataLS } from "../../utils/helpers"
import { useHintSolution } from "../../contexts/HintSolutionContext"

export default function HintSolution() {
    const { hintSolution, setHintSolution } = useHintSolution()

    const handleClose = () => {
        setHintSolution({ ...hintSolution, isOpen: false })
        storeDataLS(hintSolution.key, hintSolution.time)
        window.location.reload(true)
    }

    return (
        <Dialog
            open={hintSolution.isOpen}
            onClose={handleClose}
        >
            <DialogTitle>
                {hintSolution.isHint ? "Indice" : "Solution"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{hintSolution.text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Fermer
                </Button>
            </DialogActions>
        </Dialog>
    )
}
