import React, { useContext, useState } from 'react'
import moment from 'moment'
import { ClassContext } from '../../../context/ClassContext'
import useSWR from 'swr'
import axiosInstance from '../../../lib/axios'
import { useNavigate, useParams } from 'react-router-dom'
import AssignmentDetail from '../../../components/Assignment/AssignmentDetail'
import MySubmission from '../../../components/Assignment/MySubmission'
import SubmissionList from '../../../components/Assignment/SubmissionList'
import SubmissionDetail from '../../../components/Assignment/SubmissionDetail'

const AssignmentDetailPage = () => {
    const { classData } = useContext(ClassContext)
    const { assignment_id } = useParams()
    const navigate = useNavigate()

    if (classData.teached_class) {
        const [selectedSub, setSelectedSub] = useState(null)
        const { data, error, isLoading } = useSWR(`v1/assignments/${assignment_id}/teachers`, url => axiosInstance.get(url).then(res => res.data))
        if (isLoading)
            return

        const onSubmisisonClick = (id) => {
            setSelectedSub(id)
        }


        return (
            <>
                <AssignmentDetail assignmentData={data.data} />
                <SubmissionList onSubmissionClick={onSubmisisonClick} submissionData={data.data.submissions} />
                {selectedSub ? <SubmissionDetail maxScore={data.data.max_score} submissionId={selectedSub} /> : ''}
            </>
        )
    }

    if (classData.enrolled_class) {
        const { data, error, isLoading, mutate } = useSWR(`v1/assignments/${assignment_id}/students`, url => axiosInstance.get(url).then(res => res.data))
        if (isLoading)
            return

        return (
            <>
                <AssignmentDetail assignmentData={data.data} />
                <MySubmission submissionData={data.data.submission} assignmentMutate={mutate} />
            </>
        )
    }

    return (
        <div className="">AAA</div>
    )
}

export default AssignmentDetailPage