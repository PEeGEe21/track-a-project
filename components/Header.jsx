import React, {useContext} from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailIcon from '@mui/icons-material/Email';
import { Badge } from '@mui/material';
import AppContext from './AppContext';
import { useState } from 'react';
import Link from 'next/link';


const Header = () => {

    const [show, setShow] = useState()

    const showUserDropdown = () =>{
        setShow(!show)
    }
    const {item, user, addUser} = useContext(AppContext);
    // console.log(item, "itemmmm")
    // console.log(user, "userrrrr")
    // console.log(addUser, "addUser")
  return (
    <>
        <div className="header sticky top-0 bg-white py-3 w-full  z-[999] rounded">
                <div className="container mx-auto flex items-center justify-between gap-8 md:px-4 ">
                    <div>
                        <button type="button" className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600 my-4 bg-border_cl border-gray-300 text-lg px-1 rounded-md mobile-menu-btn" aria-label="toggle menu"><div className="bar-one"></div><div className="bar-two"></div><div className="bar-three"></div></button>
                    </div>
                    <div className="flex items-center justify-end gap-1 md:gap-5 px-1 md:px-4">
                            

                            <div className={`dropdown relative  grow  ${show ? "show " : ""}`} data-large-dropdown>
                                    

                                    <button className="flex items-center justify-center gap-0 md:gap-2 border-r px-2 md:px-5 border-[#E4E7EC] focus:outline-none active:outline-none" onClick={showUserDropdown} >
                                        <img src="/images/avatar-1.png" alt="" className='w-10 h-10 rounded-full border-3 border-white'/>
                                        <div className="flex items-start justify-start flex-col pointer-events-none">
        
                                            {/* <span className="user font-medium ">{user && user.username}</span> */}
                                            <span className="user font-medium ">{user ? user.username : 'nouser'}</span>
                                            <span className="user font-medium text-[#6c7293] text-sm">{user ? user.email : 'nouser'}</span>
                                        </div>
                                        <span className="pointer-events-none">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="caret-down"
                                                className="w-3"
                                                role="img"
                                                viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                
                                                    <path d="M8.00099 11.7C7.53432 11.7 7.06766 11.5201 6.71432 11.1667L2.36766 6.82005C2.17432 6.62672 2.17432 6.30672 2.36766 6.11338C2.56099 5.92005 2.88099 5.92005 3.07432 6.11338L7.42099 10.4601C7.74099 10.7801 8.26099 10.7801 8.58099 10.4601L12.9277 6.11338C13.121 5.92005 13.441 5.92005 13.6343 6.11338C13.8277 6.30672 13.8277 6.62672 13.6343 6.82005L9.28766 11.1667C8.93432 11.5201 8.46766 11.7 8.00099 11.7Z" fill="#4A4957"/>
                                            </svg>
                                        </span>
                                    </button>

                                    <div className={` dropdown-menu large-dropdown shadow-box rounded-md w-full border-0 ${show ? " fade-in " : ""}`} onMouseLeave={showUserDropdown}>
                                        
                                            <div className=" py-2">
                                                <a className="flex items-center px-4 py-2 justify-start bg-white border-0 w-full hover:bg-gray-100 text-sm text-neutral600" href="">
                                                    <span className="mr-3">

                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.1586 10.87C12.0586 10.86 11.9386 10.86 11.8286 10.87C9.44859 10.79 7.55859 8.84 7.55859 6.44C7.55859 3.99 9.53859 2 11.9986 2C14.4486 2 16.4386 3.99 16.4386 6.44C16.4286 8.84 14.5386 10.79 12.1586 10.87Z" stroke="#6F6E83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z" stroke="#6F6E83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </span>
                                                    
                                                    My Profile
                                                </a>
                                                <Link href="/settings">
                                                
                                                
                                                    <a className="flex items-center py-2 px-4 text-sm justify-start bg-white border-0 w-full hover:bg-gray-100 text-neutral600" >
                                                        <span className="mr-3">

                                                            
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#6F6E83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                <path d="M16.1654 12.4999C16.0544 12.7513 16.0213 13.0301 16.0704 13.3004C16.1194 13.5707 16.2482 13.8202 16.4404 14.0166L16.4904 14.0666C16.6453 14.2214 16.7683 14.4052 16.8521 14.6075C16.936 14.8098 16.9792 15.0267 16.9792 15.2458C16.9792 15.4648 16.936 15.6817 16.8521 15.884C16.7683 16.0863 16.6453 16.2701 16.4904 16.4249C16.3356 16.5799 16.1518 16.7028 15.9494 16.7867C15.7471 16.8706 15.5302 16.9137 15.3112 16.9137C15.0922 16.9137 14.8753 16.8706 14.673 16.7867C14.4706 16.7028 14.2868 16.5799 14.132 16.4249L14.082 16.3749C13.8856 16.1828 13.6362 16.0539 13.3659 16.0049C13.0955 15.9559 12.8167 15.989 12.5654 16.0999C12.3189 16.2056 12.1087 16.381 11.9606 16.6045C11.8126 16.8281 11.7331 17.0901 11.732 17.3583V17.4999C11.732 17.9419 11.5564 18.3659 11.2439 18.6784C10.9313 18.991 10.5074 19.1666 10.0654 19.1666C9.62334 19.1666 9.19941 18.991 8.88685 18.6784C8.57429 18.3659 8.3987 17.9419 8.3987 17.4999V17.4249C8.39225 17.1491 8.30296 16.8816 8.14246 16.6572C7.98195 16.4328 7.75764 16.2618 7.4987 16.1666C7.24735 16.0557 6.96854 16.0226 6.69821 16.0716C6.42788 16.1206 6.17843 16.2495 5.98203 16.4416L5.93203 16.4916C5.77724 16.6465 5.59343 16.7695 5.3911 16.8533C5.18877 16.9372 4.97189 16.9804 4.75286 16.9804C4.53384 16.9804 4.31696 16.9372 4.11463 16.8533C3.9123 16.7695 3.72849 16.6465 3.5737 16.4916C3.41874 16.3368 3.29581 16.153 3.21193 15.9507C3.12806 15.7483 3.08489 15.5314 3.08489 15.3124C3.08489 15.0934 3.12806 14.8765 3.21193 14.6742C3.29581 14.4719 3.41874 14.288 3.5737 14.1332L3.6237 14.0833C3.81581 13.8869 3.94469 13.6374 3.9937 13.3671C4.04272 13.0967 4.00963 12.8179 3.8987 12.5666C3.79306 12.3201 3.61766 12.1099 3.39409 11.9618C3.17051 11.8138 2.90852 11.7343 2.64036 11.7333H2.4987C2.05667 11.7333 1.63275 11.5577 1.32019 11.2451C1.00763 10.9325 0.832031 10.5086 0.832031 10.0666C0.832031 9.62456 1.00763 9.20063 1.32019 8.88807C1.63275 8.57551 2.05667 8.39992 2.4987 8.39992H2.5737C2.84953 8.39347 3.11703 8.30418 3.34145 8.14368C3.56586 7.98317 3.73679 7.75886 3.83203 7.49992C3.94296 7.24857 3.97605 6.96976 3.92703 6.69943C3.87802 6.4291 3.74914 6.17965 3.55703 5.98325L3.50703 5.93325C3.35207 5.77846 3.22914 5.59465 3.14526 5.39232C3.06139 5.18999 3.01822 4.97311 3.01822 4.75408C3.01822 4.53506 3.06139 4.31818 3.14526 4.11585C3.22914 3.91352 3.35207 3.72971 3.50703 3.57492C3.66182 3.41996 3.84563 3.29703 4.04796 3.21315C4.25029 3.12928 4.46717 3.08611 4.6862 3.08611C4.90522 3.08611 5.1221 3.12928 5.32443 3.21315C5.52676 3.29703 5.71058 3.41996 5.86536 3.57492L5.91536 3.62492C6.11176 3.81703 6.36121 3.94591 6.63154 3.99492C6.90187 4.04394 7.18068 4.01085 7.43203 3.89992H7.4987C7.74517 3.79428 7.95538 3.61888 8.10344 3.39531C8.2515 3.17173 8.33096 2.90974 8.33203 2.64159V2.49992C8.33203 2.05789 8.50763 1.63397 8.82019 1.32141C9.13275 1.00885 9.55667 0.833252 9.9987 0.833252C10.4407 0.833252 10.8646 1.00885 11.1772 1.32141C11.4898 1.63397 11.6654 2.05789 11.6654 2.49992V2.57492C11.6664 2.84307 11.7459 3.10506 11.894 3.32864C12.042 3.55221 12.2522 3.72762 12.4987 3.83325C12.75 3.94418 13.0289 3.97727 13.2992 3.92826C13.5695 3.87924 13.819 3.75037 14.0154 3.55825L14.0654 3.50825C14.2202 3.35329 14.404 3.23036 14.6063 3.14649C14.8086 3.06261 15.0255 3.01944 15.2445 3.01944C15.4636 3.01944 15.6804 3.06261 15.8828 3.14649C16.0851 3.23036 16.2689 3.35329 16.4237 3.50825C16.5787 3.66304 16.7016 3.84685 16.7855 4.04918C16.8693 4.25151 16.9125 4.46839 16.9125 4.68742C16.9125 4.90644 16.8693 5.12332 16.7855 5.32565C16.7016 5.52798 16.5787 5.7118 16.4237 5.86658L16.3737 5.91658C16.1816 6.11298 16.0527 6.36243 16.0037 6.63276C15.9547 6.90309 15.9878 7.1819 16.0987 7.43325V7.49992C16.2043 7.74639 16.3797 7.9566 16.6033 8.10466C16.8269 8.25272 17.0889 8.33218 17.357 8.33325H17.4987C17.9407 8.33325 18.3646 8.50885 18.6772 8.82141C18.9898 9.13397 19.1654 9.55789 19.1654 9.99992C19.1654 10.4419 18.9898 10.8659 18.6772 11.1784C18.3646 11.491 17.9407 11.6666 17.4987 11.6666H17.4237C17.1555 11.6677 16.8936 11.7471 16.67 11.8952C16.4464 12.0432 16.271 12.2534 16.1654 12.4999V12.4999Z" stroke="#6F6E83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                </svg>
                                                        </span>
                                                        
                                                        Settings
                                                    </a>
                                                </Link>
                                                <button className="flex items-center py-2 px-4 text-sm justify-start bg-white border-0 w-full hover:bg-gray-100 text-neutral600">
                                                    <span className="mr-3">

                                                        
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.89844 7.55999C9.20844 3.95999 11.0584 2.48999 15.1084 2.48999H15.2384C19.7084 2.48999 21.4984 4.27999 21.4984 8.74999V15.27C21.4984 19.74 19.7084 21.53 15.2384 21.53H15.1084C11.0884 21.53 9.23844 20.08 8.90844 16.54" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M15.0011 12H3.62109" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg>
                                                            
                                                    </span>
                                                    Sign Out
                                                </button>
                                            </div>
                                    </div>

                                
                            </div>




                            <div className=" px-1 md:pr-3 flex items-center justify-between gap-3">
                                <span className='hover:bg-gray-200 rounded-full p-2 cursor-pointer transition duration-200 ease-in-out'>
                                    <Badge badgeContent={4} color="primary">

                                        <EmailIcon/>
                                    </Badge>

                                </span>
                                
                                <span className='hover:bg-gray-200 rounded-full p-2 cursor-pointer transition duration-200 ease-in-out btn-shake '>
                                    <Badge badgeContent={4} color="secondary">

                                        <NotificationsNoneIcon/>
                                    </Badge>

                                </span>
                                
                                {/* <span className="relative">
                                    <span className="w-2 h-2 rounded-full absolute left-2 leading text-xs bg-secondary500 top-0 "></span>

                                        <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.3476C15.6392 17.3476 18.2481 16.6242 18.5 13.7205C18.5 10.8188 16.6812 11.0054 16.6812 7.44511C16.6812 4.66414 14.0452 1.5 10 1.5C5.95477 1.5 3.31885 4.66414 3.31885 7.44511C3.31885 11.0054 1.5 10.8188 1.5 13.7205C1.75295 16.6352 4.36177 17.3476 10 17.3476Z" stroke="#667085" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12.3889 20.3572C11.0247 21.8719 8.89672 21.8899 7.51953 20.3572" stroke="#667085" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                </span> */}
                            </div>
                    </div>
                    
                </div>
            </div>
    </>
  )
}

export default Header