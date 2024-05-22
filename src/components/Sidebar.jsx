import React from 'react'
import { FaCalendarAlt, FaChalkboardTeacher, FaHome, FaUser } from "react-icons/fa";
// import { FaChalkboardUser } from 'react-icons/fa6';
import { HiAcademicCap } from 'react-icons/hi2';

const Sidebar = ({ active }) => {
    return (
        <div className={`border-t-2 border-grey-800 fixed top-[56px] left-0 h-[calc(100vh-56px)] select-none w-80 ${active ? 'translate-x-0' : '-translate-x-[320px]'} bg-white shadow-lg transition-all z-40`}>
            <div className='h-8 flex flex-row items-center m-4'>
                <FaHome className='mr-8' color='#5f6368' size={'24'} />
                <span className='text-sm'>Home</span>
            </div>
            <div className='h-8 flex flex-row items-center m-4'>
                <FaCalendarAlt className='mr-8' color='#5f6368' size={'24'} />
                <span className='text-sm'>My Agenda</span>
            </div>
            <div className='h-8 flex flex-row items-center m-4'>
                <FaChalkboardTeacher className='mr-8' color='#5f6368' size={'24'} />
                <span className='text-sm'>My Class</span>
            </div>
            <div className='h-8 flex flex-row items-center m-4'>
                <HiAcademicCap className='mr-8' color='#5f6368' size={'24'} />
                <span className='text-sm'>Enrolled</span>   
            </div>
            <div className='h-8 flex flex-row items-center m-4'>
                <FaUser className='mr-8' color='#5f6368' size={'24'} />
                <span className='text-sm'>Profile</span>   
            </div>
        </div>
    )
}

export default Sidebar