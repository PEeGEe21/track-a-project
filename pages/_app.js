import '../styles/globals.css'
import Head from 'next/head'
import AppContext from '../components/AppContext'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState()
  const [addUser, setAddUser] = useState({})
  const [numberOfPosts, setNumberOfPosts] = useState();

  const router = useRouter();

  // useEffect(()=>{
      const addNumberOfPosts = (count) => {
        setNumberOfPosts(count);
      }
  //     addNumberOfPosts()
  // }, [])

  useEffect(()=>{
    const getUser = async ()=>{
        try{

            if (localStorage.getItem('trackproject-user')){
                const data = await JSON.parse(
                  localStorage.getItem("trackproject-user")
                );
                setUser(data)
            }else{
              router.push("/login");
            }
                

        }catch(err){}
    };
    getUser()
}, [])



      

  return (
    <>
    <AppContext.Provider value={{item: 1, user, addUser, numberOfPosts, addNumberOfPosts}}>
      <Head>
          {/* <link href="/font/stylesheet.css" rel="stylesheet" /> */}
      </Head>
      <Component {...pageProps} />
    </AppContext.Provider>
    </>
  )
}

export default MyApp