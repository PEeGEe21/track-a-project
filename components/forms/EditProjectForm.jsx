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
// import 'react-quill/dist/quill.snow.css'



const EditProjectForm = ({open, onClose, projectId, projectName, projectDesc}) => {

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

  

  const [inputs, setInputs] = useState({
    title: '',
    description: '',
});

const [error, setError] = useState(null);


const successtoastOptions = {
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
const errortoastOptions = {
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



const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log(host)
    
    // if(handleValidation()){
        try {
            // console.log(author, "its seeing it here");
            const {title, description} = inputs;
            
            const data = await axios.patch(`${host}/projects/update/${projectId}`, {
                author:userId,
                title, 
                description
            });
            // console.log(data.data, "works")
            // console.log(inputs, "inputsssss")

            if(data.data.status === false) {
                // console.log("errroooooorrrrrrrrr")
                toast.error(data.data.msg, errortoastOptions);
            }else if(data.data.status === true) {
            //   console.log(data.data, "works")
                // 
                // toast.success(data.data.msg, successtoastOptions);
                window.location.reload();
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
            toast.error(err, errortoastOptions);

        }
    // }
    
}




  return (
    <>
    <Toaster/>
        <Dialog open={open} onClose={onClose} onSubmit={handleSubmit}>
                        <DialogTitle>Update <span className='capitalize'>{projectName}</span></DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            update your project here cos, why not?. Illum explicabo eaque delectus ad error deleniti numquam ratione ipsum quae similique.
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
                            defaultValue={projectName}

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
                            defaultValue={projectDesc}

                        />
                        {/* <ReactQuill theme="snow" modules={modules}
                    formats={formats}/> */}
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Save</Button>
                        </DialogActions>
                    </Dialog>
    </>
  )
}

export default EditProjectForm