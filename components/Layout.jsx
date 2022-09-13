import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className="h-screen flex flex-row justify-start">
        <Sidebar/>
        <div className="bg-gray-200 flex-1 p-4 py-3 text-gray-800 h-full overflow-y-auto">
            <Header/>
            {children}
        </div>
    </div>
  )
}

export default Layout