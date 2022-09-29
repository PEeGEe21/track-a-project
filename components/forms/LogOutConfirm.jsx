
import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';
import axios from 'axios';

const LogOutConfirm = ({open, onClose, logout}) => {

  return (
    <div>





        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Logout</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are Signing out of your account. Are you sure? 
                    </DialogContentText>
            
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>No, Cancel</Button>
                    <Button onClick={logout} variant="outlined" color="error">Yes, LogOut</Button>
                </DialogActions>
        </Dialog>

    </div>
  )
}

export default LogOutConfirm