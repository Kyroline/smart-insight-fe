import React, { useState } from 'react'
import InputText from '../InputText'
import useSWR from 'swr'
import axiosInstance from '../../lib/axios'
import Attachments from '../Attachments/Attachments'
import Button from '../Button'
import { useAlert } from 'react-alert'

const SubmissionDetail = ({ maxScore, submissionId }) => {
    const alert = useAlert()
    const { data, error, isLoading, mutate } = useSWR(submissionId ? `v1/submissions/${submissionId}` : null, url => axiosInstance.get(url).then(res => res.data))

    const [grade, setGrade] = useState(data ? data.data.grade : null)

    const onChange = (e) => {
        if (e.target.value >= 0 && e.target.value <= maxScore)
            setGrade(e.target.value)
    }

    const onGrade = async () => {
        try {
            let response = await axiosInstance.put(`v1/submissions/${submissionId}`, {
                grade: grade
            })
            mutate()
            alert.success('Submission graded')
        } catch (error) {
            alert.success('Grading error')
        }
    }

    if (isLoading || error)
        return (
            <div className=""></div>
        )

    return (
        <div className="mt-4 bg-white rounded-md p-2 md:p-4 shadow-md">
            <h1 className='text-sm md:text-base'>{data.data.student.firstname} {data.data.student.lastname}'s Submission</h1>
            <h2 className='mb-2 text-xs md:text-sm'>Grade: {data.data.grade ?? 'Not Graded'} / 100</h2>
            <InputText label='Grade' value={grade} type='number' onChange={onChange} />
            <div className="border-b mb-2 border-blue-600"></div>
            <InputText readOnly={true} label={'Description'} value={data.data.description} />
            <Attachments attachments={data.data.attachments} allowUpload={false} />
            <Button onClick={onGrade} />
        </div>
    )
}

export default SubmissionDetail