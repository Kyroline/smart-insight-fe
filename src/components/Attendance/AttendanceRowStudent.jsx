import React from 'react'
import axiosInstance from '../../lib/axios'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { BsCalendarCheckFill, BsCheck2Circle } from 'react-icons/bs'
import { useAlert } from 'react-alert'

const AttendanceRowStudent = ({ data, mutate }) => {
    const alert = useAlert()
    const doPresent = () => {
        try {
            let response = axiosInstance.post(`v1/attendances/${data._id}/present`)
            mutate()
            alert.success('Attendance recorded')
        } catch (error) {
            alert.success('Attendance error')
        }
    }

    return (
        <div className="mb-2">
            <div className="flex flex-row min-h-12 items-center bg-white p-2 rounded-md shadow-md mb-2">
                <div className="flex flex-row justify-center h-10 w-10 rounded-full items-center bg-blue-600 mr-4">
                    <BsCalendarCheckFill color='white' size={20} />
                </div>
                <div className="flex flex-row items-center justify-between md:justify-normal">
                    <div className="flex flex-col">
                        <h1 className='font-bold text-xs md:text-sm'>{data.name}</h1>
                        <span className={` ${data.user_present ? 'text-green-600' : 'text-red-600'} font-bold text-xs md:text-sm`}>{data.user_present ? 'Present' : moment(data.deadline).isBefore(moment.now()) ? 'Absent' : 'Attendance not yet recorded'}</span>
                        <span className='text-xs md:text-sm'>Will be closed on {moment(data.deadline).format('HH:mm MMMM DD YYYY')}</span>
                    </div>
                    {!data.user_present && moment(data.deadline).isAfter(moment.now()) ?
                        <div onClick={doPresent} className="h-8 w-8 flex justify-center items-center bg-green-600 hover:bg-green-800 cursor-pointer rounded-full shrink-0 ml-2 md:ml-4">
                            <BsCheck2Circle color='white' />
                        </div>
                        : null}
                </div>
            </div>
        </div >
    )
}

export default AttendanceRowStudent