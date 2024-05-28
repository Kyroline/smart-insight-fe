import React, { useContext, useState } from 'react'
import axiosInstance from '../../lib/axios'
import InputText from '../InputText'
import { Modal } from './ModalProvider'

const EnrollClassModal = ({ onEnroll }) => {
    const { hideModal } = useContext(Modal)
    const [code, setCode] = useState('')

    const [ready, setReady] = useState(true)

    const onSave = async () => {
        if (!ready)
            return
        setReady(false)
        try {
            let response = await axiosInstance.post(`v1/subjects/${code}/enroll`)
            onEnroll(response.data.data)
        } catch (error) {

        }
        hideModal()
        setReady(true)
    }

    return (
        <div className="flex flex-col w-full">
            <InputText label='Class Code' value={code} onChange={e => setCode(e.target.value)} />
            <div className="flex flex-row w-full justify-end items-center mt-4">
                <button onClick={() => hideModal()} className='me-4 py-2 px-4 rounded-lg border-0 text-sm font-semibold bg-white-600 text-blue-600 hover:bg-gray-200'>Cancel</button>
                <button onClick={onSave} className='me-4 py-2 px-4 rounded-lg border-0 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700'>Create</button>
            </div>
        </div>
    )
}

export default EnrollClassModal