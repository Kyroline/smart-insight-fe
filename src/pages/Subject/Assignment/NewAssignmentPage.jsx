import React, { useState, useEffect } from 'react'
import InputText from '../../../components/InputText'
import TextArea from '../../../components/TextArea'
import Button from '../../../components/Button'
import axiosInstance from '../../../lib/axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'
import Attachments from '../../../components/Attachments/Attachments'

const NewAssignmentPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState(Date.now())
    const [maxScore, setMaxScore] = useState(100)
    const [content, setContent] = useState('')

    const [loading, setLoading] = useState(false)

    const createPost = async () => {
        if (loading)
            return
        setLoading(true)
        try {
            let response = await axiosInstance.post('v1/assignments', {
                subject_id: id,
                name: title,
                description: content,
                deadline: deadline,
                max_score: maxScore,
                attachments: attachments
            })
            navigate(`/home/class/${id}/assignments`)
        } catch (error) {

        }
        setLoading(false)
    }

    const addNewLink = (name, link) => {
        setAttachments(prev => [...prev, {
            name: name,
            type: 'link',
            value: link
        }])
    }

    const addNewFile = (name, file) => {
        setAttachments(prev => [...prev, {
            name: name,
            type: 'file',
            value: file
        }])
    }

    const [attachments, setAttachments] = useState([])

    return (
        <>
            <div className="p-2 bg-white shadow-md">
                <div className="flex flex-row items-center py-2">
                    <div className="w-8 h-8 mr-2 flex justify-center items-center hover:bg-gray-200 rounded-full" onClick={() => navigate(-1)}>
                        <BsChevronLeft />
                    </div>
                    <span>New Assignment</span>
                </div>
                <InputText
                    className='w-full mb-2'
                    label='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <div className="flex flex-row mb-2 w-full">
                    <InputText
                        className='w-full mr-2'
                        label='Deadline'
                        type='datetime-local'
                        value={deadline}
                        onChange={e => setDeadline(e.target.value)} />
                    <InputText
                        className='shrink-0'
                        label='Max Score'
                        type={'number'}
                        value={maxScore}
                        onChange={e => setMaxScore(e.target.value)} />
                </div>
                <TextArea
                    className='mb-2'
                    label='Content'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />

                <Attachments attachments={attachments} allowUpload={true} onNewLink={addNewLink} onNewFile={addNewFile} />
                <Button
                    title={'Post'}
                    onClick={createPost} />
            </div>
        </>
    )
}

export default NewAssignmentPage