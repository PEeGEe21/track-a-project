import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useRouter } from 'next/router';
import {host} from '../components/routes'
const SignUp = () => {

    const router = useRouter();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        email: ''
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



    useEffect(() => {
        if (localStorage.getItem('trackproject-user')) {
          router.push("/");
        }
      }, []);

    const handleChange = (e) =>{
        setInputs(prev => {
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const handleValidation = () =>{
        const {password, username, email} = inputs;
        if ((username === "") && (email === "") && (password === "") ){
            toast.error('Fill in all required fields', errortoastOptions);
            return false;
        }else if (username === ""){
            toast.error('Username is required', errortoastOptions);
            return false;
        }else if (username.length < 3){
            toast.error('Username must be more than 3 characters', errortoastOptions);
            return false;
        }else if(email === "" ){
            toast.error('Email is required', errortoastOptions);
            return false;
        }else if(password === "" ){
            toast.error('Password is required', errortoastOptions);
            return false;
        }else if(password.length < 5 ){
            toast.error('Password must be more than 5 characters', errortoastOptions);
            return false;
        }
        
       return true; 
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log(host)
        
        if(handleValidation()){
            try {
                // console.log("in validation");
                const {password, username, email} = inputs;

                const data = await axios.post(`${host}/auth/register`, {
                    username, 
                    email,
                    password
                });
                // console.log(data.data, "works")
                // console.log(inputs, "inputsssss")

                if(data.data.status === false) {
                    // console.log("errroooooorrrrrrrrr")
                    toast.error(data.data.msg, errortoastOptions);
                }
                if(data.data.status === true) {
                   
                    toast.success(data.data.msg, successtoastOptions);
                    setInputs({
                        username: '',
                        password: '',
                        email: ''
                    });
                    localStorage.setItem(
                        'trackproject-user',
                        JSON.stringify(data.data.user)
                      );
                      window.location.reload();
                    // useEffect(() => {
                        setTimeout(()=>{
                            router.push("/");
                        }, 2000)
                    // }, [])
                    
                }
                // console.log(data);
            } catch(err){
                toast.error(err, errortoastOptions);

            }
        }
        
    }

    useEffect(() => {
        router.prefetch('/')
    }, [])

  return (
    <div>
        <Toaster/>

            <div className='mx-auto container max-w-lg mt-8 ' >
                <div className='bg-gray-300  p-8 rounded-lg shadow-md'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <h3 className='text-xl text-center underline underline-offset-2'>SignUp</h3>
                        </div>
                        <div className='mb-4 flex flex-col gap-1'>
                            <label className='text-sm' htmlFor='username'>Username</label>
                            <input type="text" className='border border-gray-400 focus:border-gray-500 h-10 focus:outline-0 bg-transparent rounded mb-3 px-2' name='username' id='username' required onChange={handleChange}/>
                        </div>
                        <div className='mb-4 flex flex-col gap-1'>
                            <label className='text-sm' htmlFor='email'>Email</label>
                            <input type="email" className='border border-gray-400 focus:border-gray-500 h-10 focus:outline-0 bg-transparent rounded mb-3 px-2' name='email' id='email' required onChange={handleChange}/>
                        </div>
                        <div className='mb-4 flex flex-col gap-1'>
                            <label  className='text-sm' htmlFor='password'>Password</label>
                            <input type="password" className='border border-gray-400 focus:border-gray-500  h-10 focus:outline-0 bg-transparent rounded px-2' name='password' id='password' required onChange={handleChange}/>
                        </div>
                        <button onClick={(e) => handleSubmit} className='w-full h-50 bg-amber-200 py-3 px-3 mt-4 hover:shadow-md transition-all duration-300 ease rounded' >SignUp</button>
                    </form>

                </div>
                <div className='mt-3'>
                    <div className='flex items-center justify-between mb-4'>
                        <p className='text-[#6c7293]'>Already have an account? 
                        <Link href='/login'>
                            <a className='hover:underline'> Sign in</a>
                        
                        </Link>
                        
                        </p>
                        {/* <a href='' className='underline text-sm text-[#6c7293]'>Forgot Password?</a> */}

                    </div>
                    {/* <p>Having Issues? <a href=''>Send us a mail</a></p> */}

                </div>

            </div>

    </div>
  )
}

export default SignUp