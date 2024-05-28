import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import useSessionStorage from '../lib/useSessionStorage'
import { UserContext } from '../context/UserContext'
import axiosInstance from '../lib/axios'

export default () => {
    const [sidebarActive, setSidebarActive] = useState(true)
    const navigate = useNavigate()
    const apiKey = useSessionStorage('api_key')
    const { setUser } = useContext(UserContext)

    const getUser = async () => {
        try {
            let response = (await axiosInstance.get('v1/auth/validate')).data
            setUser(response.data)
        } catch (error) {
            setUser(null)
        }
    }

    useEffect(() => {
        if (!apiKey) {
            navigate('/login')
        }
    }, [apiKey, navigate])

    useEffect(() => {
        if (apiKey)
            getUser()

        // const eventSource = new EventSource(`http://localhost:3000/events`, {
        //     he
        // })

        return (() => {
            setUser(null)
        })
    }, [])

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