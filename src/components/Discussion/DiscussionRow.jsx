import React, { useEffect, useState } from 'react'
import { BiComment } from "react-icons/bi"
import { BsHeart, BsHeartbreak, BsShare } from "react-icons/bs";
import { Link } from 'react-router-dom';
import TextArea from '../TextArea';
import Button from '../Button';
import axiosInstance from '../../lib/axios';
import moment from 'moment';

const DiscussionRow = ({ data, showLink }) => {
    const [showInput, setShowInput] = useState(false)
    const [comment, setComment] = useState('')

    useEffect(() => {
        setComment('')
    }, [showInput])

    const submitReply = async () => {
        try {
            let response = await axiosInstance.post('v1/replies', {
                discussion_id: data._id,
                content: comment
            })
        } catch (error) {

        }
        setShowInput(false)
    }

    return (
        <div className='flex flex-col bg-white py-4 px-4 md:px-8 mb-4 rounded-3xl shadow-md'>
            <div className='flex flex-row w-full h-12 items-center'>
                <div className='w-8 h-8 mr-4'>
                    <img src="/media/image/user.png" alt="" />
                </div>
                <h1>{data.user.firstname} {data.user.lastname}</h1>
                <span className='ml-2'>•</span>
                <span className='ml-2 text-sm'>{data.created_at ? moment(data.created_at).startOf('day').fromNow() : ''}</span>
                <div className='min-w-4 min-h-4 ml-4 p-2 rounded-full bg-orange-600 text-white'>
                    <h2 className='text-xs'>{data.subject.name}</h2>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className='font-bold text-xl mb-2'>{data.title}</h1>
                <p className='text-medium text-sm mb-2'>{data.content}</p>
            </div>
            <div className="flex flex-row">
                <div className="min-h-8 min-w-16 flex flex-row justify-between items-center mr-2 bg-gray-200 rounded-full">
                    <span className='cursor-pointer h-8 w-8 p-2 mr-1 flex items-center justify-center hover:bg-gray-300 rounded-full'>
                        <BsHeart size={'16'} />
                    </span>
                    <span className='mr-1 cursor-default text-sm'>{data.like}</span>
                    <span className='cursor-pointer h-8 w-8 p-2 flex items-center justify-center hover:bg-gray-300 rounded-full'>
                        <BsHeartbreak size={'16'} />
                    </span>
                </div>
                <div onClick={() => setShowInput(prev => !prev)} className="cursor-pointer h-8 w-16 flex flex-row justify-center items-center mr-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                    <BiComment className='mr-2' size={'16'} />
                    <span className=' text-sm'>{data.replyCount}</span>
                </div>
                <div className="cursor-pointer h-8 min-w-16 px-2 flex flex-row justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-full">
                    <BsShare className='mr-2' size={'16'} />
                    <span className=' text-sm'>Share</span>
                </div>
            </div>
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
        </div>
    )
}

export default DiscussionRow