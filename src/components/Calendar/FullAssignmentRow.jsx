import React from 'react'
import moment from 'moment'
import { BsBook } from 'react-icons/bs'
import { MdAssignment } from 'react-icons/md'
import { Link } from 'react-router-dom'

const FullAssignmentRow = ({ data }) => {
    return (
        <div className="mb-2">
            <Link to={`/home/class/${data.subject._id}/assignments/${data._id}`}>
                <div className="flex flex-row min-h-12 items-center bg-white p-2 rounded-md shadow-md">
                    <div className="flex flex-row justify-center h-10 w-10 rounded-full items-center bg-blue-600 mr-4">
                        <MdAssignment color='white' size={20} />
                    </div>
                    <div className="flex flex-col mr-2">
                        <div className="flex flex-row">
                            <h1 className='font-bold text-xs md:text-sm'>{data.subject.name}</h1>
                            <span className='mx-1'>-</span>
                            <h1 className='font-bold text-xs md:text-sm'>{data.name}</h1>
                        </div>
                        <span className='text-xs md:text-sm'>Due {moment(data.deadline).format('HH:mm MMMM DD YYYY')}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FullAssignmentRow