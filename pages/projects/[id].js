import React, {useState, useEffect, useContext} from 'react'
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Badge } from '@mui/material';
import Layout from '../../components/Layout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddPeerForm from '../../components/forms/AddPeerForm';
import AddTaskForm from '../../components/forms/AddTaskForm';
import axios from 'axios';
import moment from 'moment'
import EditProjectForm from '../../components/forms/EditProjectForm';
import toast, { Toaster } from 'react-hot-toast';
import DeleteForm from '../../components/forms/DeleteProjectForm';
import { host } from '../../components/routes';
import {format} from 'timeago.js'
import AddCommentForm from '../../components/forms/AddCommentForm';
import AppContext from "../../components/AppContext";
import DeleteTaskForm from '../../components/forms/DeleteTaskForm';


export const getStaticPaths = async () => {
    // try{
        
        // http://localhost:5000/api/projects/allProjects
    // const res = await fetch('http://localhost:5000/api/projects/')
    const res = await axios.get(`http://localhost:5000/api/projects/`)
                // console.log(res, "response")
        // console.log(res)

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(res){
        const data = await res.data.projects;
  
        const paths = data.map(project => {
            return {
                params: {
                    id: project._id.toString()
                }
            }
        })

        return {
            paths,
            fallback: false

        }
    }
    // }catch(err){

    // }
  }


  export const getStaticProps = async (context) =>{
    try{
        const id = context.params.id;
        // const id = (location.pathname.split("/")[3]);
        // console.log(id)
        const res = await fetch('http://localhost:5000/api/projects/' + id);

        if(res){
            const data = await res.json();

            return {
                props: {post: data.project}
            }

        }
    }catch(err){

    }
 
  }

