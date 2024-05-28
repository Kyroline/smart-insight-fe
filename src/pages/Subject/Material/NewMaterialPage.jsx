import React, { useState } from 'react'
import InputText from '../../../components/InputText'
import TextArea from '../../../components/TextArea'
import Button from '../../../components/Button'
import axiosInstance from '../../../lib/axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'
import Attachments from '../../../components/Attachments/Attachments'

const NewMaterialPage = () => {
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
            let response = await axiosInstance.post('v1/materials', {
                subject_id: id,
                name: title,
                description: content
            })
            navigate(`/home/class/${id}/discussions`)
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

    const addNewFile = () => {

    }

    const [attachments, setAttachments] = useState([
        {
            name: 'Lala',
            type: 'file',
            value: 'mepmep.pdf'
        },
        {
            name: 'Lala2',
            type: 'link',
            value: 'http://google.com'
        }
    ])

    return (
        <>
            <div className="p-2 bg-white shadow-md">
                <div className="flex flex-row items-center py-2">
                    <div className="w-8 h-8 mr-2 flex justify-center items-center hover:bg-gray-200 rounded-full" onClick={() => navigate(-1)}>
                        <BsChevronLeft />
                    </div>
                    <span>New Material Topic</span>
                </div>
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

                <Attachments attachments={attachments} allowUpload={true} onNewLink={addNewLink} onNewFile={addNewFile} />
                <Button
                    title={'Post'}
                    onClick={createPost} />
            </div>
        </>
    )
}

export default NewMaterialPage