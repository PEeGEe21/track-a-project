import Head from 'next/head'
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar'

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




export default function Home({projects}) {
  return (
    <>
      
      
        <Layout>
          <div>
        

            <div className='px-4 py-10'>
              <div className='mb-8'>
                <h1 className='text-2xl'>
                  Overview
                </h1>
                
              </div>
                

                {/* */}
                  <div className='grid grid-cols-3 gap-5'>
                    <div className='shadow-sm py-4 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white flex items-center justify-between rounded h-32'>
                      <div>
                        Number of Peers
                      </div>
                      <div className='text-4xl'>
                        45
                      </div>
                    </div>


                    <div className='shadow-sm py-4 px-4 bg-gradient-to-r  from-pink-500 to-yellow-500 text-white flex items-center justify-between rounded h-32'>
                      <div>
                        Number of Peers
                      </div>
                      <div className='text-4xl'>
                        45
                      </div>
                    </div>

                    <div className='shadow-sm py-4 px-4  bg-gradient-to-l from-indigo-500 to-red-500 text-white flex items-center justify-between rounded h-32'>
                      <div>
                        Number of Peers
                      </div>
                      <div className='text-4xl'>
                        45
                      </div>
                    </div>



                  </div>



                {/* {projects && projects.map(project => (

                  <p key={project.id}>{project.title}</p>

                ))} */}
            </div>
          </div>
        </Layout>
      
    </>
  )
}
