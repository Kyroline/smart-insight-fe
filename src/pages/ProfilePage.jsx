import React, { useContext, useEffect, useState } from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import axiosInstance from '../lib/axios'
import { UserContext } from '../context/UserContext'
import { useAlert } from 'react-alert'

const ProfilePage = () => {
    const { user } = useContext(UserContext)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const alert = useAlert()

    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        setFirstname(user ? user.firstname : '')
        setLastname(user ? user.lastname : '')
        setEmail(user ? user.email : '')
    }, [user])

    const onClick = async () => {
        if (processing)
            return

        setProcessing(true)
        try {
            let response = await axiosInstance.put('v1/auth/users', { firstname: firstname, lastname: lastname, email: email, password: password, new_password: (newPassword == '' ? null : newPassword) })
            alert.success('Profile Saved')
            window.open('/home/my-profile')
        } catch (error) {
            console.log(error.response)
            alert.error(error.response.data.message)
        }
        setProcessing(false)
    }

    return (
        <div className="flex flex-col md:w-full p-2 md:p-4 rounded-md shadow-md bg-white">
            <h1 className='font-bold text:base md:text-xl mb-4'>My Profile</h1>
            <InputText
                className='mb-2'
                value={firstname}
                type='text'
                onChange={e => setFirstname(e.target.value)}
                label='Firstname'
                placeholder='John' />
            <InputText
                className='mb-2'
                value={lastname}
                type='text'
                onChange={e => setLastname(e.target.value)}
                label='Lastname'
                placeholder='Doe' />
            <InputText
                className='mb-2'
                value={email}
                type='email'
                onChange={e => setEmail(e.target.value)}
                label='Email'
                placeholder='your-email@mail.com' />
            <InputText
                className='mb-2'
                value={newPassword}
                type='password'
                onChange={e => setNewPassword(e.target.value)}
                label='Enter Your New Password (Optional)'
                placeholder='••••••••' />

            <InputText
                className='mt-4 mb-2'
                value={password}
                type='password'
                onChange={e => setPassword(e.target.value)}
                label='Enter Your Old Password'
                placeholder='••••••••' />

            <Button onClick={onClick} title='Save' />
        </div>
    )
}

export default ProfilePage