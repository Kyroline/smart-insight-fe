import React, { useEffect, useState } from 'react'
import { BiComment } from "react-icons/bi"
import { BsHeart, BsHeartbreak, BsShare, BsHeartFill, BsHeartbreakFill, BsArrowLeft, BsChevronLeft } from "react-icons/bs";
import TextArea from '../TextArea';
import Button from '../Button';
import axiosInstance from '../../lib/axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const DiscussionRow = ({ data, showLink, mutate, replyMutate }) => {
    const navigate = useNavigate()
    const [showInput, setShowInput] = useState(false)
    const [comment, setComment] = useState('')
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        setComment('')
    }, [showInput])

    const handleScore = async (val) => {
        if (processing)
            return
        try {
            setProcessing(true)
            let response = await axiosInstance.post(`v1/discussions/${data._id}/score`, {
                score: val
            })
            mutate()
        } catch (error) {

        }
        setProcessing(false)
    }

    const deleteScore = async () => {
        if (processing)
            return
        try {
            setProcessing(true)
            let response = await axiosInstance.delete(`v1/discussions/${data._id}/score`)
            mutate()
        } catch (error) {

        }
        setProcessing(false)
    }

    const submitReply = async () => {
        if (processing)
            return
        setProcessing(true)
        try {
            let response = await axiosInstance.post('v1/replies', {
                discussion_id: data._id,
                content: comment
            })
            replyMutate()
            mutate()
        } catch (error) {

        }
        setShowInput(false)
        setProcessing(false)
    }

    return (
        <div className='flex flex-col bg-white py-2 px-4 md:px-8 mb-4 rounded-3xl shadow-md'>
            <div className='flex flex-row w-full h-12 items-center'>
                <div className="w-6 h-6 md:w-8 md:h-8 mr-2 flex justify-center items-center hover:bg-gray-200 rounded-full" onClick={() => navigate(-1)}>
                    <BsChevronLeft />
                </div>
                <div className='w-8 h-8 mr-4'>
                    <img src="/media/image/user.png" alt="" />
                </div>
                <h1 className='text-xs md:text-base'>{data.user.firstname} {data.user.lastname}</h1>
                <span className='ml-1 md:ml-2'>•</span>
                <span className='ml-1 md:ml-2 text-xs md:text-sm min-w-20'>{data.created_at ? moment.utc(data.created_at).startOf('minute').fromNow() : ''}</span>
                {/* <div className='min-w-4 min-h-4 ml-4 p-2 rounded-full bg-orange-600 text-white'>
                    <h2 className='text-xs'>{data.subject.name}</h2>
                </div> */}
            </div>
            <div className="flex flex-col">
                <h1 className='font-bold text-lg md:text-xl mb-2'>{data.title}</h1>
                <p className='text-medium text-xs md:text-sm mb-2 text-justify'>{data.content}</p>
            </div>
            <div className="flex flex-row">
                <div className="min-h-8 min-w-16 flex flex-row justify-between items-center mr-2 bg-gray-200 rounded-full">
                    {data.userScore == 1 ? (
                        <span onClick={deleteScore} className='cursor-pointer h-8 w-8 p-2 mr-1 flex items-center justify-center hover:bg-gray-300 rounded-full'>
                            <BsHeartFill size={'16'} color='#2563eb' />
                        </span>
                    ) : (
                        <span onClick={() => handleScore(1)} className='cursor-pointer h-8 w-8 p-2 mr-1 flex items-center justify-center hover:bg-gray-300 rounded-full'>
                            <BsHeart size={'16'} color='#2563eb' />
                        </span>
                    )}
                    <span className='mr-1 cursor-default text-sm'>{data.score}</span>
                    {data.userScore == -1 ? (
                        <span onClick={deleteScore} className='cursor-pointer h-8 w-8 p-2 flex items-center justify-center hover:bg-gray-300 rounded-full'>
                            <BsHeartbreakFill size={'16'} color='#da2829' />
                        </span>
                    ) : (
                        <span onClick={() => handleScore(-1)} className='cursor-pointer h-8 w-8 p-2 flex items-center justify-center hover:bg-gray-300 rounded-full'>
                            <BsHeartbreak size={'16'} color='#da2829' />
                        </span>
                    )}
                </div>
                <div onClick={() => setShowInput(prev => !prev)} className="cursor-pointer h-8 min-w-16 px-2 flex flex-row justify-center items-center mr-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                    <BiComment className='mr-2' size={'16'} />
                    <span className=' text-sm'>{data.replyCount} Replies</span>
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