import { useContext } from 'react'
import * as React from 'react'
import AuthContext from '../auth'
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

/*
    This modal will display itself when the user makes an
    error during sign up / sign in.
    
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

export default function SignInModal() {
    const { auth } = useContext(AuthContext);
    let code = auth.getErrorCode();
    
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        auth.setErrorCode(null);
        setOpen(false);
    }
    return (
        <Modal
            id="signin-modal"
            aria-labelledby="signin-modal-title"
            aria-describedby="signin-modal-description"
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
            <Alert severity="error">
            <strong>{code}</strong>
            <Button onClick={handleClose}>{"\u2715"}</Button>
            </Alert>
            </Box>
            </Fade>
        </Modal>
    );

}
