import React, { useContext, useState, useEffect } from 'react'
import { ClassContext } from '../../context/ClassContext'

const SubmissionList = ({ submissionData, onSubmissionClick }) => {
    const { classData } = useContext(ClassContext)

    let turnedStudents = []

    return (
        <div className='p-2 md:p-4 bg-white rounded-md shadow-md'>
            <h1 className='text-sm md:text-base font-bold'>Class Submission</h1>
            {submissionData.map((submission, index) => {
                // Delete from students
                turnedStudents.push(submission.student._id)
                return (
                    <div className="p-2 border-b flex flex-col justify-center ">
                        <h1>{submission.student.firstname} {submission.student.lastname}</h1>
                        <div className="flex flex-row">
                            {submission.grade ? <span onClick={() => onSubmissionClick(submission._id)} className='text-sm text-green-600 hover:underline cursor-pointer'>{submission.grade}</span> : <span onClick={() => onSubmissionClick(submission._id)} className='text-sm text-orange-600 hover:underline cursor-pointer'>Not Graded</span>}
                        </div>
                    </div>
                )
            }
            )}

            {classData.students.filter(student => !turnedStudents.includes(student._id)).map((student, index) => (
                <div className="p-2 border-b flex flex-col justify-center ">
                    <h1>{student.firstname} {student.lastname}</h1>
                    <div className="flex flex-row">
                        <span className='text-sm text-red-600'>Missing</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SubmissionList