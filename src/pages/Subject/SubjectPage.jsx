import React from 'react'
import axiosInstance from '../../lib/axios'
import useSWR from 'swr'
import SubjectGrid from '../../components/Subject/SubjectGrid'

const SubjectPage = () => {
    const { data: subject, error, isLoading } = useSWR('http://localhost:3000/api/v1/subjects', url => axiosInstance.get(url).then(res => res.data))
    return (
        <>
            <div className="flex flex-wrap">
                {subject ? subject.data.map((item, index) => (
                    <SubjectGrid data={item} />
                )) : ''}
            </div>
        </>
    )
}

export default SubjectPage