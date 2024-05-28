import React, { useContext } from 'react'
import useSWR from 'swr'
import { ClassContext } from '../../../context/ClassContext'
import axiosInstance from '../../../lib/axios'
import { BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import AttendanceRowTeacher from '../../../components/Attendance/AttendanceRowTeacher'
import AttendanceRowStudent from '../../../components/Attendance/AttendanceRowStudent'
import Loading from '../../../components/Error/Loading'
import NoItem from '../../../components/Error/NoItem'

const SubjectAttendancePage = () => {
    const navigate = useNavigate()
    const { classData } = useContext(ClassContext)

    const { data, error, isLoading, mutate } = useSWR(`v1/attendances?subject=${classData._id}`, url => axiosInstance.get(url).then(res => res.data))

    if (isLoading)
        return (
            <Loading />
        )

    if (classData.teached_class)
        return (
            <>
                <div className="p-2 md:p-4 mb-4 bg-white rounded-md shadow-md">Class' Attendance</div>
                {data ? data.data.map((item, index) => (
                    <AttendanceRowTeacher data={item} key={index} />
                )) : null}
                <div onClick={() => navigate(`/home/class/${classData._id}/attendances/new`)} className="h-12 w-12 sticky ml-auto bottom-0 right-0 shrink-0 flex flex-row p-2 rounded-full bg-orange-600 hover:bg-orange-800 cursor-pointer text-sm">
                    <BsPlusLg className='h-8 w-8 md:h-8 md:w-8' color='white' />
                </div>
            </>
        )

    if (classData.enrolled_class)
        return (
            <>
                <div className="p-2 md:p-4 mb-4 bg-white rounded-md shadow-md">Class' Attendance</div>
                {data ? data.data.map((item, index) => (
                    <AttendanceRowStudent mutate={mutate} data={item} key={index} />
                )) : null}
            </>
        )
}

export default SubjectAttendancePage