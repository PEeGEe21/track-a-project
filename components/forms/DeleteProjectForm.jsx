import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';
import axios from 'axios';


const DeleteForm = ({open, onClose, projectId, projectName}) => {

    const handleDelete = () => {
        // console.log(projectId, "clicked id")
        try{
            const res = axios.delete(`http://localhost:5000/api/projects/delete/${projectId}/`);
            if(res){

                    router.push(`/projects`);
                    
                }
        }catch(err){

        }
    };


    const router = useRouter() 

  return (
    <>
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Delete <span className='capitalize'>{projectName}</span></DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You are the deleting this project and all its associated tasks. Please note, <span className='text-red-700'><span className='capitalize'>{projectName}</span> cannot be recovered after it's deletion</span>.
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

export default DeleteForm