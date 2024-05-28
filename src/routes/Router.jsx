import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../layouts/BaseLayout'

import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'

import SubjectDetailPage from '../pages/Subject/SubjectDetailPage'
import SubjectPage from '../pages/Subject/SubjectPage'

import SubjectDiscussionPage from '../pages/Subject/Discussion/SubjectDiscussionPage'
import NewDiscussionPage from '../pages/Subject/Discussion/NewDiscussionPage'
import DiscussionDetailPage from '../pages/Subject/Discussion/DiscussionDetailPage'

import SubjectMaterialPage from '../pages/Subject/Material/SubjectMaterialPage'
import NewMaterialPage from '../pages/Subject/Material/NewMaterialPage'
import MaterialDetailPage from '../pages/Subject/Material/MaterialDetailPage'

import SubjectAssignmentPage from '../pages/Subject/Assignment/SubjectAssignmentPage'
import NewAssignmentPage from '../pages/Subject/Assignment/NewAssignmentPage'
import AssignmentDetailPage from '../pages/Subject/Assignment/AssignmentDetailPage'
import AgendaPage from '../pages/Agenda/AgendaPage'
import SubjectPeoplePage from '../pages/Subject/People/SubjectPeoplePage'
import TeachedPage from '../pages/Subject/TeachedPage'
import EnrolledPage from '../pages/Subject/EnrolledPage'

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
                path: 'my-agenda',
                element: <AgendaPage />
            },
            {
                path: 'my-class',
                element: <TeachedPage />
            },
            {
                path: 'enrolled-class',
                element: <EnrolledPage />
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
                        path: 'materials/new',
                        element: <NewMaterialPage />
                    },
                    {
                        path: 'materials/:material_id',
                        element: <MaterialDetailPage />
                    },
                    {
                        path: 'assignments',
                        element: <SubjectAssignmentPage />
                    },
                    {
                        path: 'assignments/new',
                        element: <NewAssignmentPage />
                    },
                    {
                        path: 'assignments/:assignment_id',
                        element: <AssignmentDetailPage />
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
                    },
                    {
                        path:'peoples',
                        element: <SubjectPeoplePage />
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    }
])

export default Router