import React from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ active, onActiveChange }) => {
    return (
        <div className='fixed w-screen h-14 bg-white top-0 left-0 shadow-lg flex flex-row justify-between select-none px-4'>
            <div className='h-full p-0 flex flex-row items-center select-none'>
                <div onClick={() => onActiveChange(!active)} className='h-14 w-14 hover:bg-gray-200 flex justify-center p-2 rounded-full'>
                    <RxHamburgerMenu className='h-full' />
                </div>
                <img className='h-full p-4' src="/media/image/logo-text.png" alt="" />
            </div>
            <div className='h-full p-2 select-none flex flex-row items-center'>
                <BsPlusLg className='mr-4 hover:bg-gray-200 h-10 w-10 p-2 rounded-full' size={8}/>
                <span className='mr-4 text-sm'>Welcome back, Valerica!</span>
                <img className='rounded-full h-full cursor-pointer' src="/media/image/user.png" alt="" />
            </div>
        </div>
    )
}

export default Navbar