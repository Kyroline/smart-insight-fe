import React, { useState } from 'react'
import Attachments from '../Attachments/Attachments'
import InputText from '../InputText'
import { useParams } from 'react-router-dom'
import Button from '../Button'
import axiosInstance from '../../lib/axios'

const MySubmission = ({ submissionData, assignmentMutate }) => {
    const { assignment_id } = useParams()
    const [desc, setDesc] = useState('')

    const [attachments, setAttachments] = useState([])
    const [submit, setSubmit] = useState(false)

    const addFile = (name, file) => {
        setAttachments(prev => [...prev, { name: name, type: 'file', value: file }])
    }

    const addLink = (name, file) => {
        setAttachments(prev => [...prev, { name: name, type: 'link', value: file }])
    }

    const onSubmit = async () => {
        if (submit)
            return

        setSubmit(true)
        try {
            let response = await axiosInstance.post('v1/submissions',
                {
                    assignment_id: assignment_id,
                    description: desc,
                    attachments: attachments
                }
            )
            assignmentMutate()
        } catch (error) {

        }
        setSubmit(false)
    }

    if (!submissionData)
        return (
            <div className="mt-4 bg-white rounded-md p-2 md:p-4 shadow-md">
                <h1 className='mb-2'>Your Submission - <span className='text-red-600 font-bold'>Missing</span></h1>
                <InputText label={'Description'} value={desc} onChange={e => setDesc(e.target.value)} />
                <Attachments attachments={attachments} allowUpload={true} onNewFile={addFile} onNewLink={addLink} />
                <Button title='Submit' onClick={onSubmit} />
            </div>
        )

    return (
        <div className="mt-4 bg-white rounded-md p-2 md:p-4 shadow-md">
            <h1 className='text-sm md:text-base'>Your Submission - <span className='text-green-600 font-bold'>Turned In</span></h1>
            <h2 className='mb-2 text-xs md:text-sm'>Grade: {submissionData.grade ?? 'Not Graded'} / 100</h2>
            <div className="border-b mb-2 border-blue-600"></div>
            <InputText readOnly={true} label={'Description'} value={submissionData.description} />
            <Attachments attachments={submissionData.attachments} allowUpload={false} />
        </div>
    )
}

export default MySubmission