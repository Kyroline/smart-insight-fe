import React from 'react'
import InputText from '../InputText'

const NewAttachment = () => {
    return (
        <div className="flex flex-row items-center py-2">
            <span>Attachments</span>
            <PopupProvider trigger={<BsPlusLg className='mr-4 hover:bg-gray-200 h-10 w-10 p-2 rounded-full' size={8} />} >
                <div onClick={() => console.log('A')} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">Add file</div>
                <div onClick={() => console.log('B')} className="h-10 flex items-center p-2 hover:bg-gray-200 text-sm cursor-pointer">Add link</div>
            </PopupProvider>
        </div>
    )
}

export default NewAttachment