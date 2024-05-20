import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { BiDislike, BiComment } from "react-icons/bi"
import { BsHeart, BsHeartbreak } from "react-icons/bs"
import TextArea from '../TextArea'
import Button from '../Button'
import axiosInstance from '../../lib/axios'
import moment from 'moment'

const ReplyRow = ({ discussionId, data, level }) => {
    const { data: replies, error: repliesError, isLoading: repliesLoading } = useSWR(`http://localhost:3000/api/v1/replies?discussion=${discussionId}&parent=${data._id}`, url => axiosInstance.get(url).then(res => res.data))

    const [showInput, setShowInput] = useState(false)
    const [comment, setComment] = useState('')

    useEffect(() => {
        setComment('')
    }, [showInput])

    const submitReply = async () => {
        try {
            let response = await axiosInstance.post('v1/replies', {
                discussion_id: discussionId,
                parent_id: data._id,
                content: comment
            })
        } catch (error) {

        }
        setShowInput(false)
    }

    return (
        <div className='flex flex-col bg-white pl-[32px] border-gray-400'>
            <div className='flex flex-row w-full h-12 items-center'>
                <div className='w-8 h-8 mr-4'>
                    <img src="/media/image/user.png" alt="" />
                </div>
                <h1>{data.user.firstname} {data.user.lastname}</h1>
                <span className='ml-2'>•</span>
                <span className='ml-2 text-sm'>{data.created_at ? moment(data.created_at).startOf('day').fromNow() : ''}</span>
            </div>
            <div className="flex flex-col">
                <p className='text-medium text-sm mb-2'>{data.content}</p>
            </div>
            <div className="flex flex-row mb-2">
                <div className="min-h-8 min-w-16 flex flex-row justify-between items-center mr-4 bg-gray-200 rounded-full">
                    <span className='cursor-pointer h-8 w-8 p-2 mr-1 flex items-center justify-center hover:bg-gray-300 rounded-full'>
                        <BsHeart size={'16'} />
                    </span>
                    <span className='mr-1 text-sm'>{data.like}</span>
                    <span className='cursor-pointer h-8 w-8 p-2 flex items-center justify-center hover:bg-gray-300 rounded-full'>
                        <BsHeartbreak size={'16'} />
                    </span>
                </div>
                <div onClick={() => setShowInput(prev => !prev)} className="cursor-pointer h-8 min-w-16 flex flex-row justify-center items-center px-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                    <BiComment className='h-8 mr-2' size={'16'} />
                    <span className=' text-sm'>Reply</span>
                </div>
            </div>
            <div className='border-b-2'></div>
            {showInput ? (
                <div className="flex flex-col mt-4">
                    <TextArea
                        className='mb-2'
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <div className="flex flex-row">
                        <Button
                            className='max-w-40 mr-4'
                            title='Cancel'
                            onClick={() => setShowInput(false)} />
                        <Button
                            className='max-w-40'
                            title='Post'
                            onClick={submitReply} />
                    </div>
                </div>
            ) : null}
            {replies && replies.data.length > 0 ? replies.data.map((reply, index) => (
                <ReplyRow discussionId={discussionId} data={reply} level={level + 1} />
            )) : null}
        </div>
    )
}

export default ReplyRow