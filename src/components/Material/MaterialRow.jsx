import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { FaBook } from 'react-icons/fa'
import { ClassContext } from '../../context/ClassContext'

const MaterialRow = ({ data }) => {
    const { classData } = useContext(ClassContext)
    return (
        <Link to={`/home/class/${classData._id}/materials/${data._id}`}>
            <div className="flex flex-row min-h-12 items-center bg-white p-2 rounded-md shadow-md mb-2">
                <div className="flex flex-row justify-center h-10 w-10 rounded-full items-center bg-blue-600 mr-4 shrink-0">
                    <FaBook color='white' size={20} />
                </div>
                <div className="flex flex-col mr-2">
                    <h1 className='font-bold text-xs md:text-sm'>{data.name.length > 100 ? data.name.slice(0, 100) + '...' : data.name}</h1>
                    <h1 className="text-xs md:text-sm">{data.created_at == data.updated_at ? 'Posted ' + moment.utc(data.created_at).startOf('minute').fromNow() : 'Last modified' + moment.utc(data.updated_at).startOf('day').fromNow()}</h1>
                </div>
            </div>
        </Link>
    )
}

export default MaterialRow