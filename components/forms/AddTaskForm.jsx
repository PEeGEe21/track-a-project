import React, {useEffect, useState} from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { host } from '../routes';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const AddTaskForm = ({open, onClose, projectId, projectName}) => {
      // const {item, user} = useContext(AppContext);
  const [user, setUser] = useState()
  const [userId, setUserId] = useState()
  const router = useRouter();

  const [inputs, setInputs] = useState({
    title: '',
    description: '',
});

const [error, setError] = useState(null);


const toastOptions = {
    duration: 8000,
    position: 'bottom-right',
    style: {},
    className: '',
    // Custom Icon
    icon: '👏',
    // Change colors of success/error/loading icon
    iconTheme: {
        primary: 'red',
        secondary: '#fff',
        success: 'green'
    },
    ariaProps: {
        role: 'status',
        'aria-live': 'polite',
    },
}


const handleChange = (e) =>{
    setInputs(prev => {
        return {...prev, [e.target.name]:e.target.value}
    })
}

const handleValidation = () =>{
    const {title, description} = inputs;
    if ((title === "") && (description === "")){
        toast.error('Fill in all required fields', toastOptions);
        return false;
    }else if (title === ""){
        toast.error('Title is required', toastOptions);
        return false;
    }else if(description === "" ){
        toast.error('Description is required', toastOptions);
        return false;
    }
   return true; 
};


const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log(host)
    
    if(handleValidation()){
        try {
            // console.log(author, "its seeing it here");
            const {title, description} = inputs;

            const data = await axios.post(`${host}/tasks/${projectId}/addTask`, {
                title, 
                description
            });
            // console.log(data.data, "works")
            // console.log(inputs, "inputsssss")

            if(data.data.status === false) {
                // console.log("errroooooorrrrrrrrr")
                toast.error(data.data.msg, toastOptions);
            }else if(data.data.status === true) {
            //   console.log(data.data, "works")
               
                toast.success(data.data.msg, toastOptions);
                onClose()
                // localStorage.setItem(
                //     'trackproject-user',
                //     JSON.stringify(data.data.user)
                //   );
                // useEffect(() => {
                //     setTimeout(()=>{
                        // router.push(`/projects/${data.data.project._id}`);
                        // router.push(`/projects`);
                //     }, 2000)
                // }, [])
                
                
            }
            // console.log(data);
        } catch(err){
            toast.error(err, toastOptions);

        }
    }
    
}

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]


  return (
    <div>
        <Toaster/>
                    
                        <Dialog open={open} onClose={onClose}>
                            <DialogTitle>Add a Task to {projectName}</DialogTitle>
                            <DialogContent>
                            {/* <DialogContentText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum explicabo eaque delectus ad error deleniti numquam ratione ipsum quae similique.
                            </DialogContentText> */}
                            <TextField
                                autoFocus
                                margin="dense"
                                id="title"
                                label="Title"
                                type="text"
                                fullWidth
                                variant="outlined" 
                                onChange={handleChange} 
                                name="title"
                            />
                            {/* <Editor onChange={handleChange} /> */}
                            <TextField 
                                multiline
                                rows={5} 
                                margin="dense"
                                id="description" 
                                name="description" 
                                label="Description"
                                type="text"
                                fullWidth
                                variant="outlined" 
                                onChange={handleChange}

                            />
                            {/* <ReactQuill theme="snow" modules={modules} formats={formats}/> */}
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={handleSubmit}>Add</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
  )
}

export default AddTaskForm