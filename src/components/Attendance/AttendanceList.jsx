import React, { useContext, useState, useEffect } from 'react'
import { ClassContext } from '../../context/ClassContext'

const AttendanceList = ({ attendanceData }) => {
    const { classData } = useContext(ClassContext)
    console.log(attendanceData.present_students)

    return (
        <div className='p-2 md:p-4 bg-white rounded-md shadow-md'>
            <h1 className='p-2 text-sm md:text-base font-bold'>Attendees</h1>
            {classData.students.map((student, index) => {
                let present = attendanceData.present_students.includes(student._id)
                return (
                    <div className="p-1 border-b flex flex-col justify-center ">
                        <h1>{student.firstname} {student.lastname}</h1>
                        <div className="flex flex-row">
                            {present ?
                                <span className='text-sm text-green-600'>Present</span>
                                :
                                <span className='text-sm text-red-600'>Missing</span>
                                }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AttendanceList