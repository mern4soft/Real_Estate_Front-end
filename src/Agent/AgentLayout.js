import React from 'react'
import Sidebar from '../items/Sidebar'
import NavbarSimple from '../items/Navbar'
import { Outlet } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'

function AgentLayout() {

  const SidebarData =[
    {
        id:1,
        name:"Dashboard",
        icons:<MdDashboard/>,
        link:'/agent/dashboard'
    },
    {
        id:2,
        name:"Property",
        icons:<MdDashboard/>,
        link:'/agent/property'
    },
    
  ]


    return (
        

        <div className='flex h-screen'>
            <Sidebar SidebarData={SidebarData} />
            
            <div className='flex flex-col w-screen'>
                {/* <NavbarSimple /> */}
                <div className='w-full h-[100px] bg-blue-gray-400 shadow-2xl'></div>
                <div className='p-10 h-screen overflow-y-scroll '>

                    <Outlet />


                </div>
                <div className='flex-grow p-3'>
                    {/* Content for the main section of the layout */}
                </div>
            </div>
        </div>

    )
}

export default AgentLayout
