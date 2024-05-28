import React, { useContext } from 'react'
import { ClassContext } from '../../../context/ClassContext'
import InputText from '../../../components/InputText'
import { useNavigate } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import useSWR from 'swr'
import axiosInstance from '../../../lib/axios'
import MaterialRow from '../../../components/Material/MaterialRow'

const SubjectMaterialPage = () => {
    const {classData} = useContext(ClassContext)
    const { id } = useParams()

    const navigate = useNavigate()

    const { data, error, isLoading } = useSWR(`v1/materials?subject=${id}`, url => axiosInstance.get(url).then(res => res.data))

    return (
        <>
            <div className="flex flex-col justify-center">
                <div className='flex flex-row justify-between p-2 bg-white mb-4 items-center shadow-md'>
                    <InputText className='shrink' />
                </div>
                {!isLoading && data && data.data.length > 0 ?
                    data.data.map((material, index) => (
                        <MaterialRow key={index} data={material} />
                    ))
                    : ''}
            </div>
            {classData.teached_class ?
                <div onClick={() => navigate(`/home/class/${id}/materials/new`)} className="h-12 w-12 sticky ml-auto bottom-0 right-0 shrink-0 flex flex-row p-2 rounded-full bg-orange-600 hover:bg-orange-800 cursor-pointer text-sm">
                    <BsPlusLg className='h-8 w-8 md:h-8 md:w-8' color='white' />
                </div>
                : null}
        </>
    )
}

export default SubjectMaterialPage