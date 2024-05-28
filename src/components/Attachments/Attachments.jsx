import React, { useRef, useState } from 'react'
import InputText from '../InputText'
import PopupProvider from '../Popup/PopupProvider'
import { BsPlusLg } from 'react-icons/bs'
import Button from '../Button'
import AttachmentRow from './AttachmentRow'
import axiosInstance from '../../lib/axios'
import InputFile from '../InputFile'

const Attachments = ({ attachments, allowUpload, onNewLink, onNewFile }) => {
    console.log(attachments)
    const [linkName, setLinkName] = useState('')
    const [link, setLink] = useState('')

    const [filename, setFileName] = useState('')
    const [file, setFile] = useState('')

    const [showLink, setShowLink] = useState(false)
    const [showFile, setShowFile] = useState(false)

    const displayLink = (value) => {
        setLinkName('')
        setLink('')

        setShowLink(value)
    }

    const displayFile = (value) => {
        setLinkName('')
        setLink('')

        setShowFile(value)
    }

    const addNewLink = () => {
        onNewLink(linkName, link)
        setShowLink(false)
    }

    const addNewFile = () => {
        onNewFile(filename, file)
        setShowFile(false)
    }

    const uploadFile = async (e) => {
        if (!allowUpload)
            return

        const formData = new FormData()
        formData.append('file', e.target.files[0])

        try {
            let response = await axiosInstance.post('v1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                // onUploadProgress: (progressEvent) => {
                //     const progress = Math.round(progressEvent.loaded * 100 / progressEvent.total)
                //     setUploadProgress(progress)
                // }
            })
            setFile(response.data.filename)
            // onNewFile(response.data.filename)
            // onUploadSuccess(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const fileRef = useRef()
    return (
        <>
            <div className="flex flex-row items-center py-2">
                <span className='text-sm md:text-base'>Attachments</span>
                {allowUpload ?
                    <PopupProvider trigger={<BsPlusLg className='mr-4 hover:bg-gray-200 h-10 min-w-10 p-2 rounded-full' size={8} />} >
                        <div onClick={() => displayFile(true)} className="min-w-30 h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">Add file</div>
                        <div onClick={() => displayLink(true)} className="min-w-30 h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">Add link</div>
                    </PopupProvider>
                    : null}
            </div>
            <div className="flex flex-col py-2">
                {showFile && allowUpload ?
                    <div className='p-2 m-2 md:p-4 md:m-4 border-2 rounded-md'>
                        <InputText className='mt-2' label='Name' value={filename} onChange={e => setFileName(e.target.value)} />
                        <InputFile onChange={uploadFile} className='mt-2' label='Upload file' />
                        <div className="flex flex-row mt-4 md:w-1/2 justify-end">
                            <Button className={'mr-4 bg-white hover:bg-gray-200 text-blue-600 border border-blue-600'} title={'Cancel'} onClick={() => displayFile(false)} />
                            <Button title={'Add'} onClick={addNewFile} />
                        </div>
                    </div>
                    : null}
                {showLink && allowUpload ?
                    <div className='p-2 m-2 md:p-4 md:m-4 border-2 rounded-md'>
                        <InputText className='mt-2' label='Name' value={linkName} onChange={e => setLinkName(e.target.value)} />
                        <InputText className='mt-2' label='Link' value={link} onChange={e => setLink(e.target.value)} />
                        <div className="flex flex-row mt-4 md:w-1/2 justify-end">
                            <Button className={'mr-4 bg-white hover:bg-gray-200 text-blue-600 border border-blue-600'} title={'Cancel'} onClick={() => displayLink(false)} />
                            <Button title={'Add'} onClick={addNewLink} />
                        </div>
                    </div>
                    : null}
                {attachments && attachments.length > 0 ? attachments.map((attachment, index) => (
                    <AttachmentRow key={index} data={attachment} />
                )) : null}
            </div>
        </>
    )
}

export default Attachments