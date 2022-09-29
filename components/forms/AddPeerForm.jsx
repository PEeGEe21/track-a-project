import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AddPeerForm = ({open, onClose}) => {
  return (
    <>
        <div>                   
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Add a Peer</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Send a request to a Peer to join this Project. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, a beatae. Rem obcaecati dolorum iusto!
                </DialogContentText>
                
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                />

                {/* <span>Or</span>

                <TextField 
                    margin="dense"
                    id="username"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                /> */}
                </DialogContent>
                <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose}>Send</Button>
                </DialogActions>
            </Dialog>
        </div>
    </>
  )
}

export default AddPeerForm