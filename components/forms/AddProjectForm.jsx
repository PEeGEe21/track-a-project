import React, {useContext, useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from '../AppContext';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useRouter } from 'next/router';
import {host} from '../routes'




const AddProjectForm = ({open, handleClose}) => {

  // const {item, user} = useContext(AppContext);
  const [user, setUser] = useState()
  const [userId, setUserId] = useState()
  const router = useRouter();

  useEffect(()=>{
    const getUser = async ()=>{
        try{

            if (localStorage.getItem('trackproject-user')){
                const data = await JSON.parse(
                  localStorage.getItem("trackproject-user")
                );
                setUser(data)
                
                setUserId(data._id)
                // console.log(userId, "userId")
            }else{
              router.push("/login")
            }
                

        }catch(err){}
    };
    getUser()
}, [])

  // console.log(user, "user please")
  // if(user){
  //   const author = user._id;
  //   console.log(author, "author id");

  // }

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
const errtoastOptions = {
    duration: 8000,
    position: 'bottom-right',
    style: {},
    className: '',
    // Custom Icon
    // icon: '👏',
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



// useEffect(() => {
//     if (localStorage.getItem('trackproject-user')) {
//       router.push("/");
//     }
//   }, []);

const handleChange = (e) =>{
    setInputs(prev => {
        return {...prev, [e.target.name]:e.target.value}
    })
}

// const handleValidation = () =>{
//     const {title, description} = inputs;
//     if ((username === "") && (email === "") && (password === "") ){
//         toast.error('Fill in all required fields', toastOptions);
//         return false;
//     }else if (username === ""){
//         toast.error('Username is required', toastOptions);
//         return false;
//     }else if (username.length < 3){
//         toast.error('Username must be more than 3 characters', toastOptions);
//         return false;
//     }else if(email === "" ){
//         toast.error('Email is required', toastOptions);
//         return false;
//     }else if(password === "" ){
//         toast.error('Password is required', toastOptions);
//         return false;
//     }else if(password.length < 5 ){
//         toast.error('Password must be more than 5 characters', toastOptions);
//         return false;
//     }
    
//    return true; 
// };


const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log(host)
    
    // if(handleValidation()){
        try {
            // console.log(author, "its seeing it here");
            const {title, description} = inputs;

            const data = await axios.post(`${host}/projects/addProject`, {
                author:userId,
                title, 
                description
            });
            // console.log(data.data, "works")
            // console.log(inputs, "inputsssss")

            if(data.data.status === false) {
                // console.log("errroooooorrrrrrrrr")
                toast.error(data.data.msg, errtoastOptions);
            }else if(data.data.status === true) {
            //   console.log(data.data, "works")
               
                toast.success(data.data.msg, toastOptions);
                handleClose()
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
            toast.error(err, errtoastOptions);

        }
    // }
    
}



  return (
    <>
    <Toaster/>
        <Dialog open={open} onClose={handleClose} onSubmit={handleClose}>
                        <DialogTitle>Add a Project</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum explicabo eaque delectus ad error deleniti numquam ratione ipsum quae similique.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text" 
                            name="title" 
                            fullWidth
                            variant="standard"
                            onChange={handleChange} 
                            required

                        />
                        <TextField 
                            multiline
                            rows={5} 
                            margin="dense"
                            id="description" 
                            name="description" 
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard" 
                            onChange={handleChange} 
                            required

                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Save</Button>
                        </DialogActions>
                    </Dialog>
    </>
  )
}

export default AddProjectForm