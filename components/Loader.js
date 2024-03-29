import React from 'react'
import { TailSpin } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className='w-full flex-row min-h-full h-screen flex items-center justify-center' >
            <TailSpin
                height="50"
                width="50"
                color="orange"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
           
        </div>
    )
}
