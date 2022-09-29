import React, { useState } from "react";
import Layout from "../components/Layout";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import AddPeerForm from "../components/forms/AddPeerForm";

export const getStaticProps = async () => {
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      if(res){
        const data = await res.json();
  
        return {
          props: {users: data}
        }
      }
    }catch(err){
  
    }
    
    // console.log(res, "resuslt")
  
    // console.log(data, "dattaaaa")
    
  }


const Peers = ({users}) => {

    const [currentSelected, setCurrentSelected] = useState();
    const [displayedSelected, setDisplayedSelected] = useState();

    const [addBtn, setAddBtn ] = useState(false);
    const [currentUser, setCurrentUser ] = useState(false);
    const [selectedBtn, setSelectedBtn] = useState();
    const [commentSideBar, setCommentSideBar] = useState(false);

    const [peeropen, setPeerOpen] = React.useState(false);

    const handlePeerClickOpen = () => {
        setPeerOpen(true);
    };

    const handlePeerClose = () => {
        setPeerOpen(false);
    };

    // const handleChatChange = (chat) => {
    //   };

    const changeCurrentUser = (index, user) => {
        setCommentSideBar(!commentSideBar)

        setCurrentSelected(index.index);
        setDisplayedSelected(index.user);
        // console.log(index.user)
    
        // console.log(displayedSelected, "hereee");
        // changeChat(index.user);
        setCurrentUser(index.user);

    };

    const deleteUser = (index) =>{
        // var index = users.map(x => {
        //     return x.id;
        //   }).indexOf(user);
        // var index = users.indexOf(user.id);
        // console.log(index)
        users.splice(index.index, 1);
        setCommentSideBar(false)

        // setCurrentUser(index.user);




    }

    const handleAddClick = (user) =>{
        setCommentSideBar(!commentSideBar)
        // console.log(user)
        // dispatch(
        //     addProduct({...book})
        // )
        setSelectedBtn(user)
        if(selectedBtn){
            const userDetails = user;
            // console.log(userDetails)
        }
        
        // alert(id)



        // if(id === selectedBtn){
            setAddBtn(true)
        // }
        // if(type === "dec"){
        //     quantity>1 && setQuantity(quantity - 1)
        //   }else{
        //       setQuantity(quantity + 1)
        //   }

    }


    return ( 
        <>
            <Layout>
                <div>
                    <div className='px-4 py-10'>


                    <div className="flex flex-row items-center justify-between flex-wrap border-b border-border_cl pb-4 mb-8">

                        <h1 className="text-2xl font-normal text-gray-800 w-full md:w-4/12 ">
                            Peers
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
                                <input type="text" name="searchpeers" id="searchpeers" className="border border-gray-300 py-2 px-4  block w-full pl-12 pr-12 sm:text-sm rounded-full h-full focus:outline-none focus:border-gray-400 bg-transparent text-gray-700" placeholder="search peers"/>
                                
                            </div>

                            <button className="h-12  w-1/2 md:w-1/3 py-2 px-3 bg-[#6E65D9] hover:bg-secondary/80 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md   rounded flex items-center justify-center " onClick={handlePeerClickOpen}>
                                Add Peer
                            </button>
                        </div>


                        </div>
                        {/* <div className='mb-8'>
                            <h1 className='text-2xl'>
                               
                            </h1>
                            
                        </div> */}

                        <div>
                        {users <= 1 ? (
                        <div className="mt-10 mb-4 banner">
                            <div className="flex items-start py-4 px-3 mb-2  text-sm justify-between bg-transparent border border-[#D0D5DD] rounded-lg w-full ">
                                <div className="flex items-center justify-start gap-2 pr-2">
                                    <span>

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0013 13.3332V9.99984M10.0013 6.6665H10.0096M18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6037 1.6665 18.3346 5.39746 18.3346 9.99984Z" stroke="#3C349C" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                    </span>
                                    
                                    
                                </div>
                                <div className="flex grow flex-col">
                                        <p className="text-secondary font-normal text-lg ">You don't currently have a peer....</p>
                                        <p className="text-neutral600 font-thin text-sm underline">
                                            <Link href="/projects">
                                                <a >Check out your projects</a>
                                            </Link>
                                        
                                        </p>
                                </div>
                                <button className="btn btn-sm btn-label-brand btn-bold flex items-start" id="hideBanner">
                                    
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15M5 5L15 15" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                </button>
                            </div>
                        </div>
                        
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                
                                {users && users.map((user, index) => (
                                    
                                            
                                            <button key={user.id} className={`bg-white hover:shadow-md px-3 py-3 transition-shadow duration-300 ease-in-out rounded relative peers-div ${index === currentSelected ? "clicked shadow-lg  " : ""}`} onAnimationEnd={() => setCurrentSelected(false)}  onClick={()=>changeCurrentUser({index, user})}  >
                                                <span className={`bg-gray-100 text-red-700 h-8 w-8 flex items-center justify-center rounded-full p-2 absolute z-[99] peers-delete-icon right-1 top-1 opacity-0 `} onClick={()=>deleteUser({index})}><CloseIcon className=""/></span>
                                            <div className="   ">
                                                <div className="flex items-center justify-center mb-3">
                                                    <img src="/images/default.jpg" alt="" className='w-14 h-14 rounded-full'/>
                                                </div>
                                                
                                                
                                                <h3 className="text-lg font-semibold mb-2">{user.username}</h3>
                                                {/* <h3 className="text-lg font-semibold mb-3">{user.name}</h3> */}
                                                <p className="text-sm font-normal mb-2">{user.email}</p>
                                                <p className="text-xs font-normal mb-2">20 project contributions</p>
                                                    {/* <p>{project.body}</p>   */}
                                                

                                            </div>
                                        </button>
                                ))}
                            </div>
                        )}
                            
                        </div>
                    </div>





                    <div className={` commentSideBar px-3 shadow-sm ${commentSideBar ? "show" : ""}`}>
                            <div className='overflow-y-auto h-full no-scrollbar pb-20 px-3'>

            
                                <div className="text-right mt-2  flex items-center justify-end">
                                    <button className="bg-gray-800 text-white h-8 w-8 flex items-center justify-center rounded-full p-2" onClick={()=>{setCommentSideBar(false); setCurrentSelected(false)}} ><CloseIcon/></button>
                                </div>
                                <div className="py-4">
                                    <div>
                                        <div className='flex flex-col gap-1 mb-4 relative'>
                                            <div className="flex items-center justify-start mb-2">
                                                <img src="/images/default.jpg" alt="" className='w-16 h-16 rounded-full'/>
                                            </div>
                                            <h1 className='  text-xl font-bold'>{currentUser === undefined ? 'undefined' : currentUser.username}</h1>
                                            <span className='text-[#6c7293] text-sm'>{currentUser === undefined ? 'undefined email' : currentUser.email}</span>
                                        </div>

                                        <p className=''></p>
                                    </div>

                                    <div className='mt-9'>
                                        <h3 className='font-normal text-base underline mb-3'>Contributions</h3>

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
                            
                        </div>



                        <AddPeerForm open={peeropen} onClose={handlePeerClose} />
                    

                </div>
            </Layout>
        </>
     );
}
 
export default Peers;