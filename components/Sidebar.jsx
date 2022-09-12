import classNames from 'classnames'
import { useRouter } from "next/router";
import Link from 'next/link';
import React, {useState} from 'react'
import CollapseIcon from './icons/CollapseIcon';
import Customers from './icons/Customers';
import Peers from './icons/Peers';
import Logo from './icons/Logo';
import Overview from './icons/Overview';
import Settings from './icons/Settings';
import Withdrawals from './icons/Withdrawals';
import LogoutIcon from './icons/LogoutIcon';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Sidebar = () => {

    const [toggleCollapse, setToggleCollapse] = useState(false);

    const [isCollapsible, setIsCollapsible] = useState(true);

    const [isDropdown, setIsDropdown] = useState(false);
    const [visibility, setVisibility] = useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const router = useRouter();
    const wrapperClasses = classNames("h-full sidebar pb-4 bg-white flex justify-between shadow-sm scrollbar-change flex-col overflow-y-auto  ", {
        ["w-80"]: !toggleCollapse,
        ["w-20"]: toggleCollapse,
        })

        const CollapseIconClasses = classNames("p-4 rounded focus:bg-transparent focus-visible:outline-none  bg-white text-[#6C7281] transition 300ms ease hover:text-blue-900", {
            
            "rotate-180 mx-auto flex items-center justify-center":toggleCollapse,
            "right-0 absolute":!toggleCollapse,
            // "opacity-0":!visibility,
            
            // "opacity-0":!visibility,
        });

    //    const MouseEnter = () =>{
    //     setVisibility(true)
    //    }
    //    const MouseLeave = () =>{
    //     setVisibility(false)
    // onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} 
    //    }
       
       const handleSidebarToggle = () =>{
           setToggleCollapse(!toggleCollapse)
       }
       const showDropdown = () =>{
        setIsDropdown(!isDropdown)
       }
  return (
    <>
        <div className={wrapperClasses} style={{transition: "width 200ms ease-in-out 0s"}}>
            <div className="flex flex-col">
                <div className="flex items-center justify-between py-6 relative border-b border-[#F5F5F6]">
                {!toggleCollapse && (
                    <div className='px-3'>
                       <Logo className="transition 300ms ease"/> 
                    </div>
                )}

                {
                    isCollapsible && (
                        <button className={CollapseIconClasses} onClick={handleSidebarToggle}><CollapseIcon/> </button>
                    )
                }
                   

                </div>
                <nav className="mt-6 md:mt-3 grow">
                    <div className=" flex-wrap">
                        <Link  href="/">
                            <a className={`menu-item w-full font-thin ${router.asPath === "/" && 'bg-fuchsia-600 text-white'} uppercase flex text-gray_cl items-center p-3 px-4  my-2  transition-colors duration-200 ease-in hover:bg-fuchsia-600 hover:text-white  ${toggleCollapse ? "justify-center" : "justify-start"}`}>
                        <span className="text-left px-3">   
                            <Overview/>
                        </span>
                        {!toggleCollapse && (
                            <span className={classNames("mx-4 text-sm font-normal")}>
                                Overview
                            </span>
                        )}
                        </a>
                        </Link>
                        <Link href="/peers">
                            <a className={`menu-item w-full font-thin ${router.asPath === "/invoices" && 'bg-fuchsia-600 text-white'} uppercase flex text-gray_cl items-center p-3 px-4  my-2  transition-colors duration-200 ease-in hover:bg-fuchsia-600 hover:text-white ${toggleCollapse ? "justify-center" : "justify-start"}`}>
                            <span className="text-left px-3">   
                                <Peers/>
                            
                            </span>

                            {!toggleCollapse && (
                            <span className="mx-4 text-sm font-normal">
                                Peers
                            </span>
                            )}

                            </a>
                        </Link>
                        {/* <Link href="/withdrawals">
                            <a className={`menu-item w-full font-thin ${router.asPath === "/withdrawals" && 'bg-fuchsia-600 text-white'} uppercase flex text-gray_cl items-center p-3 px-4  my-3  transition-colors duration-200 ease-in ${toggleCollapse ? "justify-center" : "justify-start"}`}>
                            <span className="text-left px-3">   
                            <Withdrawals />
                            </span>   
                            {!toggleCollapse && (
                            <span className="mx-4 text-sm font-normal">
                                Withdrawals
                            </span>
                            )}
                            </a>
                        </Link> */}
                        {/* <Link href="/customers">
                            <a className={`menu-item w-full font-thin ${router.asPath === "/customers" && 'bg-fuchsia-600 text-white'} uppercase flex text-gray_cl items-center p-3 px-4  my-3  transition-colors duration-200 ease-in ${toggleCollapse ? "justify-center" : "justify-start"}`}>
                            <span className="text-left px-3">
                            <Customers/>
                            </span>

                            {!toggleCollapse && (
                            <span className="mx-4 text-sm font-normal">
                                Customers
                            </span>
                            )}
                            </a>
                        </Link> */}
                        {/* <Link href="/#"> */}
                        <div className="my-2">

                        
                            <button className={`menu-item w-full font-thin uppercase flex text-gray_cl items-center py-2 px-4  my-1 focus-within:border-0 focus:border-0  transition-colors duration-200 ease-in hover:bg-fuchsia-600 hover:text-white ${toggleCollapse ? "justify-center" : "justify-between"}`} onClick={showDropdown}>
                            <span className={`flex items-center ${toggleCollapse ? "justify-center" : "justify-between"} w-6/12`}>
                                <span className="text-left px-3">
                                <Withdrawals />

                                </span>
                            
                                {!toggleCollapse && (
                                <span className="mx-4 text-sm font-normal">
                                    Projects
                                </span>
                                )}
                            </span>

                            
                            {!toggleCollapse && (
                            <span className="z-[99999px] p-2  rounded-full h-7 w-7 transition-all duration-100 ease-in flex items-center justify-center text-sm"  >
                                {/* <span className="pointer-events-none "> */}
                                            {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-3 ml-2" role="img" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                
                                                    <path d="M8.00099 11.7C7.53432 11.7 7.06766 11.5201 6.71432 11.1667L2.36766 6.82005C2.17432 6.62672 2.17432 6.30672 2.36766 6.11338C2.56099 5.92005 2.88099 5.92005 3.07432 6.11338L7.42099 10.4601C7.74099 10.7801 8.26099 10.7801 8.58099 10.4601L12.9277 6.11338C13.121 5.92005 13.441 5.92005 13.6343 6.11338C13.8277 6.30672 13.8277 6.62672 13.6343 6.82005L9.28766 11.1667C8.93432 11.5201 8.46766 11.7 8.00099 11.7Z" fill="currentColor"></path>
                                            </svg> */}
                                        {/* </span> */}

                                        <ArrowForwardIosIcon className={`h-3 w-3 transition-all duration-150 ease-in-out  ${isDropdown ? "toggleicon" : " "}`}/>
                            </span>
                            )}

                            
                        </button>

                        {!toggleCollapse && (
                            
                            <div className={`sidebar-dropdown-menu px-4 ${isDropdown ? "show" : " "}`}>
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
                                    <div className="kt-list-timeline__items">
                                        <div className="kt-list-timeline__item">
                                            <span className="kt-list-timeline__badge kt-list-timeline__badge--success"></span>
                                            <span className="kt-list-timeline__text">12 new users regis</span>
                                            <span className="kt-list-timeline__time">Just now</span>
                                        </div>
                                        <div className="kt-list-timeline__item">
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
                                        </div>
                                        

                                        
                                    </div>
                                    <button className="text-[#6c7293] text-left flex items-center justify-start text-sm lowercase py-2">See more...</button>
                                </div>
                                
                            </div>
                        )}
                        </div>
                        {/* </Link> */}
                        <Link  href="settings/">
                       <a className={`menu-item w-full font-thin ${router.asPath === "/settings" && 'bg-fuchsia-600 text-white'} uppercase flex text-gray_cl items-center p-3 px-4  my-2 transition-colors duration-200 ease-in hover:bg-fuchsia-600 hover:text-white ${toggleCollapse ? "justify-center" : "justify-start"}`}> 
                           <span className="text-left px-3">   
                        
                            <Settings/>
                            </span>
                            {!toggleCollapse && (
                            <span className="mx-4 text-sm font-normal">
                                Settings
                            </span>
                            )}
                            </a>
                        </Link>

                    
                    </div>
                </nav>
                <div className="items-end flex">
                    <Link  href="/logout">
                       <a className={`menu-item w-full font-thin ${router.asPath === "/logout" && 'bg-fuchsia-600 text-white'} uppercase flex text-gray_cl items-center p-3 px-4  my-2 transition-colors duration-200 ease-in   ${toggleCollapse ? "justify-center" : "justify-start"}`}> 
                           <span className="text-left px-3">   
                        
                            <LogoutIcon/>
                            </span>
                            {!toggleCollapse && (
                            <span className="mx-4 text-sm font-normal">
                                Logout
                            </span>
                            )}
                            </a>
                        </Link>

                        
                </div>

                
            </div>
            {/* <div className='flex items-start justify-start gap-2 fixed bottom-0 left-0 bg-gray-100 w-full'>
                            <img src="images/avatar-1.png" alt="" className='w-12 h-12 rounded-full border-3 border-white'/>
                            <div className=' flex flex-col'>
                                <div className='flex items-center justify-start flex-col grow gap-2'>
                                    <h4 className='my-0'>Peegee</h4>
                                    <span className='text-[#6c7293] text-xs'>3 days ago</span>
                                </div>
                                
                            </div>
                        </div> */}
            
        </div>



                

                    <div>
                    
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add a Project</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum explicabo eaque delectus ad error deleniti numquam ratione ipsum quae similique.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="project"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField 
                            multiline
                            rows={5} 
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Save</Button>
                        </DialogActions>
                    </Dialog>
                    </div>

    </>
  )
}

export default Sidebar