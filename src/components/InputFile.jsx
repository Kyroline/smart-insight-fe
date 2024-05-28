import React from 'react'

export default ({ label, className, onChange }) => (
    <div className={className}>
        {label ? <label className="block mb-2 text-sm text-gray-900 dark:text-white">{label}</label> : ''}
        <input type="file" onChange={onChange} class="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-blue-600 file:hover:bg-blue-800 file:text-white rounded" />
        {/* <input
            value={value}
            onChange={onChange}
            type={type ?? 'text'}
            placeholder={placeholder ?? ''}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> */}
    </div>
)   