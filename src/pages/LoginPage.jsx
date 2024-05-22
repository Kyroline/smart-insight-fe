import React, { useState } from 'react'
import InputText from '../components/InputText'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()

    const submitLogin = async () => {
        let response = await axios.post('http://192.168.0.116:3000/api/v1/auth/login', {
            email: email,
            password: password
        })
        sessionStorage.setItem('api_key', response.data.token)
        navigate('/home')
    }

    return (
        <section className="bg-[#ebebeb] dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login ke akun mu
                        </h1>
                        <InputText
                            value={email}
                            type='email'
                            onChange={e => setEmail(e.target.value)}
                            label='Email'
                            placeholder='emailkamu@mail.com' />
                        <InputText
                            value={password}
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                            label='Email'
                            placeholder='••••••••' />
                        <Button title='Sign in' onClick={submitLogin} />
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Belum punya akun? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage