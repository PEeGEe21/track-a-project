import Link from 'next/link'
import React, {useEffect, useState, useContext} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useRouter } from 'next/router';
import { host } from '../components/routes'
import AppContext from '../components/AppContext'


const Login = () => {
//   const {item, user, addUser} = useContext(AppContext);


    const router = useRouter();
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    

    
    const errortoastOptions = {
        duration: 8000,
        position: 'top-center',
        style: {},
        className: '',
        // Custom Icon
        // icon: '👏',
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
        const {username, password} = inputs;
        if ((username === "") && (password === "") ){
            toast.error('Fill in all required fields', errortoastOptions);
            return false;
        }else if (username === ""){
            toast.error('Username is required', errortoastOptions);
            return false;
        }else if (username.length < 3){
            toast.error('Username must be more than 3 characters', errortoastOptions);
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
                const {password, username} = inputs;

                const data = await axios.post(`${host}/auth/login`, {
                    username, 
                    password
                });
                // console.log(data.data, "works")
                // console.log(inputs, "inputsssss")

                if(data.data.status === false) {
                    // console.log("errroooooorrrrrrrrr")
                    toast.error(data.data.msg, errortoastOptions);
                }
                if(data.data.status === true) {
                    // toast.error(data.data.msg, toastOptions);
                    // addUser(data.data.user)
                    localStorage.setItem(
                        'trackproject-user',
                        JSON.stringify(data.data.user)
                      );
                    router.push("/");
                    window.location.reload();
                }
                // console.log(data);
            } catch(err){
                toast.error(err, errortoastOptions);
                // console.log(err);


            }
        }
        
    }

    useEffect(() => {
        router.prefetch('/')
    }, [])

  return (
    <div>
        <Toaster/>
        {/* bg-[#1f2124] */}
            <div className='mx-auto container max-w-lg mt-8 ' >
                <div className='bg-gray-300 text-gray-700  p-8 rounded-lg shadow-md ' >
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <h3 className='text-2xl text-center underline underline-offset-2'>Login</h3>
                        </div>
                        <div className='mb-4 flex flex-col gap-1'>
                            <label className='text-sm' htmlFor='username'>Username</label>
                            <input type="text" className='border px-2 border-gray-400 focus:border-gray-600 h-10 rounded focus:outline-0 bg-transparent mb-3' name='username' id='username' required onChange={handleChange}/>
                        </div>
                        <div className='mb-4 flex flex-col gap-1'>
                            <label  className='text-sm' htmlFor='password'>Password</label>
                            <input type="password" className='border px-2 border-gray-400 focus:border-gray-600 h-10 rounded focus:outline-0 bg-transparent' name='password' id='password' required onChange={handleChange}/>
                        </div>
                        <button className='w-full h-50 bg-amber-200 py-3 px-3 mt-4 hover:shadow-md hover:bg-white transition-all duration-300 ease text-gray-700 ' onClick={(e)=>handleSubmit}>Login</button>
                    </form>

                </div>
                <div className='mt-3'>
                    <div className='flex items-center justify-between mb-4'>
                        <p className='text-[#6c7293]'>Dont have an account? 
                        
                        <Link href='/signup'>
                            <a className='hover:underline'> Sign Up</a>
                        </Link>
                        </p>
                        <a href='' className='underline text-sm text-[#6c7293]'>Forgot Password?</a>

                    </div>
                    {/* <p>Having Issues? <a href=''>Send us a mail</a></p> */}

                </div>

            </div>

    </div>
  )
}

export default Login