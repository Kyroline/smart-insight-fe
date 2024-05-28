import React from 'react'

const AttachmentRow = ({ data }) => {
    const click = () => {
        if (data.value.slice(0, 4) == 'http')
            window.open(data.value)
        else {
            console.log(data.value)
            window.open(`http://localhost:3000/uploads/${data.value}`)
        }
    }

    return (
        <div className="p-1 m-1 md:p-2 md:m-2 border-2 rounded-md flex flex-col hover:bg-gray-100 cursor-pointer">
            <div className="flex flex-row">
                <h1 className='text-sm font-bold'>{data.name}</h1>
                <span className='mx-1'>-</span>
                <h1 className='text-sm'>{data.type}</h1>
            </div>
            <h3 className='text-xs md:text-sm text-balance' onClick={click}>{data.value.length > 35 ? data.value.slice(0, 35) + '...' : data.value}</h3>
        </div>
    )
}

export default AttachmentRow