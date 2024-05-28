import React from 'react'
import axiosInstance from '../../lib/axios.js'
import { Link } from 'react-router-dom'
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaMessage, FaUser } from "react-icons/fa6"
import { FaClipboardList } from "react-icons/fa"
import PopupProvider from '../Popup/PopupProvider'
import { useNavigate } from 'react-router-dom'

const SubjectGrid = ({ data }) => {
    const navigate = useNavigate()

    const unenroll = async () => {
        let response = await axiosInstance.post(`/v1/subjects/${data._id}/unenroll`)
    }

    return (
        <div className="p-4">
            <div className='relative p-4 w-[275px] min-h-[275px] bg-white rounded-lg shadow-md items-center flex flex-col'>
                <div className="absolute w-8 h-8 -top-4 -right-4 bg-white shadow-xl flex justify-center items-center rounded-full z-40">
                    <PopupProvider className='-left-24 md:-left-24' trigger={<BsThreeDotsVertical className='cursor-pointer hover:bg-gray-200 p-2 h-8 w-8 rounded-full z-40' size='24' color='black' />} >
                        <div onClick={() => navigate(`/home/class/${data._id}/materials`)} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">Materials</div>
                        <div onClick={() => navigate(`/home/class/${data._id}/assignments`)} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">Assignments</div>
                        <div onClick={() => navigate(`/home/class/${data._id}/discussions`)} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">Discussions</div>
                        <div onClick={unenroll} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer text-red-600">Leave class</div>
                    </PopupProvider>
                </div>
                <Link className='-mt-4 relative w-[275px] h-[100px] rounded-t-lg' to={`/home/class/${data._id}`} >
                    <div className={`w-full h-full ${data.image ? `bg-[url('${''}')]` : 'bg-red-600'} rounded-t-lg`} />
                </Link>
                <div className='-mt-12 w-16 h-16 z-10'>
                    <img src="/media/image/user.png" alt="" />
                </div>
                <Link to={`/home/class/${data._id}`} >
                    <h1 className='font-semibold text-center'>{data.name}</h1>
                </Link>
                <h1 className='font-regular text-center'>{data.teacher.firstname} {data.teacher.lastname}</h1>
                <div className='flex flex-row mt-2'>
                    <div className="w-12 h-12 rounded-full bg-blue-600 m-2 flex justify-center items-center"><FaMessage color='white' size='12' /><span className='text-white text-xs ml-1'>{data.material_count ?? '?'}</span></div>
                    <div className="w-12 h-12 rounded-full bg-green-600 m-2 flex justify-center items-center"><FaClipboardList color='white' size='12' /><span className='text-white text-xs ml-1'>{data.assignment_count ?? '?'}</span></div>
                    <div className="w-12 h-12 rounded-full bg-orange-600 m-2 flex justify-center items-center"><FaUser color='white' size='12' /><span className='text-white text-xs ml-1'>{data.student_count ?? '?'}</span></div>
                </div>
            </div>
        </div >
    )
}

export default SubjectGrid