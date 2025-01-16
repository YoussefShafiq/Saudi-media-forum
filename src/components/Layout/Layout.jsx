import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scrolling effect
        });
    }

    const [topDisplay, settopDisplay] = useState(false)


    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight / 3) { // If scroll is more than 100vh
            settopDisplay(true)
        } else {
            settopDisplay(false)
        }
    });


    return <>
        <div className="overflow-x-hidden">
            <Outlet></Outlet>
        </div>
        {topDisplay && <div id='scrollToTop' className="fixed flex w-14 h-14 justify-center items-center text-white bg-lightgreen p-4 rounded-full bottom-8 left-8 cursor-pointer wow animate__bounceInUp " onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} className='animate-swipeup' />
        </div>}
    </>
}
