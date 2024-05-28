import React, { useContext } from 'react'
import { ClassContext } from '../../../context/ClassContext'
import useSWR from 'swr'
import { useNavigate, useParams } from 'react-router-dom'
import DiscussionRow from '../../../components/Discussion/DiscussionRow'
import ReplyRow from '../../../components/Discussion/ReplyRow'
import axiosInstance from '../../../lib/axios'
import InputText from '../../../components/InputText'
import { BsPlusLg } from 'react-icons/bs'
import DiscussionRowWithLink from '../../../components/Discussion/DiscussionRowWithLink'

const SubjectDiscussionPage = () => {
    const { classData } = useContext(ClassContext)
    const { id } = useParams()

    const navigate = useNavigate()

    const { data: discussions, error: discussionError, isLoading: discussionLoading, mutate } = useSWR(`v1/discussions?subject=${id}`, url => axiosInstance.get(url).then(res => res.data))

    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className='flex flex-row justify-between p-2 bg-white mb-4 items-center'>
                        <InputText className='shrink' />
                    </div>
                    {discussions ? discussions.data.map((discussion, index) => (
                        <DiscussionRowWithLink data={discussion} showLink={true} mutate={mutate} />
                    )) : null}
                </div>
            </div>
            <div onClick={() => navigate(`/home/class/${id}/discussions/new`)} className="h-12 w-12 sticky ml-auto bottom-0 right-0 shrink-0 flex flex-row p-2 rounded-full bg-orange-600 hover:bg-orange-800 cursor-pointer text-sm">
                <BsPlusLg className='h-8 w-8 md:h-8 md:w-8' color='white' />
            </div>
        </>
    )
}

export default SubjectDiscussionPage