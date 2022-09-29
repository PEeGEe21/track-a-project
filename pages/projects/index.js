import Link from "next/link";
import AddProjectForm from "../../components/forms/AddProjectForm";
import Layout from "../../components/Layout";
import React, {useContext, useState, useEffect} from 'react'
import { host, projectRoute } from "../../components/routes";
import axios from "axios";
import AppContext from "../../components/AppContext";
import MainLoader from "../../components/MainLoader";
import Loader from "../../components/Loader";


export const getStaticProps = async () => {
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                // const res = await axios.get(`${host}/user/${user._id}/usersProjects`)

    //   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if(res){
        const data = await res.json();
  
        return {
          props: {projects: data}
        }
      }
    }catch(err){
  
    }
    
    // console.log(res, "resuslt")
  
    // console.log(data, "dattaaaa")
    
  }


const AllProjects = ({projects, }) => {
    const {item, user, addUser, numberOfPosts, addNumberOfPosts} = useContext(AppContext);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        let isCancelled = false
        async function fetchData() {
            try{

            
                // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                const res = await axios.get(`${host}/user/${user._id}/usersProjects`)
                // console.log(res, "response")

                
                    if(!isCancelled){
                        if(res){
                            const data = await res.data.projects;
                        // console.log(data);
                        // const res = await fetch(
                        //     'https://jsonplaceholder.typicode.com/posts'
                        // );

                        // const {data} = await res.json();

                        setPosts(data)
                        // console.log(posts)
                        addNumberOfPosts(data.length)


                        setIsLoading(false)
                    } 
                }
            }catch(err){
                
            }
        }
        fetchData()
        return () =>{
            isCancelled = true
        }
        
    },[posts, user]);



    return (
        <>
            <Layout>

                <div>
                    <div className='px-4 py-10'>
                        <div className="flex flex-row items-center justify-between flex-wrap border-b border-border_cl pb-4 mb-8">

                            <h1 className="text-2xl font-normal text-gray-800 w-full md:w-4/12 ">
                                All Projects
                            </h1>
                            <div className="text-md text-gray-400 flex flex-row items-center justify-between gap-6  w-full md:w-8/12 mt-3 md:mt-0 flex-wrap md:flex-nowrap ">
                                <div className="mt-1 relative rounded-full  items-center flex w-full h-12 ">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-full">
                                        <span className="text-gray-500 px-3">
                                            <svg width="22" height="22" viewBox="0 0 20 20" className="mr-3 pr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#9998A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M17.5 17.5L13.875 13.875" stroke="#9998A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                        </span>
                                    </div>
                                    <input type="text" name="searchproject" id="searchproject" className="border border-gray-300 py-2 px-4  block w-full pl-12 pr-12 sm:text-sm rounded-full h-full focus:outline-none focus:border-gray-400 bg-transparent text-gray-700" placeholder="search projects"/>
                                    
                                </div>

                                <button className="h-12  w-1/2 md:w-1/3 py-2 px-3  bg-[#6E65D9] hover:bg-secondary/80 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md rounded flex items-center justify-center " onClick={handleClickOpen}>
                                    Add Project
                                </button>
                            </div>


                        </div>
                        {/* <div className='mb-8'>
                            <h1 className='text-2xl'>
                                
                            </h1>
                            
                        </div> */}

                                
                                    <div className="kt-list-timeline__items">

                                        {posts < 1 && (
                                            <div className="text-center flex items-center justify-center text-2xl font-bold capitalize pt-7">
                                                no project yet
                                                </div>
                                            
                                            )
                                            
                                        }

                                    </div>
{isLoading ? <MainLoader/> :(
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                            
                            {posts && posts.map(project => (
                                <Link href={`/projects/${project._id}`} key={project._id}>
                                
                                    <a key={project._id} className=" bg-white hover:shadow-md px-3 py-3 transition-shadow duration-300 ease-in-out rounded relative">
                                        <div className="  py-3">
                                            
                                                <h3 className="text-lg font-semibold mb-3">
                                                    {project.title.length > 25 ?
                                                        `${project.title.substring(0, 30)}...` : project.title
                                                    }
                                                </h3>

                                                
                                                <p className="overflow_text text-justify text-sm pb-3">{project.description.length > 250 ?
                                                    `${project.description.substring(0, 250)}...` : project.description
                                                }</p>  
                                            
                                                <div className="project-list-timeline">



                                                <span className="project-list-timeline__badge project-list__badge--success"></span>
                                                <span className="project-list-timeline__badge project-list__badge--warning"></span>
                                                <span className="project-list-timeline__badge project-list__badge--danger"></span>
                                                <span className="project-list-timeline__badge project-list__badge--primary"></span></div>
                                        </div>
                                    </a>
                                </Link>
                            ))}
                        </div>

)}
                        
                    </div>
                    

                    <div>
                        <AddProjectForm handleClose={handleClose} open={open}/>
                    
                    </div>

                </div>
            </Layout>
        </> 
    );
}
 
export default AllProjects;