const Project = ({post}) => {
    // const id = (location.pathname.split("/")[3]);
    // console.log(post)
    const router = useRouter()
    const {item, user, addUser, numberOfPosts, addNumberOfPosts} = useContext(AppContext);

    const [currentSelected, setCurrentSelected] = useState();
    const [displayedSelected, setDisplayedSelected] = useState();
    const [commentInput, setCommentInput] = useState('');
    const [addBtn, setAddBtn ] = useState(false);
    const [currentTask, setCurrentTask ] = useState(false);
    const [currentSelectedTask, setCurrentSelectedTask ] = useState();
    const [selectedBtn, setSelectedBtn] = useState();
    const [commentSideBar, setCommentSideBar] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [addProgressDropdown, setAddProgressDropdown] = useState(false)
    const [isPeersDropdown, setIsPeersDropdown] = useState(false)
    const [taskDropdown, setTaskDropdown] = useState(false)
    const [tasks, setTasks] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [peeropen, setPeerOpen] = React.useState(false);
    const [projectEditForm, setProjectEditForm] = React.useState(false);
    const [deleteForm, setDeleteForm] = React.useState(false);
    const [taskDeleteForm, setTaskDeleteForm] = React.useState(false);


    const handleDeleteFormOpen = () => {
        setDeleteForm(true);
    };
    const handleDeleteFormClose = () => {
        setDeleteForm(false);
    };


    const handleTaskDeleteFormOpen = () => {
        setTaskDeleteForm(true);
    };
    const handleTaskDeleteFormClose = () => {
        setTaskDeleteForm(false);
    };


    
    const handleEditFormOpen = () => {
        setProjectEditForm(true);
    };

    const handleEditFormClose = () => {
        setProjectEditForm(false);
    };

    const showAddProgressDropdown = () =>{
        setAddProgressDropdown(!addProgressDropdown)
    }

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

    const showTaskDropdown = (id) => {
        setTaskDropdown(!taskDropdown);
        setCurrentSelectedTask(id);

    };



    // onChange={}/> <button className='bg-blue-400 text-white p-3 rounded hover:bg-blue-600 transition duration-200 ease-in-out' onClick={submitComment}


    const handleSendComment = async(comment, currenttask) =>{
        const user_comment = {

            taskId: comment.active_task._id,
            comment: comment.comment, 
            user: user._id, 
        }

        // console.log({user_comment})
        
        await axios.post(`${host}/comments/${user_comment.taskId}/comment`, {
            user_comment
        });
    }


    useEffect(() => {

        const getTasks = async() =>{
            const res = await axios.get(`${host}/tasks/${post._id}`);
            // console.log(res.data.tasks)
            setTasks(res.data.tasks)
        }
        getTasks()
    }, [tasks])

    const goBack =()=>{
        router.back();
    }

    const changeCurrentTask = (task, index) => {
        setCommentSideBar(!commentSideBar)

        setCurrentSelected(index);
        // setDisplayedSelected(index.task);
        // changeChat(index.user);
        setCurrentTask(task);


    };

    return (

    <Layout>
        <div>
        
        {/* <Header/> */}

        <div className='px-4 py-10'>

            <div className='flex items-center justify-between gap-3 pt-4'>
                <div className='flex gap-4'>
                    
                    <button className=" p-1  bg-white text-gray-800 transition ease-in duration-200 text-center font-normal  rounded flex items-center justify-center wrapper relative border border-white hover:bg-gray-200 hover:border-gray-500 hover:border " onClick={goBack}>
                        <ArrowBackIcon />
                        <span className="tooltip text-[10px]">Back</span>
                            
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
                        
                        <span className="tooltip text-[10px]">Web</span>
                    </button>

                    <div className={` relative large-dropdown ${isPeersDropdown ? " active" : ""} `}>
                                
                    <button className={` p-2  bg-white transition text-[#6c7293] ease-in duration-200 text-center text-sm font-normal  rounded flex items-center justify-center wrapper relative border border-white  btn-shake hover:bg-gray-200 hover:border-gray-500 hover:border hover:text-[#4A4957] dropdown-active_btn `} onClick={showPeersDropdown}>
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
                                            <div className="py-2 mt-3 flex items-center justify-center">
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
                    <button className=" p-2 text-red-500 bg-white transition ease-in duration-200 text-center text-sm font-normal  rounded flex items-center justify-center wrapper relative border border-white  btn-shake hover:bg-gray-200 hover:border-gray-500 hover:border hover:text-red-600" onClick={handleDeleteFormOpen}>
                    <span>
                        <svg className="w-6 h-6 " viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 2.99023C8.835 2.82523 7.16 2.74023 5.49 2.74023C4.5 2.74023 3.51 2.79023 2.52 2.89023L1.5 2.99023" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M4.25 2.485L4.36 1.83C4.44 1.355 4.5 1 5.345 1H6.655C7.5 1 7.565 1.375 7.64 1.835L7.75 2.485" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9.42422 4.56982L9.09922 9.60482C9.04422 10.3898 8.99922 10.9998 7.60422 10.9998H4.39422C2.99922 10.9998 2.95422 10.3898 2.89922 9.60482L2.57422 4.56982" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M5.16406 8.25H6.82906" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M4.75 6.25H7.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                        
                        <span className="tooltip text-[10px]">Delete</span>
                    </button>
                    <button className={` p-2 text-[#6c7293] bg-white transition ease-in duration-200 text-center text-sm font-normal  rounded flex items-center justify-center wrapper relative border border-white btn-shake hover:bg-gray-200 hover:border-gray-500 hover:border hover:text-[#4A4957  ${projectEditForm === true && 'active-modal'}`} onClick={handleEditFormOpen}>
                        <img src='/images/Pencil.png' alt="" className=''/>
                        <span className="tooltip text-[10px]">Edit</span>

                        
                        {/* <span className="tooltip text-[10px]">Celo explorer</span> */}
                    </button>


                </div>
                    
            </div>

            <div className='mt-8 p-3 bg-white shadow-sm'>
                <h1 className='text-[45px] capitalize'>{post.title}</h1>

                <p className='text-[#6c7293] text-sm mb-2'>Added on the {moment(post.updatedAt).format('Do MMMM, YYYY')} at {moment(post.updatedAt).format('h:mm a')}</p>
                {/* <p className='text-[#6c7293] text-sm '>Added on the 21st August, 2022 at 10:22pm</p> */}
                <p className='text-justify'>{post.description}</p>
            </div>
            


{/* {isLoading ? '' : } */}
            <div className='my-8 pt-12'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 '>
                    <div className=' py-3'>
                    {/* bg-gradient-to-l to-green-400  from-sky-700 */}
                        <div className='p-4 bg-gray-700 flex items-center justify  rounded'>
                           <h3 className=' text-white text-lg grow'>To Do</h3> 
                           
                           <button onClick={handleClickOpen} className="">
                                <AddIcon className="text-gray-800 rounded-full bg-white p-2 h-8 w-8 add-icon"/>

                           </button>
                           
                        </div>
                        



                        <div className='mt-5'>
                            {tasks && tasks.map((task, index)=>(
                                task.status === 1 && (
                                <>
                                    <div className='mb-4 bg-white p-3 border-t-2 border-gray-900 shadow-sm ' key={task._id}>
                                        <div className='flex flex-row justify-between items-start mb-4 relative'>
                                            <div className='flex flex-col gap-1 relative'>
                                                <h3 className='underline text-lg font-bold'>{task.title}</h3>
                                                <span className='text-[#6c7293] text-sm'>
                                                    <span className='capitalize'>{user.username}</span>, {(format(task.updatedAt))}</span>
                                            </div>




                                                <div className={`dropdown relative z-50 ${taskDropdown && 

                                                    currentSelectedTask === task._id && 'show' }  `} data-dropdown="">
                                                    <span className={`cursor-pointer rounded-full hover:bg-gray-200 p-1 h-7 w-7 flex items-center justify-center ${taskDropdown && 

currentSelectedTask === task._id && 'bg-gray-200' }`} onClick={(e)=>showTaskDropdown(task._id)}>
                                                        <MoreVertIcon className='text-base'/>
                                                        </span>
                                                    {taskDropdown && 

                                                    currentSelectedTask === task._id && 
                                                    
                                                    <div class="dropdown-menu task-dropdown-menu   border-0 py-3 z-50 min-w-full fade-in bg-neutral50" aria-labelledby="dropdownMenuButton" >

                                                    <div className="dropdown-item flex items-center text-sm justify-start  w-full">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                            id="agree_check2"
                                                            
                                                        />
                                                        <label className="form-check-label inline-block text-gray-800 w-full cursor-pointer" htmlFor="agree_check2">In Progress</label>
                                                    </div>
                                                    <button class="dropdown-item flex items-center text-sm gap-2 py-2 focus:border-none focus:outline-none focus-visible:border-none focus-visible:outline-none " onClick={handleTaskDeleteFormOpen}>
                                                        <span>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 2.99023C8.835 2.82523 7.16 2.74023 5.49 2.74023C4.5 2.74023 3.51 2.79023 2.52 2.89023L1.5 2.99023" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
                                                                <path d="M4.25 2.485L4.36 1.83C4.44 1.355 4.5 1 5.345 1H6.655C7.5 1 7.565 1.375 7.64 1.835L7.75 2.485" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
                                                                <path d="M9.42422 4.56982L9.09922 9.60482C9.04422 10.3898 8.99922 10.9998 7.60422 10.9998H4.39422C2.99922 10.9998 2.95422 10.3898 2.89922 9.60482L2.57422 4.56982" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
                                                                <path d="M5.16406 8.25H6.82906" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
                                                                <path d="M4.75 6.25H7.25" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                        </span> Delete
                                                    </button>
                                                    <button class="dropdown-item flex items-center text-sm gap-2 text-neutral800  py-2">
                                                        <span>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.63164 1.80011L2.52663 6.14511C2.37163 6.31011 2.22163 6.63511 2.19163 6.86011L2.00663 8.48011C1.94163 9.06511 2.36163 9.46511 2.94163 9.36511L4.55164 9.09011C4.77664 9.05011 5.09163 8.88511 5.24663 8.71511L9.35164 4.37011C10.0616 3.62011 10.3816 2.76511 9.27664 1.72011C8.17663 0.685108 7.34164 1.05011 6.63164 1.80011Z" stroke="#25252C" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                                <path d="M5.94531 2.5249C6.16031 3.9049 7.28031 4.9599 8.67031 5.0999" stroke="#25252C" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                                <path d="M1.5 11H10.5" stroke="#25252C" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                                </svg>
                                                        </span> Edit
                                                    </button>
                                                    
                                                    
                                                </div>
                                                    
                                                    }
                                                </div>










                                        </div>
                                        <p className='text-justify'>{task.description}</p>

                                        {/* {task.comments.length > 0 &&  */}
                                        <div className='flex justify-end mt-6'>
                                            <span className='p-2 rounded-full hover:bg-gray-200 cursor-pointer ' onClick={()=>changeCurrentTask({task, index})}>
                                                <Badge badgeContent={task.comments.length} color="primary">
                                                    <CommentIcon className='text-gray-500 hover:text-gray-600 transition duration-150 ease '/>
                                                </Badge>
                                                
                                            </span>
                                        </div>
                                        {/* } */}
                                    </div>
                                </>
                                )
                            ))}
                            
                            {/* {post.tasks && post.tasks.map((task)=>(
                                task.status === 1 && (
                                <>
                                    <div className='mb-4 bg-white p-3 border-t-2 border-gray-900 ' key={task._id}>
                                        <div className='flex flex-col gap-1 mb-4 relative'>
                                            <h3 className=' underline text-lg font-bold'>{task.title}</h3>
                                            <span className='text-[#6c7293] text-sm'>Peegee, 3 days ago</span>

                                            <span className='absolute right-0 top-0'><MoreHorizIcon/></span>
                                        </div>
                                        <p className='text-justify'>{task.description}</p>

                                        <div className='flex justify-end'>
                                            <span className='p-2 rounded-full hover:bg-gray-200 cursor-pointer ' onClick={()=>{setCommentSideBar((prev) => !prev)}}>
                                                <Badge badgeContent={4} color="primary">
                                                    <CommentIcon/>
                                                </Badge>
                                                
                                            </span>
                                        </div>
                                    </div>
                                </>
                                )
                            ))} */}
                            
                            {/* <div className='mb-4 bg-white p-3 border-t-2 border-gray-900 '>
                                <div className='flex flex-col gap-1 mb-4 relative'>
                                    <h3 className=' underline text-lg font-bold'>Edit HomePage2</h3>
                                    <span className='text-[#6c7293] text-sm'>Peegee, 3 days ago</span>

                                    <span className='absolute right-0 top-0'><MoreHorizIcon/></span>
                                </div>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab dolorem harum expedita excepturi quia consequatur! Officiis inventore quae eveniet doloremque voluptates quo suscipit possimus, eius sapiente quaerat? Alias, officia.</p>
                            </div> */}
                            
                        </div>
                        
                    </div>

                    <div className='py-3'>
                    {/* bg-gradient-to-r to-blue-600  from-blue-400 */}
                        <div className='p-4 dropdown bg-gray-700 flex items-center justify rounded'>
                           <h3 className=' text-white text-lg grow'>In Progress</h3> 
                           
                            <div className={`  large-dropdown ${addProgressDropdown ? "active" : ""} `}>
                                <button onClick={showAddProgressDropdown}>
                                    <AddIcon className="text-gray-800 rounded-full bg-white add-icon p-2 h-8 w-8  hover:bg-gray-200"/>
                                </button>
                                    <div className={`dropdown-menu large-dropdown px-3 py-2 shadow-box rounded-md w-full h-auto  scrollbar-change border-none ${addProgressDropdown ? "fade-in" : ""}`}>
                                        <div className="">
                                        {tasks && tasks.map((task, index)=>(
                                            task.status === 1 && (
                                            <>
                                            <div className=" flex justify-start mt-2 mb-3 text-sm" key={task._id}>
                                                <input type="checkbox" className="form-check-input h-3 w-3 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id={task._id}/>
                                                <label className="form-check-label inline-block text-gray-800 w-full cursor-pointer" htmlFor={task._id}>{task.title}</label>
                                            </div>
                                            </>
                                            )
                                        ))}
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            
                        {tasks && tasks.map((task)=>(
                                task.status === 2 && (
                                <>
                                    <div className='mb-4 bg-white p-3 border-t-2 border-gray-900 ' key={task._id}>
                                        <div className='flex flex-col gap-1 mb-4 relative'>
                                            <h3 className=' underline text-lg font-bold'>{task.title}</h3>
                                            <span className='text-[#6c7293] text-sm'>Peegee, 3 days ago</span>

                                            <span className='absolute right-0 top-0'><MoreHorizIcon/></span>
                                        </div>
                                        <p className='text-justify'>{task.description}</p>

                                        <div className='flex justify-end'>
                                            <span className='p-2 rounded-full hover:bg-gray-200 cursor-pointer ' onClick={()=>changeCurrentUser({index, task})}>
                                                <Badge badgeContent={4} color="primary">
                                                    <CommentIcon/>
                                                </Badge>
                                                
                                            </span>
                                        </div>
                                    </div>
                                </>
                                )
                            ))}
                            
                        </div>
                    </div>

                    <div className='py-3'>
                    {/* bg-gradient-to-r to-cyan-800 from-blue-400 */}
                        <div className='p-4 bg-gray-700 flex items-center justify rounded '>
                           <h3 className=' text-white text-lg grow'>Completed</h3> 
                           <button>
                                <AddIcon className="text-gray-800 rounded-full bg-white p-2 h-8 w-8 add-icon"/>
                           </button>
                        </div>
                        {/* <div className='mt-5'>
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
                            
                        </div> */}
                    </div>

                </div>

            </div>




        </div>
                        <div className={` commentSideBar px-3 shadow-sm ${commentSideBar ? "show" : ""}`} >
                            <div className='overflow-y-auto h-full no-scrollbar pb-20 px-3'>

            
                                <div className="text-right mt-2  flex items-center justify-end">
                                    <button className=" text-gray-800 h-8 w-8 flex items-center justify-center  p-2" onClick={()=>{setCommentSideBar(false)}} ><CloseIcon/></button>
                                </div>
                                <div className="py-4">
                                    <div>
                                        <div className='flex flex-col gap-1 mb-4 relative'>
                                            <h1 className='  text-xl font-bold'>{currentTask && currentTask.task.title}</h1>
                                            <span className='text-[#6c7293] text-sm'>{currentTask && (format(currentTask.task.updatedAt))}</span>
                                            <p>{currentTask && currentTask.task._id}</p>
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
                                     
                                <AddCommentForm active_task={currentTask && currentTask.task} handleSendComment={handleSendComment}/>
                            </div>
                        </div>

                    <AddTaskForm open={open} onClose={handleClose} projectId={post._id} projectName={post.title}/>
                    
                    
                    <EditProjectForm open={projectEditForm} onClose={handleEditFormClose} projectId={post._id} projectName={post.title} projectDesc={post.description}/>

                    <AddPeerForm open={peeropen} onClose={handlePeerClose} />

                    <DeleteForm open={deleteForm} onClose={handleDeleteFormClose} projectId={post._id} projectName={post.title}/>
                    <DeleteTaskForm open={taskDeleteForm} onClose={handleTaskDeleteFormClose} task={currentSelectedTask} projectId={post._id} projectName={post.title}/>
                    
        </div>
    </Layout>
  )
}

export default Project