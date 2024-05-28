import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { MdAssignment } from 'react-icons/md'

const AssignmentRowStudent = ({ data }) => {
    return (
        <div className="mb-2">
            <Link to={`/home/class/${data.subject._id}/assignments/${data._id}`}>
                <div className="flex flex-row min-h-12 items-center bg-white p-2 rounded-md shadow-md mb-2">
                    <div className="flex flex-row justify-center h-10 w-10 rounded-full items-center bg-blue-600 mr-4">
                        <MdAssignment color='white' size={20} />
                    </div>
                    <div className="flex flex-col mr-2">
                        <h1 className='font-bold text-xs md:text-sm'>{data.name}</h1>
                        {data.submission ?
                            <span className='text-xs md:text-sm text-green-600 font-bold'>Turned In{data.submission.grade ? `, Grade: ${data.submission.grade} / ${data.max_score ?? 100}` : ', Not Graded'}</span>
                            :
                            <span className='text-xs md:text-sm'>{`Due ${moment.utc(data.deadline).startOf('minute').fromNow()}`}</span>}

                    </div>
                </div>
            </Link>
        </div >
    )
}

export default AssignmentRowStudent