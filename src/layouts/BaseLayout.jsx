import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import useSessionStorage from '../lib/useSessionStorage'

export default () => {
    const [sidebarActive, setSidebarActive] = useState(true)
    const navigate = useNavigate()
    const apiKey = useSessionStorage('api_key')

    useEffect(() => {
        if (!apiKey) {
            navigate('/login')
        }
    }, [apiKey, navigate])

    return (
        <div className="flex flex-col w-screen h-screen bg-[#ebebeb] font-[Poppins]">
            <Navbar active={sidebarActive} onActiveChange={val => setSidebarActive(val)} />
            <Sidebar active={sidebarActive} />
            <div className={`fixed transition-all top-[56px] p-4 overflow-auto h-[calc(100vh-56px)] ${sidebarActive ? 'md:w-[calc(100vw-320px)] md:translate-x-[320px]' : 'w-full'}`}>
                <Outlet />
            </div>
        </div>
    )
}