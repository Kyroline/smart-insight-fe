import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../layouts/BaseLayout'

const Router = createBrowserRouter([
    {
        path: '',
        element: <BaseLayout />
    }
])

export default Router