import { useContext } from 'react'
import * as React from 'react'
import { GlobalStoreContext } from '../store'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

/*
    This modal will display itself when the user attempts
    to delete a list
    
    @author Brandon Lam
*/

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function DeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    
    const [open, setOpen] = React.useState(true);
    const handleSubmit = () => {
        store.deleteMarkedList();
        handleClose();
    }

    const handleClose = () => {
        store.unmarkListForDeletion();
        setOpen(false);
    }
    return (
        <Modal
            id="delete-modal"
            aria-labelledby="delete-modal-title"
            aria-describedby="delete-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                Are you sure you want to delete this list?
                <Button onClick={handleSubmit}>Confirm</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </Box>
            </Fade>
        </Modal>
    );

}
