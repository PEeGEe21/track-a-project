import React from 'react'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
        <Sidebar/>
        <div className="bg-gray-300 flex-1 p-4 text-white border-1 border-dashed ">
            Blog Dashboard
        </div>
    </div>
  )
}

export default Layout