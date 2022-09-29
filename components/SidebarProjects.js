import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Loader from "./Loader";
import {host} from './routes'
import AppContext from './AppContext';
import axios from "axios";
import {format} from 'timeago.js'
import { v4 as uuidv4 } from 'uuid';



const SideBarProjects = ({user, isDropdown, toggleCollapse, handleClickOpen}) => {
//   const {item, user} = useContext(AppContext);
    // console.log("user in sidebarprojects", user)
//   console.log(user._id, "user in sidebar")
    // const [user, setUser] = useState()
    const [userId, setUserId] = useState()
  
//     useEffect(()=>{
//       const getUser = async ()=>{
//           try{
  
//               if (localStorage.getItem('trackproject-user')){
//                   const data = await JSON.parse(
//                     localStorage.getItem("trackproject-user")
//                   );
//                   setUser(data)
                  
//                   setUserId(data._id)
//                   console.log(userId, "userId")
//               }else{
//                 router.push("/login")
//               }
                  
  
//           }catch(err){}
//       };
//       getUser()
//   }, [])


    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function fetchData() {
            try{

            
                // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                const res = await axios.get(`${host}/user/${user._id}/usersProjects`)
                // console.log(res, "response")

                if(res){
                    const data = await res.data.projects;
                    // console.log(data);
                    // const res = await fetch(
                    //     'https://jsonplaceholder.typicode.com/posts'
                    // );

                    // const {data} = await res.json();

                    setPosts(data)
                    setIsLoading(false)
                }
            }catch(err){
                
            }
        }
        fetchData()
    },[posts, user]);

    return ( 
        <>
            {/* ${posts < 6 ? "h-auto" : "yoo"} */}
            {!toggleCollapse && (
                            
                            <div className={`sidebar-dropdown-menu   px-4 ${isDropdown ? "show" : " "}`}>
                                {/* <input type="text"/> */}
                                {/* <a href="" className="text-gray-800">Add new Project</a> */}


                                
                                
                                <div className="kt-list-timeline px-4  mb-3 scrollbar-change overflow-y-auto h-full">
                                    <div className="py-2 mb-2">
                                        <span className="text-[#6c7293] text-left flex items-center justify-start text-sm lowercase hover:underline cursor-pointer" onClick={handleClickOpen}>
                                            <span className="p-2 bg-gray-200 hover:bg-gray-500 rounded-full transition-all duration-100 ease-in flex items-center text-gray-800 justify-center text-xs mr-2" >
                                                <svg className=' h-2 w-2 ' viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 4.16675V15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M4.66406 10H16.3307" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </span>
                                            Add new Project
                                            
                                        </span>
                                            
                                    </div>

                                    {isLoading ? <Loader/> :(
                                    <div className="kt-list-timeline__items">

                                    {posts < 1 && (
                                        <div className="kt-list-timeline__item text-sm text-left capitalize">
                                            no project yet
                                            </div>
                                        
                                        )
                                        
                                    }
                                                                            {posts && posts.slice(0,5).map(project => (
                                                                                // <p >{project.title}</p>
                                                                                <div className="kt-list-timeline__item" key={project._id}>
                                                                                    <span className="kt-list-timeline__badge kt-list-timeline__badge--success"></span>
                                                                                    <span className={`kt-list-timeline__text grow hover:text-gray-900 transition duration-200 ease  ${router.asPath === `/projects/${project._id}` ? 'text-gray-900' : 'text-[#6c7293]'}`}>
                                                                                        <Link href={`/projects/${project._id}`}>
                                                                                            <a className="block grow">
                                                                                            {project.title}  
                                                                                            </a>
                                                                                        </Link>
                                                                                    </span>
                                                                                    <span className="kt-list-timeline__time">{format(project.updatedAt)}</span>
                                                                                </div>
                                                                            ))}
                                    </div>

                                        )}
                                    
                                    <Link href="/projects">
                                        <a className="text-[#6c7293] text-left flex items-center justify-start text-sm lowercase py-2">See more...</a>
                                    </Link>
                                    
                                </div>
                                
                            </div>
                        )}
                                    
                                        
                                        
                                        {/* <div className="kt-list-timeline__item">
                                            <span className="kt-list-timeline__badge kt-list-timeline__badge--danger"></span>
                                            <span className="kt-list-timeline__text">Scheduled system</span>
                                            <span className="kt-list-timeline__time">14 mins</span>
                                        </div>
                                        <div className="kt-list-timeline__item">
                                            <span className="kt-list-timeline__badge kt-list-timeline__badge--warning"></span>
                                            <span className="kt-list-timeline__text">New order</span>
                                            <span className="kt-list-timeline__time">20 mins</span>
                                        </div>
                                        <div className="kt-list-timeline__item">
                                            <span className="kt-list-timeline__badge kt-list-timeline__badge--primary"></span>
                                            <span className="kt-list-timeline__text">Database server</span>
                                            <span className="kt-list-timeline__time">1 hr</span>
                                        </div>
                                        <div className="kt-list-timeline__item">
                                            <span className="kt-list-timeline__badge kt-list-timeline__badge--primary"></span>
                                            <span className="kt-list-timeline__text">Database server</span>
                                            <span className="kt-list-timeline__time">1 hr</span>
                                        </div>
                                        <div className="kt-list-timeline__item">
                                            <span className="kt-list-timeline__badge kt-list-timeline__badge--primary"></span>
                                            <span className="kt-list-timeline__text">Database server</span>
                                            <span className="kt-list-timeline__time">1 hr</span>
                                        </div> */}
                                        

                                        
        </>
     );
}
 
export default SideBarProjects;

