import React, { useState } from 'react'
import InputText from '../../../components/InputText'
import TextArea from '../../../components/TextArea'
import Button from '../../../components/Button'
import axiosInstance from '../../../lib/axios'
import { useNavigate, useParams } from 'react-router-dom'

const NewDiscussionPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [loading, setLoading] = useState(false)

    const createPost = async () => {
        if (loading)
            return
        setLoading(true)
        try {
            let response = await axiosInstance.post('v1/discussions', {
                subject_id: id,
                title: title,
                content: content
            })
            navigate(`/home/class/${id}/discussions`)
        } catch (error) {

        }
        setLoading(false)
    }

    return (
        <>
            <div className="p-2 bg-white">
                <InputText
                    className='mb-2'
                    label='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <TextArea
                    className='mb-2'
                    label='Content'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <Button
                    title={'Post'}
                    onClick={createPost} />
            </div>
        </>
    )
}

export default NewDiscussionPage