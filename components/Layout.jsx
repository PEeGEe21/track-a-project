import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className="h-screen flex flex-row justify-start">
        <Sidebar/>
        <div className="bg-gray-200 flex-1 p-4 text-gray-800 h-full overflow-y-auto">
            {children}
        </div>
    </div>
  )
}

export default Layout