import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import axiosInstance from '../../lib/axios'
import useSWR from 'swr'

const SubjectDetailPage = () => {
    const { id } = useParams()
    const { data: subject, error, isLoading } = useSWR(`v1/subjects/${id}`, url => axiosInstance(url).then((res) => res.data))

    if (!isLoading && !error)
        return (
            <>
                <div className='w-full min-h-60 flex bg-orange-600 flex-col justify-end p-2 bg-[url("https://news.yale.edu/sites/default/files/styles/featured_media/public/125235081-ynews.jpg?itok=a7hyfNyU&c=07307e7d6a991172b9f808eb83b18804")]'>
                    <h1 className='font-bold text-white text-3xl m-1 p-2 bg-gray-800 bg-opacity-50 w-fit'>{subject.data.name}</h1>
                    <h1 className='font-bold text-white text-xl m-1 p-2 bg-gray-800 bg-opacity-50 w-fit'>{subject.data.teacher.firstname} {subject.data.teacher.lastname}</h1>
                </div>
                <div className="flex flex-row justify-center my-4 border-b-2 bg-white shadow-lg">
                    <Link to={`/home/class/${id}/materials`}>
                        <div className="p-4 mr-4 border-transparent border-b-4 hover:border-orange-600 cursor-pointer">
                            Materials
                        </div>
                    </Link>
                    <Link to={`/home/class/${id}/assignments`}>
                        <div className="p-4 mr-4 border-transparent border-b-4 hover:border-orange-600 cursor-pointer">
                            Assignments
                        </div>
                    </Link>
                    <Link to={`/home/class/${id}/discussions`}>
                        <div className="p-4 border-transparent border-b-4 hover:border-orange-600 cursor-pointer">
                            Discussions
                        </div>
                    </Link>
                </div>
                <Outlet />
            </>
        )
    else
        return <h1>Now Loading</h1>
}

export default SubjectDetailPage