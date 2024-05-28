import React from 'react'
import axiosInstance from '../../lib/axios'
import useSWR from 'swr'
import SubjectGrid from '../../components/Subject/SubjectGrid'
import Loading from '../../components/Error/Loading'
import NoItem from '../../components/Error/NoItem'
import { data } from 'autoprefixer'

const TeachedPage = () => {
    const { data: subject, error, isLoading } = useSWR('v1/subjects', url => axiosInstance.get(url).then(res => res.data))
    
    if (isLoading)
        return (
            <Loading />
        )

    if (data.length < 1)
        return (
            <NoItem />
        )

    return (
        <>
            <div className="flex flex-wrap">
            {subject ? subject.data.filter(item => item.teached_class === true).map((item, index) => (
                    <SubjectGrid key={index} data={item} />
                )) : ''}
            </div>
        </>
    )
}

export default TeachedPage