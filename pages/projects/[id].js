import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommentIcon from '@mui/icons-material/Comment';
import { Badge } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(res){
        const data = await res.json();
  
        const paths = data.map(post => {
            return {
                params: {
                    id: post.id.toString()
                }
            }
        })

        return {
            paths,
            fallback: false

        }
    }
    
  }


  export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);

    if(res){
        const data = await res.json();

        return {
            props: {post: data}
        }
    }
    


  }

const Project = ({post}) => {
    const [commentSideBar, setCommentSideBar] = useState(false)
    const [addProgressDropdown, setAddProgressDropdown] = useState(false)
    const [isPeersDropdown, setIsPeersDropdown] = useState(false)
    const showAddProgressDropdown = () =>{
        setAddProgressDropdown(!addProgressDropdown)
    }
    const [open, setOpen] = React.useState(false);
    const [peeropen, setPeerOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const handlePeerClickOpen = () => {
        setPeerOpen(true);
    };

    const handlePeerClose = () => {
        setPeerOpen(false);
    };
    const showPeersDropdown = () => {
        setIsPeersDropdown(!isPeersDropdown);
    };


    const router = useRouter() 

    // useEffect(() => {



            // router.push("/");
            // router.go(-1); //To back one place
            // router.go(+1); //To go forward one place
    // }, [])

    const goBack =()=>{
        router.back();
    }
    const goForward =()=>{
        router.go(1);
    }

    return (

    <Layout>
        <div>
        
        {/* <Header/> */}

        <div className='px-4 py-10'>

            <div className='flex items-center justify-between gap-3 pt-4'>
                <div className='flex gap-4'>
                    
                    <button className=" p-1  bg-white text-gray-800 transition ease-in duration-200 text-center font-normal  rounded flex items-center justify-center wrapper relative border border-white hover:bg-gray-200 hover:border-gray-500 hover:border " onClick={goBack}>
                        <ArrowBackIcon />
                            
                    </button>

                    {/* <button className=" p-1  bg-white text-gray-800 transition ease-in duration-200 text-center  font-normal  rounded flex items-center justify-center wrapper relative border border-white hover:bg-gray-200 hover:border-gray-500 hover:border " onClick={goForward}>
                        <ArrowForwardIcon className='text-lg'/>
                            
                    </button> */}

                    
                </div>
                
                <div className='flex items-center justify-end gap-3 '>

            

                    <button className=" p-2  bg-white text-[#6c7293] transition ease-in duration-200 text-center text-sm font-normal  rounded flex items-center justify-center wrapper relative border border-white hover:bg-gray-200 hover:text-[#4A4957] hover:border-gray-500 hover:border ">
                        <svg className='h-6 w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        
                        {/* <span className="tooltip text-[10px]">Celo explorer</span> */}
                    </button>

                    <div className={` relative large-dropdown ${isPeersDropdown ? " active" : ""} `}>
                                
                    <button className={` p-2  bg-white transition text-[#6c7293] ease-in duration-200 text-center text-sm font-normal  rounded flex items-center justify-center wrapper relative border border-white hover:bg-gray-200 hover:border-gray-500 hover:border hover:text-[#4A4957] dropdown-active_btn `} onClick={showPeersDropdown}>
                        <svg  viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.63411 9.68341C7.60911 9.68341 7.59245 9.68341 7.56745 9.68341C7.52578 9.67508 7.46745 9.67508 7.41745 9.68341C5.00078 9.60841 3.17578 7.70841 3.17578 5.36675C3.17578 2.98341 5.11745 1.04175 7.50078 1.04175C9.88411 1.04175 11.8258 2.98341 11.8258 5.36675C11.8174 7.70841 9.98411 9.60841 7.65911 9.68341C7.65078 9.68341 7.64245 9.68341 7.63411 9.68341ZM7.50078 2.29175C5.80911 2.29175 4.42578 3.67508 4.42578 5.36675C4.42578 7.03341 5.72578 8.37508 7.38411 8.43341C7.43411 8.42508 7.54245 8.42508 7.65078 8.43341C9.28412 8.35841 10.5674 7.01675 10.5758 5.36675C10.5758 3.67508 9.19245 2.29175 7.50078 2.29175Z"/>
                            <path d="M13.784 9.79159C13.759 9.79159 13.734 9.79159 13.709 9.78325C13.3673 9.81659 13.0173 9.57492 12.984 9.23325C12.9506 8.89159 13.159 8.58325 13.5006 8.54159C13.6006 8.53325 13.709 8.53325 13.8006 8.53325C15.0173 8.46659 15.9673 7.46659 15.9673 6.24159C15.9673 4.97492 14.9423 3.94992 13.6756 3.94992C13.334 3.95825 13.0506 3.67492 13.0506 3.33325C13.0506 2.99159 13.334 2.70825 13.6756 2.70825C15.6256 2.70825 17.2173 4.29992 17.2173 6.24992C17.2173 8.16659 15.7173 9.71659 13.809 9.79159C13.8006 9.79159 13.7923 9.79159 13.784 9.79159Z"/>
                            <path d="M7.64036 18.7916C6.00703 18.7916 4.36536 18.3749 3.1237 17.5416C1.96536 16.7749 1.33203 15.7249 1.33203 14.5833C1.33203 13.4416 1.96536 12.3833 3.1237 11.6083C5.6237 9.94992 9.6737 9.94992 12.157 11.6083C13.307 12.3749 13.9487 13.4249 13.9487 14.5666C13.9487 15.7083 13.3154 16.7666 12.157 17.5416C10.907 18.3749 9.2737 18.7916 7.64036 18.7916ZM3.81536 12.6583C3.01536 13.1916 2.58203 13.8749 2.58203 14.5916C2.58203 15.2999 3.0237 15.9833 3.81536 16.5083C5.89036 17.8999 9.39036 17.8999 11.4654 16.5083C12.2654 15.9749 12.6987 15.2916 12.6987 14.5749C12.6987 13.8666 12.257 13.1833 11.4654 12.6583C9.39036 11.2749 5.89036 11.2749 3.81536 12.6583Z"/>
                            <path d="M15.2844 17.2917C14.9928 17.2917 14.7344 17.0917 14.6761 16.7917C14.6094 16.45 14.8261 16.125 15.1594 16.05C15.6844 15.9417 16.1678 15.7333 16.5428 15.4417C17.0178 15.0833 17.2761 14.6333 17.2761 14.1583C17.2761 13.6833 17.0178 13.2333 16.5511 12.8833C16.1844 12.6 15.7261 12.4 15.1844 12.275C14.8511 12.2 14.6344 11.8667 14.7094 11.525C14.7844 11.1917 15.1178 10.975 15.4594 11.05C16.1761 11.2083 16.8011 11.4917 17.3094 11.8833C18.0844 12.4667 18.5261 13.2917 18.5261 14.1583C18.5261 15.025 18.0761 15.85 17.3011 16.4417C16.7844 16.8417 16.1344 17.1333 15.4178 17.275C15.3678 17.2917 15.3261 17.2917 15.2844 17.2917Z"/>
                        </svg>
                        
                        <span className="tooltip text-[10px]">Peers</span>
                    </button>
                                {/* <button onClick={showAddProgressDropdown}>
                                    <AddIcon className="text-gray-800 rounded-full bg-white p-2 h-8 w-8 text-lg hover:bg-gray-200"/>
                                </button> */}
                                    <div className={` dropdown-menu large-dropdown ${isPeersDropdown ? " fade-in " : ""} dropdown-menu-right peers-dropdown px-3 py-3 shadow-box rounded-md w-full h-auto  scrollbar-change border-none `}>
                                            <div className="relative rounded-full  items-center flex w-full h-10 my-2 ">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-full">
                                                        <span className="text-gray-500 px-3">
                                                            <svg width="22" height="22" viewBox="0 0 20 20" className="mr-3 pr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#9998A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                <path d="M17.5 17.5L13.875 13.875" stroke="#9998A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                </svg>
                                                        </span>
                                                </div>
                                                <input type="text" name="price" id="price" className="border border-gray-300 py-2 px-4  block w-full pl-12 pr-12 sm:text-sm rounded-full h-full focus:outline-none focus:border-gray-400" placeholder="search peers" autoComplete="off"/>
                                                    
                                            </div>

                                        <div className="">
                                            <button className=" flex items-center justify-between mt-3 p-2 w-full hover:bg-gray-200 rounded">

                                                <span className='text-gray-800 cursor-pointer text-sm '>PraiseGod</span>
                                                
                                                <span>
                                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.3346 1L5.0013 8.33333L1.66797 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </button>
                                            <button className=" flex items-center justify-between mt-2 p-2 w-full hover:bg-gray-200 rounded">

                                                <span className='text-gray-800 cursor-pointer text-sm'>Jane Doe</span>
                                                
                                                
                                            </button>
                                            <button className=" flex items-center justify-between mt-2 p-2 w-full hover:bg-gray-200 rounded">

                                                <span className='text-gray-800 cursor-pointer text-sm'>Jane Doe</span>
                                                
                                                <span>
                                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.3346 1L5.0013 8.33333L1.66797 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </button>
                                            <div className="py-2 mb-2 mt-3 flex items-center justify-center">
                                                <span className="text-[#6c7293] text-left flex items-center justify-start text-sm lowercase hover:underline cursor-pointer" onClick={handlePeerClickOpen}>
                                                    <span className="p-2 bg-gray-200 hover:bg-gray-500 rounded-full transition-all duration-100 ease-in flex items-center text-gray-800 justify-center text-xs mr-2" >
                                                        <svg className=' h-2 w-2 ' viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.5 4.16675V15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M4.66406 10H16.3307" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </span>
                                                    Add new Peer
                                                    
                                                </span>
                                                    
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    
                    <button className=" p-2 text-[#6c7293] bg-white transition ease-in duration-200 text-center text-sm font-normal  rounded flex items-center justify-center wrapper relative border border-white hover:bg-gray-200 hover:border-gray-500 hover:border hover:text-[#4A4957]">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24" fill="none">
                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        
                        {/* <span className="tooltip text-[10px]">Celo explorer</span> */}
                    </button>


                </div>
                    
            </div>

            <div className='pt-8'>
                <h1 className='text-[45px]'>{post && post.title}</h1>
                <p className='text-[#6c7293] text-sm '>Added on the 21st August, 2022 at 10:22pm</p>
                <p className='my-2'>{post && post.body}</p>
            </div>
            

            <div className='my-8 pt-12'>
                <div className='grid md:grid-cols-3 grid-cols-1 '>
                    <div className='px-4 py-3'>
                    {/* bg-gradient-to-l to-green-400  from-sky-700 */}
                        <div className='p-4 bg-gray-700 flex items-center justify  rounded'>
                           <h3 className=' text-white text-lg grow'>To Do</h3> 
                           
                           <button onClick={handleClickOpen}>
                                <AddIcon className="text-gray-800 rounded-full bg-white p-2 h-8 w-8 text-lg"/>
                           </button>
                           
                        </div>

                        <div className='mt-5'>
                            <div className='mb-4 bg-white p-3 border-t-2 border-gray-900 '>
                                <div className='flex flex-col gap-1 mb-4 relative'>
                                    <h3 className=' underline text-lg font-bold'>Edit HomePage</h3>
                                    <span className='text-[#6c7293] text-sm'>Peegee, 3 days ago</span>

                                    <span className='absolute right-0 top-0'><MoreHorizIcon/></span>
                                </div>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab dolorem harum expedita excepturi quia consequatur! Officiis inventore quae eveniet doloremque voluptates quo suscipit possimus, eius sapiente quaerat? Alias, officia.</p>

                                <div className='flex justify-end'>
                                    <span className='p-2 rounded-full hover:bg-gray-200 cursor-pointer ' onClick={()=>{setCommentSideBar((prev) => !prev)}}>
                                        <Badge badgeContent={4} color="primary">
                                            <CommentIcon/>
                                        </Badge>
                                        
                                    </span>
                                </div>
                            </div>
                            <div className='mb-4 bg-white p-3 border-t-2 border-gray-900 '>
                                <div className='flex flex-col gap-1 mb-4 relative'>
                                    <h3 className=' underline text-lg font-bold'>Edit HomePage2</h3>
                                    <span className='text-[#6c7293] text-sm'>Peegee, 3 days ago</span>

                                    <span className='absolute right-0 top-0'><MoreHorizIcon/></span>
                                </div>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab dolorem harum expedita excepturi quia consequatur! Officiis inventore quae eveniet doloremque voluptates quo suscipit possimus, eius sapiente quaerat? Alias, officia.</p>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className='px-4 py-3'>
                    {/* bg-gradient-to-r to-blue-600  from-blue-400 */}
                        <div className='p-4 dropdown bg-gray-700 flex items-center justify rounded'>
                           <h3 className=' text-white text-lg grow'>In Progress</h3> 
                           
                            <div className={`  large-dropdown ${addProgressDropdown ? "active" : ""} `}>
                                <button onClick={showAddProgressDropdown}>
                                    <AddIcon className="text-gray-800 rounded-full bg-white p-2 h-8 w-8 text-lg hover:bg-gray-200"/>
                                </button>
                                    <div className={`dropdown-menu large-dropdown px-3 py-3 shadow-box rounded-md w-full h-auto  scrollbar-change border-none ${addProgressDropdown ? "fade-in" : ""}`}>
                                        <div className="">
                                            <div className=" flex justify-start mt-3 mb-3">
                                                <input type="checkbox" className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="agree_check"/>
                                                <label className="form-check-label inline-block text-gray-800 w-full cursor-pointer" htmlFor="agree_check">Edit HomePage</label>
                                            </div>
                                            <div className="form-group form-check flex justify-start mt-3 mb-3 w-full">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    id="agree_check2"
                                                    
                                                />
                                                <label className="form-check-label inline-block text-gray-800 w-full cursor-pointer" htmlFor="agree_check2">Edit HomePage2</label>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            
                            <div className='mb-4 bg-white p-3 border-t-2 border-gray-900 '>
                                <div className='flex flex-col gap-1 mb-4 relative'>
                                    <h3 className=' underline text-lg font-bold'>Edit HomePage3</h3>
                                    <span className='text-[#6c7293] text-sm'>Peegee, 3 days ago</span>

                                    <span className='absolute right-0 top-0'><MoreHorizIcon/></span>
                                </div>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab dolorem harum expedita excepturi quia consequatur! Officiis inventore quae eveniet doloremque voluptates quo suscipit possimus, eius sapiente quaerat? Alias, officia.</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className='px-4 py-3'>
                    {/* bg-gradient-to-r to-cyan-800 from-blue-400 */}
                        <div className='p-4 bg-gray-700 flex items-center justify rounded '>
                           <h3 className=' text-white text-lg grow'>Completed</h3> 
                           <button>
                                <AddIcon className="text-gray-800 rounded-full bg-white p-2 h-8 w-8 text-lg"/>
                           </button>
                        </div>
                        <div className='mt-5'>
                            <div className='mb-4 bg-white p-3 border-t-2 border-gray-900 '>
                                <div className='flex flex-col gap-1 mb-4 relative'>
                                    <h3 className=' underline text-lg font-bold'>Edit HomePage4</h3>
                                    <span className='text-[#6c7293] text-sm'>Peegee, 3 days ago</span>

                                    <span className='absolute right-0 top-0'><MoreHorizIcon/></span>
                                </div>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab dolorem harum expedita excepturi quia consequatur! Officiis inventore quae eveniet doloremque voluptates quo suscipit possimus, eius sapiente quaerat? Alias, officia.</p>

                                <div className='flex justify-end'>
                                    <span className='p-2 rounded-full hover:bg-gray-200 cursor-pointer ' onClick={()=>{setCommentSideBar((prev) => !prev)}}>
                                        <Badge badgeContent={4} color="primary">
                                            <CommentIcon/>
                                        </Badge>
                                        
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
                        <div className={` commentSideBar px-3 shadow-sm ${commentSideBar ? "show" : ""}`}>
                            <div className='overflow-y-auto h-full no-scrollbar pb-20 px-3'>

            
                                <div className="text-right mt-2  flex items-center justify-end">
                                    <button className="bg-blue-600 text-white h-8 w-8 flex items-center justify-center rounded-full p-2" onClick={()=>{setCommentSideBar(false)}} ><CloseIcon/></button>
                                </div>
                                <div className="py-4">
                                    <div>
                                        <div className='flex flex-col gap-1 mb-4 relative'>
                                            <h1 className='  text-xl font-bold'>{post.title}</h1>
                                            <span className='text-[#6c7293] text-sm'>Peegee, 3 days ago</span>
                                        </div>

                                        <p className=''>{post.body}</p>
                                    </div>

                                    <div className='mt-9'>
                                        <h3 className='font-normal text-base underline mb-3'>Comments</h3>

                                        <div className=' relative'>
                                            
                                            <div className='mb-4'>
                                                <div className='flex items-start justify-start gap-2'>
                                                    <img src="/images/avatar-1.png" alt="" className='w-12 h-12'/>
                                                    <div className=' flex flex-col'>
                                                        <div className='flex items-center justify-start flex-row grow gap-2'>
                                                            <h4 className='my-0'>Peegee</h4>
                                                            <span className='text-[#6c7293] text-xs'>3 days ago</span>
                                                        </div>
                                                        

                                                        <p className='mb-2 text-justify text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam modi soluta blanditiis hic quos ullam, fugiat voluptates, repellat non debitis aut perspiciatis numquam </p>

                                                        <div>
                                                        {/* <li className="bullet" ></li> */}
                                                            <span className='flex items-center gap-2' aria-hidden="true">• <span className='text-xs'>Reply</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mb-4'>
                                                <div className='flex items-start justify-start gap-2'>
                                                    <img src="/images/avatar-1.png" alt="" className='w-12 h-12'/>
                                                    <div className=' flex flex-col'>
                                                        <div className='flex items-center justify-start flex-row grow gap-2'>
                                                            <h4 className='my-0'>Peegee</h4>
                                                            <span className='text-[#6c7293] text-xs'>3 days ago</span>
                                                        </div>
                                                        

                                                        <p className='mb-2 text-justify text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam modi soluta blanditiis hic quos ullam, fugiat voluptates, repellat non debitis aut perspiciatis numquam </p>

                                                        <div>
                                                        {/* <li className="bullet" ></li> */}
                                                            <span className='flex items-center gap-2' aria-hidden="true">• <span className='text-xs'>Reply</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='fixed w-full bottom-0 right-0 bg-gray-100 py-3 px-2 flex justify-between gap-2 z-[1001] h-auto'>     
                                <input className='border border-gray-400 rounded h-12 focus:outline-none pl-1 grow' type="text" placeholder='Add a comment'/> <button className='bg-blue-400 text-white p-3 rounded hover:bg-blue-600 '>Send</button>
                            </div>
                        </div>

                    <div>
                    
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Add a Task</DialogTitle>
                            <DialogContent>
                            {/* <DialogContentText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum explicabo eaque delectus ad error deleniti numquam ratione ipsum quae similique.
                            </DialogContentText> */}
                            <TextField
                                autoFocus
                                margin="dense"
                                id="project"
                                label="Title"
                                type="text"
                                fullWidth
                                variant="outlined"
                            />
                            <TextField 
                                multiline
                                rows={5} 
                                margin="dense"
                                id="description"
                                label="Description"
                                type="text"
                                fullWidth
                                variant="outlined"
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Add</Button>
                            </DialogActions>
                        </Dialog>
                    </div>

                    <div>
                                        
                    <Dialog open={peeropen} onClose={handlePeerClose}>
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
                            variant="standard"
                        />

                        <span>Or</span>

                        <TextField 
                            margin="dense"
                            id="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handlePeerClose}>Cancel</Button>
                        <Button onClick={handlePeerClose}>Send</Button>
                        </DialogActions>
                    </Dialog>
                    </div>
        </div>
    </Layout>
  )
}

export default Project