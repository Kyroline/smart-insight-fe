import React, { useContext } from 'react'
import { ClassContext } from '../../../context/ClassContext'

const SubjectPeoplePage = () => {
    const { classData } = useContext(ClassContext)

    return (
        <div className='flex flex-col p-4 bg-white'>
            <h1 className='font-bold text-blue-600 text-xl border-b py-2 mb-2 border-blue-600'>Teacher</h1>
            <div className='flex flex-col mb-4'>
                <span>{classData.teacher.firstname} {classData.teacher.lastname}</span>
            </div>
            <div className="flex flex-row justify-between border-b py-2 mb-2 border-blue-600">
                <h1 className='font-bold text-blue-600 text-xl'>Students</h1>
                <span className='text-sm'>{classData.students.length} students</span>
            </div>
            <div className='flex flex-col'>
                {classData.students.map((student, index) => (
                    <span className='mb-2'>{student.firstname} {student.lastname}</span>
                ))}
            </div>
        </div>
    )
}

export default SubjectPeoplePage