import React, { useContext, useState } from 'react'
import InputText from '../InputText'
import { Modal } from './ModalProvider'
import axiosInstance from '../../lib/axios'
import { useNavigate } from 'react-router-dom'

const CreateClassModal = ({ onCreate }) => {
    const { hideModal } = useContext(Modal)
    const [name, setName] = useState('')
    const [ready, setReady] = useState(true)

    const onSave = async () => {
        if (!ready)
            return
        setReady(false)
        try {
            let response = await axiosInstance.post('v1/subjects', { name: name })
            onCreate(response.data.data)
        } catch (error) {

        }
        hideModal()
        setReady(true)
    }
    return (
        <div className="flex flex-col w-full">
            <InputText label='Class Name' value={name} onChange={e => setName(e.target.value)} />
            <div className="flex flex-row w-full justify-end items-center mt-4">
                <button onClick={() => hideModal()} className='me-4 py-2 px-4 rounded-lg border-0 text-sm font-semibold bg-white-600 text-blue-600 hover:bg-gray-200'>Cancel</button>
                <button onClick={onSave} className='me-4 py-2 px-4 rounded-lg border-0 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700'>Create</button>
            </div>
        </div>
    )
}

export default CreateClassModal