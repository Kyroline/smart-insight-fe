import React from 'react'
import axiosInstance from '../../lib/axios'
import useSWR from 'swr'
import AssignmentCalendar from '../../components/Calendar/AssignmentCalendar'
import FullAssignmentRow from '../../components/Calendar/FullAssignmentRow'

const AgendaPage = () => {
    const { data, error, isLoading } = useSWR('v1/assignments', url => axiosInstance.get(url).then(res => res.data))

    if (data && !isLoading)
        return (
            <div className="flex flex-col justify-center w-full">
                <AssignmentCalendar assignments={data.data} initialMonth={new Date().getMonth() + 1} initialYear={new Date().getFullYear()} />
                <div className="flex flex-col">
                    {data.data.map((assignment, index) => (
                        <FullAssignmentRow key={index} data={assignment} />
                    ))}
                </div>
            </div>
        )

    else
        return (
            <div className="">loading . . .</div>
        )
}

export default AgendaPage