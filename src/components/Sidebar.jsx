import React from 'react'
import { FaCalendarAlt, FaChalkboardTeacher, FaHome, FaUser } from "react-icons/fa"
import { HiAcademicCap } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Sidebar = ({ active }) => {
    return (
        <div className={`border-t-2 border-grey-800 fixed top-[56px] left-0 h-[calc(100vh-56px)] select-none w-80 ${active ? 'translate-x-0' : '-translate-x-[320px]'} bg-white shadow-lg transition-all z-40`}>
            <Link to='/home'>
                <div className='h-8 flex flex-row items-center m-1 p-6 hover:bg-gray-200 cursor-pointer'>
                    <FaHome className='mr-8' color='#5f6368' size={'24'} />
                    <span className='text-sm'>Home</span>
                </div>
            </Link>
            <Link to='/home/my-agenda'>
                <div className='h-8 flex flex-row items-center m-1 p-6 hover:bg-gray-200 cursor-pointer'>
                    <FaCalendarAlt className='mr-8' color='#5f6368' size={'24'} />
                    <span className='text-sm'>My Agenda</span>
                </div>
            </Link>
            <Link to='/home/my-class'>
                <div className='h-8 flex flex-row items-center m-1 p-6 hover:bg-gray-200 cursor-pointer'>
                    <FaChalkboardTeacher className='mr-8' color='#5f6368' size={'24'} />
                    <span className='text-sm'>My Class</span>
                </div>
            </Link>
            <Link to='/home/enrolled-class'>
                <div className='h-8 flex flex-row items-center m-1 p-6 hover:bg-gray-200 cursor-pointer'>
                    <HiAcademicCap className='mr-8' color='#5f6368' size={'24'} />
                    <span className='text-sm'>Enrolled</span>
                </div>
            </Link>
            <Link to='/home/my-profile'>
                <div className='h-8 flex flex-row items-center m-1 p-6 hover:bg-gray-200 cursor-pointer'>
                    <FaUser className='mr-8' color='#5f6368' size={'24'} />
                    <span className='text-sm'>Profile</span>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar