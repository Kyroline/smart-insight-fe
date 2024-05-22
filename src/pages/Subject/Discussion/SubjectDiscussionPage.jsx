import React from 'react'
import useSWR from 'swr'
import { useNavigate, useParams } from 'react-router-dom'
import DiscussionRow from '../../../components/Discussion/DiscussionRow'
import ReplyRow from '../../../components/Discussion/ReplyRow'
import axiosInstance from '../../../lib/axios'
import InputText from '../../../components/InputText'
import { BsPlusLg } from 'react-icons/bs'
import DiscussionRowWithLink from '../../../components/Discussion/DiscussionRowWithLink'

const SubjectDiscussionPage = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const { data: discussions, error: discussionError, isLoading: discussionLoading, mutate } = useSWR(`v1/discussions?subject=${id}`, url => axiosInstance.get(url).then(res => res.data))

    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className='flex flex-row justify-between p-2 bg-white mb-4 items-center'>
                        <InputText className='shrink' />
                        <div onClick={() => navigate(`/home/class/${id}/discussions/new`)} className="shrink-0 flex flex-row p-2 rounded-full hover:bg-gray-200 cursor-pointer text-sm">
                            <BsPlusLg className='mr-2 h-4 w-4 md:h-5 md:w-5' />
                            <span className='text-xs md:text-sm'>New Discussion</span>
                        </div>
                    </div>
                    {discussions ? discussions.data.map((discussion, index) => (
                        <DiscussionRowWithLink data={discussion} showLink={true} mutate={mutate} />
                    )) : null}
                </div>
            </div>
        </>
    )
}

export default SubjectDiscussionPage