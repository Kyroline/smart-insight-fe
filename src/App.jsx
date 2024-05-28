import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import { ModalProvider } from './components/Modal/ModalProvider'
import { UserProvider } from './context/UserContext'

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

function App() {
    return (
        <AlertProvider template={AlertTemplate} {...options}>
            <UserProvider>
                <ModalProvider>
                    <RouterProvider router={Router} />
                </ModalProvider>
            </UserProvider>
        </AlertProvider>
    )
}

export default App
