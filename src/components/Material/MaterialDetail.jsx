import React, { useContext } from 'react'
import moment from 'moment'
import { FaBook } from 'react-icons/fa'
import { ClassContext } from '../../context/ClassContext'
import Attachments from '../Attachments/Attachments'

const MaterialDetail = ({ materialData }) => {
    const { classData } = useContext(ClassContext)
    return (
        <div className="flex flex-col w-full bg-white p-2 rounded-md shadow-md mb-2">
            <div className="flex flex-row min-h-12 items-center">
                <div className="flex flex-row justify-center h-12 w-12 rounded-full items-center bg-blue-600 mr-4">
                    <FaBook color='white' size={32} />
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col mr-2 w-full">
                        <h1 className='font-bold text-base md:text-xl'>{materialData.name}</h1>
                        <span className=''>{classData.teacher.firstname} {classData.teacher.lastname}</span>
                    </div>
                </div>
            </div>
            <div className="w-full border-b border-blue-600 my-2" />
            <div className="w-full p-1 md:p-4">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row w-full">
                        <div className="min-w-24 md:min-w-36 shrink-0 text-sm md:text-base">Posted at</div>
                        <div className=""><span className='text-sm md:text-base'>{': ' + moment.utc(materialData.created_at).format('HH:mm MMMM DD YYYY')}</span></div>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="min-w-24 md:min-w-36 shrink-0 text-sm md:text-base">Description</div>
                        <div className=""><span className='text-sm md:text-base'>{': ' + materialData.description}</span></div>
                    </div>
                </div>
                <Attachments attachments={materialData.attachments} allowUpload={false} />
            </div>
        </div>
    )
}

export default MaterialDetail