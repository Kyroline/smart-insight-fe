import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default () => {
    const [sidebarActive, setSidebarActive] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (!sessionStorage.getItem('api_key'))
            navigate('/login')
    }, [])

    return (
        <div className="flex flex-col w-screen h-screen bg-[#ebebeb] font-[Poppins]">
            <Navbar active={sidebarActive} onActiveChange={val => setSidebarActive(val)} />
            <Sidebar active={sidebarActive} />
            <div className={`fixed transition-all top-[56px] p-4 overflow-auto h-[calc(100vh-56px)] ${sidebarActive ? 'w-[calc(100vw-320px)] translate-x-[320px]' : 'w-full'}`}>
                <Outlet />
            </div>
        </div>
    )
}