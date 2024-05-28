import React, { useContext, useRef, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import PopupProvider from './Popup/PopupProvider'
import { Modal } from './Modal/ModalProvider'
import CreateClassModal from './Modal/CreateClassModal'
import EnrollClassModal from './Modal/EnrollClassModal'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Navbar = ({ active, onActiveChange }) => {
    const { showModal } = useContext(Modal)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    return (
        <div className='fixed w-screen h-14 bg-white top-0 left-0 shadow-lg flex flex-row justify-between select-none px-4 z-40'>
            <div className='h-full p-0 flex flex-row items-center select-none'>
                <div onClick={() => onActiveChange(!active)} className='h-14 w-14 hover:bg-gray-200 flex justify-center p-2 rounded-full'>
                    <RxHamburgerMenu className='h-full' />
                </div>
                <img className='h-full p-4' src="/media/image/logo-text.png" alt="" />
            </div>
            <div className='h-full p-2 seslect-none flex flex-row items-center relative'>
                <PopupProvider trigger={<BsPlusLg className='mr-4 hover:bg-gray-200 h-10 w-10 p-2 rounded-full' size={8} />} >
                    <div onClick={() => showModal('Create a new Class', <CreateClassModal key={Date.now()} onCreate={data => navigate(`/home/class/${data._id}`)} />)} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">Create a class</div>
                    <div onClick={() => showModal('Enroll to a Class', <EnrollClassModal key={Date.now()} onEnroll={data => navigate(`/home/class/${data._id}`)} />)} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">Join a class</div>
                </PopupProvider>
                <span className='mr-4 text-sm hidden md:block'>Welcome back, {user ? user.firstname : null}!</span>
                {/* <img className='rounded-full h-full cursor-pointer' src="/media/image/user.png" alt="" /> */}
                <PopupProvider className='-left-20' trigger={<img className='rounded-full w-10 h-10 cursor-pointer' src="/media/image/user.png" alt="" />} >
                    <div onClick={() => showModal('Create a new Class', <CreateClassModal key={Date.now()} onCreate={data => navigate(`/home/class/${data._id}`)} />)} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">My Profile</div>
                    <div onClick={() => { sessionStorage.removeItem('api_key'); window.location.reload() }} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer text-red-600">Logout</div>
                </PopupProvider>
            </div>
        </div>
    )
}

export default Navbar