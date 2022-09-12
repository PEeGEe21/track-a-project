import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div>
            <div className='mx-auto container max-w-lg mt-8 ' >
                <div className='bg-gray-300  p-8 rounded-lg shadow-md'>
                    <form>
                        <div className='mb-4'>
                            <h3 className='text-xl text-center underline underline-offset-2'>SignUp</h3>
                        </div>
                        <div className='mb-4 flex flex-col gap-1'>
                            <label className='text-sm' htmlFor='username'>Username</label>
                            <input type="text" className='border-b border-gray-400 focus:border-gray-500 h-50 focus:outline-0 bg-transparent mb-3' name='username' id='username' required/>
                        </div>
                        <div className='mb-4 flex flex-col gap-1'>
                            <label className='text-sm' htmlFor='email'>Email</label>
                            <input type="text" className='border-b border-gray-400 focus:border-gray-500 h-50 focus:outline-0 bg-transparent mb-3' name='email' id='email' required/>
                        </div>
                        <div className='mb-4 flex flex-col gap-1'>
                            <label  className='text-sm' htmlFor='password'>Password</label>
                            <input type="text" className='border-b border-gray-400 focus:border-gray-500  h-50 focus:outline-0 bg-transparent' name='password' id='password' required/>
                        </div>
                        <button type="submit" className='w-full h-50 bg-amber-200 py-3 px-3 mt-4 hover:shadow-md transition-all duration-300 ease '>SignUp</button>
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