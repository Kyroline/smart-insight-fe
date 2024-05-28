import React, { useContext, useState } from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useAlert } from 'react-alert'

const RegisterPage = () => {
    const { setUser } = useContext(UserContext)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()
    const alert = useAlert()

    const submitRegister = async () => {
        try {
            let response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}v1/auth/register`, {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            })
            alert.success('Register succeess')
            sessionStorage.setItem('api_key', response.data.token)
            setUser(response.data.user)
            navigate('/home')
        } catch (error) {
            alert.error('Registration Error!')
        }
    }

    return (
        <section className="bg-[#ebebeb] dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your account
                        </h1>
                        <InputText
                            value={firstname}
                            type='text'
                            onChange={e => setFirstname(e.target.value)}
                            label='Firstname'
                            placeholder='John' />
                        <InputText
                            value={lastname}
                            type='text'
                            onChange={e => setLastname(e.target.value)}
                            label='Lastname'
                            placeholder='Doe' />
                        <InputText
                            value={email}
                            type='email'
                            onChange={e => setEmail(e.target.value)}
                            label='Email'
                            placeholder='your-email@mail.com' />
                        <InputText
                            value={password}
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                            label='Password'
                            placeholder='••••••••' />
                        <Button title='Register' onClick={submitRegister} />
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Sudah punya akun? <Link to='/login'><span className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage