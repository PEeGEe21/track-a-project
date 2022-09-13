import Link from "next/link";
import Layout from "../../components/Layout";

export const getStaticProps = async () => {
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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


const AllProjects = ({projects}) => {
    return (
        <>
            <Layout>

                <div>
                    <div className='px-4 py-10'>
                        <div className='mb-8'>
                            <h1 className='text-2xl'>
                                All Projects
                            </h1>
                            
                        </div>

                        <div className="grid grid-cols-3 gap-5">
                            
                            {projects && projects.map(project => (
                                <Link href={`/projects/${project.id}`}>
                                
                                    <a key={project.id} className=" bg-white hover:shadow-md px-3 py-3 transition-shadow duration-300 ease-in-out rounded">
                                        <div className="   ">
                                            
                                            <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                                                <p>{project.body}</p>  
                                            

                                            
                                        </div>
                                    </a>
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                    

                    
                </div>
            </Layout>
        </> 
    );
}
 
export default AllProjects;