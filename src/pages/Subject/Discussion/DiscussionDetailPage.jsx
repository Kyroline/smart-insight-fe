import React from 'react'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import DiscussionRow from '../../../components/Discussion/DiscussionRow'
import ReplyRow from '../../../components/Discussion/ReplyRow'
import axiosInstance from '../../../lib/axios'

const DiscussionDetailPage = () => {
    const { discussion_id: id } = useParams()

    const { data: discussion, error: discussionError, isLoading: discussionLoading } = useSWR(`v1/discussions/${id}`, url => axiosInstance.get(url).then(res => res.data))

    const { data: replies, error: repliesError, isLoading: repliesLoading } = useSWR(`v1/replies?discussion=${id}`, url => axiosInstance.get(url).then(res => res.data))

    return (
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    {discussion ? <DiscussionRow data={discussion.data} /> : null}
                    {replies ?
                        replies.data.map((reply, index) => (
                            <div className='rounded-3xl bg-white shadow-md p-4 mb-4'>
                                <ReplyRow discussionId={id} data={reply} level={0} />
                            </div>
                        )) : null}
                </div>
            </div>
    )
}

export default DiscussionDetailPage