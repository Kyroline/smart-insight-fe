import React, { createContext, useState, useEffect } from 'react'
import axiosInstance from '../lib/axios.js'
import { useParams } from 'react-router-dom'

export const ClassContext = createContext()

export const ClassProvider = ({ children, classData }) => {
    const { id } = useParams()

    return (
        <ClassContext.Provider value={{ classData }}>
            {children}
        </ClassContext.Provider>
    )
}