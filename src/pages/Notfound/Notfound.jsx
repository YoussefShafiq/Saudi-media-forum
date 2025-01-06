import React from 'react'
import notfound from '../../assets/images/404 error with portals-rafiki.png'


export default function Notfound() {
    return <>
        <div className="h-screen w-full flex justify-center items-center">
            <img src={notfound} className='w-1/3 m-auto' alt="page not found" />
        </div>
    </>
}
