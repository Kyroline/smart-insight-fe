import React, { useContext, useState } from 'react'
import moment from 'moment'
import { ClassContext } from '../../../context/ClassContext'
import useSWR from 'swr'
import axiosInstance from '../../../lib/axios'
import { useNavigate, useParams } from 'react-router-dom'
import AttendanceDetail from '../../../components/Attendance/AttendanceDetail'
import AttendanceList from '../../../components/Attendance/AttendanceList'

const AttendanceDetailPage = () => {
    const { classData } = useContext(ClassContext)
    const { attendance_id } = useParams()
    const navigate = useNavigate()

    const { data, error, isLoading } = useSWR(`v1/attendances/${attendance_id}`, url => axiosInstance.get(url).then(res => res.data))
    if (isLoading)
        return

    if (classData.teached_class) {
        return (
            <>
                <AttendanceDetail attendanceData={data.data} />
                <AttendanceList attendanceData={data.data} />
            </>
        )
    }

    if (classData.enrolled_class)
        navigate(`/home/class/${classData._id}`)

}

export default AttendanceDetailPage