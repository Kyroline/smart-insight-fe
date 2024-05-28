import React, { useContext } from 'react'
import { BsCalendarCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { ClassContext } from '../../context/ClassContext'

const AttendanceRowTeacher = ({ data }) => {
    const {classData} = useContext(ClassContext)
    return (
        <div className="mb-2">
            <Link to={`/home/class/${data.subject._id}/attendances/${data._id}`}>
                <div className="flex flex-row min-h-12 items-center bg-white p-2 rounded-md shadow-md mb-2">
                    <div className="flex flex-row justify-center h-10 w-10 rounded-full items-center bg-blue-600 mr-4">
                        <BsCalendarCheckFill color='white' size={20} />
                    </div>
                    <div className="flex flex-col mr-2">
                        <h1 className='font-bold text-xs md:text-sm'>{data.name}</h1>
                        <span className=' text-xs md:text-sm'>{data.present_students.length} out of {classData.students.length} student(s) attend</span>
                        <span className='text-xs md:text-sm'>Closed on {moment(data.deadline).format('HH:mm MMMM DD YYYY')}</span>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default AttendanceRowTeacher