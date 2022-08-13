import classNames from 'classnames'
import { useRouter } from "next/router";

import React, {useState} from 'react'
import CollapseIcon from './icons/CollapseIcon';
import Customers from './icons/Customers';
import Invoices from './icons/Invoices';
import Logo from './icons/Logo';
import Overview from './icons/Overview';
import Settings from './icons/Settings';
import Withdrawals from './icons/Withdrawals';

const Sidebar = () => {

    const [toggleCollapse, setToggleCollapse] = useState(false);

    const [isCollapsible, setIsCollapsible] = useState(false);

    const wrapperClasses = classNames("h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col ", {
        ["w-80"]: !toggleCollapse,
        ["w-20"]: toggleCollapse,
        })

        const CollapseIconClasses = classNames("p-4 rounded bg-light absolute right-0", {
            "rotate-180":toggleCollapse,
        });

       const onMouseOver =()=>{
           setIsCollapsible(!isCollapsible)
       }  
       
       const handleSidebarToggle = () =>{
           setToggleCollapse(!toggleCollapse)
       }
  return (
    <>
        <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver} style={{transition: "width 300ms cubic-beizer(0.2, 0, 0, 1) 0s"}}>
            <div className="flex flex-col ">
                <div className="flex items-center justify-between py-4 relative">
                {!toggleCollapse && (
                    <div>
                       <Logo/> 
                    </div>
                )}

                    {
                        isCollapsible && (

                             <button className={CollapseIconClasses} onClick={handleSidebarToggle}><CollapseIcon/> </button>

                        )
                    }
                   

                </div>
                <nav className="mt-6 grow">
                    <div className="px-1 flex-wrap">
                        <a className={`menu-item w-full font-thin uppercase flex text-gray_cl items-center p-3 px-4  my-3  transition-colors duration-200 ease-in ${toggleCollapse ? "justify-center" : "justify-start"}`} href="dashboard.html">
                        <span className="text-left px-3">   
                            <Overview/>
                        </span>
                        {!toggleCollapse && (
                            <span className={classNames("mx-4 text-sm font-normal")}>
                                Overview
                            </span>
                        )}
                        </a>
                        <a className={`menu-item w-full font-thin uppercase flex text-gray_cl items-center p-3 px-4  my-3  transition-colors duration-200 ease-in ${toggleCollapse ? "justify-center" : "justify-start"}`} href="dashboard.html">
                            <span className="text-left px-3">   
                                <Invoices/>
                            
                            </span>

                            {!toggleCollapse && (
                            <span className="mx-4 text-sm font-normal">
                                Invoices
                            </span>
                            )}
                        </a>
                        <a className={`menu-item w-full font-thin uppercase flex text-gray_cl items-center p-3 px-4  my-3  transition-colors duration-200 ease-in ${toggleCollapse ? "justify-center" : "justify-start"}`} href="dashboard.html">
                            <span className="text-left px-3">   
                            <Withdrawals />
                            </span>   
                            {!toggleCollapse && (
                            <span className="mx-4 text-sm font-normal">
                                Withdrawals
                            </span>
                            )}
                        </a>
                        <a className={`menu-item w-full font-thin uppercase flex text-gray_cl items-center p-3 px-4  my-3  transition-colors duration-200 ease-in ${toggleCollapse ? "justify-center" : "justify-start"}`} href="dashboard.html">
                            <span className="text-left px-3">
                            <Customers/>
                            </span>

                            {!toggleCollapse && (
                            <span className="mx-4 text-sm font-normal">
                                Customers
                            </span>
                            )}
                        </a>
                        <a className={`menu-item w-full font-thin uppercase flex text-gray_cl items-center p-3 px-4  my-3  transition-colors duration-200 ease-in ${toggleCollapse ? "justify-center" : "justify-start"}`} href="dashboard.html">
                        <span className="text-left px-3">   
                            <Settings/>
                            </span>
                            {!toggleCollapse && (
                            <span className="mx-4 text-sm font-normal">
                                Settings
                            </span>
                            )}
                        </a>
                    
                    </div>
                </nav>
                <div className="items-end flex">
                    <a href="">login</a>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Sidebar