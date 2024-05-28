import React from 'react'
import axiosInstance from '../../lib/axios'
import useSWR from 'swr'
import SubjectGrid from '../../components/Subject/SubjectGrid'

const EnrolledPage = () => {
    const { data: subject, error, isLoading } = useSWR('v1/subjects', url => axiosInstance.get(url).then(res => res.data))
    return (
        <>
            <div className="flex flex-wrap">
                {subject ? subject.data.filter(item => item.enrolled_class === true).map((item, index) => (
                    <SubjectGrid key={index} data={item} />
                )) : ''}
            </div>
        </>
    )
}

export default EnrolledPage