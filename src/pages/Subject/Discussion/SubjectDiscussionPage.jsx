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

    const { data: discussions, error: discussionError, isLoading: discussionLoading } = useSWR(`v1/discussions?subject=${id}`, url => axiosInstance.get(url).then(res => res.data))

    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className='flex flex-row justify-between p-2 bg-white mb-4 items-center'>
                        <InputText />
                        <div onClick={() => navigate(`/home/class/${id}/discussions/new`)} className="flex flex-row p-2 rounded-full hover:bg-gray-200 cursor-pointer text-sm">
                            <BsPlusLg className='mr-2' size={20} />
                            <span>New Discussion</span>
                        </div>
                    </div>
                    {discussions ? discussions.data.map((discussion, index) => (
                        <DiscussionRowWithLink data={discussion} showLink={true} />
                    )) : null}
                </div>
            </div>
        </>
    )
}

export default SubjectDiscussionPage