import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const SideBarProjects = () => {

    const router = useRouter();
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(res){
                const data = await res.json();
                // const res = await fetch(
                //     'https://jsonplaceholder.typicode.com/posts'
                // );

                // const {data} = await res.json();

                setPosts(data)
            }
            
        }
        fetchData()
    },[posts]);

    return ( 
        <>
            

                                    <div className="kt-list-timeline__items">
                                        {posts && posts.slice(0,6).map(project => (
                                            // <p >{project.title}</p>
                                            <div className="kt-list-timeline__item" key={project.id}>
                                                <span className="kt-list-timeline__badge kt-list-timeline__badge--success"></span>
                                                <span className={`kt-list-timeline__text hover:text-gray-900 transition duration-200 ease  ${router.asPath === `/projects/${project.id}` ? 'text-gray-900' : 'text-[#6c7293]'}`}>
                                                    <Link href={`/projects/${project.id}`}>
                                                        <a>
                                                        {project.title}  
                                                        </a>
                                                    </Link>
                                                </span>
                                                <span className="kt-list-timeline__time">Just now</span>
                                            </div>
                                        ))}
                                        
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
                                        

                                        
                                    </div>
        </>
     );
}
 
export default SideBarProjects;

