import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../layouts/BaseLayout'
import HomePage from '../pages/HomePage'
import SubjectDetailPage from '../pages/Subject/SubjectDetailPage'
import SubjectPage from '../pages/Subject/SubjectPage'
import LoginPage from '../pages/LoginPage'
import SubjectMaterialPage from '../pages/Subject/Material/SubjectMaterialPage'
import SubjectDiscussionPage from '../pages/Subject/Discussion/SubjectDiscussionPage'
import DiscussionDetailPage from '../pages/Subject/Discussion/DiscussionDetailPage'
import NewDiscussionPage from '../pages/Subject/Discussion/NewDiscussionPage'

const Router = createBrowserRouter([
    {
        path: '/home',
        element: <BaseLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'class',
                element: <SubjectPage />
            },
            {
                path: 'class/:id',
                element: <SubjectDetailPage />,
                children: [
                    {
                        path: 'materials',
                        element: <SubjectMaterialPage />
                    },
                    {
                        path: 'assignments',
                        element: <SubjectMaterialPage />
                    },
                    {
                        path: 'discussions',
                        element: <SubjectDiscussionPage />
                    },
                    {
                        path: 'discussions/new',
                        element: <NewDiscussionPage />
                    },
                    {
                        path: 'discussions/:discussion_id',
                        element: <DiscussionDetailPage />
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])

export default Router