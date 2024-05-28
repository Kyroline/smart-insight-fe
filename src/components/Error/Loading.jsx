import React from 'react'

const Loading = () => {
    return (
        <div class='flex flex-grow space-x-2 justify-center items-center h-full '>
            <span class='sr-only'>Loading...</span>
            <div class='h-8 w-8 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div class='h-8 w-8 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div class='h-8 w-8 bg-gray-400 rounded-full animate-bounce'></div>
        </div>
    )
}

export default Loading