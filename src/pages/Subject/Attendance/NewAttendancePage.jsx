import React, { useState } from 'react'
import InputText from '../../../components/InputText'
import Button from '../../../components/Button'
import axiosInstance from '../../../lib/axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'

const NewAttendancePage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState(Date.now())

    const [loading, setLoading] = useState(false)

    const createPost = async () => {
        if (loading)
            return

        setLoading(true)
        try {
            let response = await axiosInstance.post('v1/attendances', {
                subject_id: id,
                name: title,
                deadline: deadline
            })
            navigate(`/home/class/${id}/attendances`)
        } catch (error) {

        }
        setLoading(false)
    }

    return (
        <>
            <div className="p-2 bg-white shadow-md">
                <div className="flex flex-row items-center py-2">
                    <div className="w-8 h-8 mr-2 flex justify-center items-center hover:bg-gray-200 rounded-full" onClick={() => navigate(-1)}>
                        <BsChevronLeft />
                    </div>
                    <span>New Attendance</span>
                </div>
                <div className="flex flex-row mb-2 w-full">
                    <InputText
                        className='w-full mr-2'
                        label='Title'
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <InputText
                        label='Deadline'
                        type='datetime-local'
                        value={deadline}
                        onChange={e => setDeadline(e.target.value)} />
                </div>

                <Button
                    title={'Post'}
                    onClick={createPost} />
            </div>
        </>
    )
}

export default NewAttendancePage