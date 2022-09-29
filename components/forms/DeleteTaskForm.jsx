import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';
import axios from 'axios';


const DeleteTaskForm = ({open, onClose, projectId, projectName, task}) => {

    const handleDelete = () => {
        // console.log(projectId, "clicked id")
        try{

            const res = axios.delete(`http://localhost:5000/api/tasks/delete/${task}/`);
            if(res){

                    onClose()
                    
                }
        }catch(err){

        }
    };


    const router = useRouter() 

  return (
    <>
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You are deleting this task. It cannot be recovered after it's deletion.
                </DialogContentText>
        
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleDelete} variant="outlined" color="error">Delete</Button>
            </DialogActions>
    </Dialog>





    
    </>
  )
}

export default DeleteTaskForm