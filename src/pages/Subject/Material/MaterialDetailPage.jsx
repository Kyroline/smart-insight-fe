import React from 'react'
import { useParams } from 'react-router-dom'
import MaterialDetail from '../../../components/Material/MaterialDetail'
import useSWR from 'swr'
import axiosInstance from '../../../lib/axios'

const MaterialDetailPage = () => {
    const { material_id } = useParams()

    const { data, error, isLoading } = useSWR(`v1/materials/${material_id}`, url => axiosInstance.get(url).then(res => res.data))
    if (data)
        return (
            <>
                <MaterialDetail materialData={data.data} />
            </>
        )
}

export default MaterialDetailPage