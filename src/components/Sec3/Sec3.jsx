import React from 'react'
import leftimage from '../../assets/images/image.webp'
import rightsmall from '../../assets/images/Sec3small.webp'
import rightbig from '../../assets/images/Sec3big.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Sec3() {
    const dots = Array.from({ length: 36 }, (_, index) => index + 1);


    return <>
        <div className="flex flex-wrap w-full bg-primary py-5 px-10 relative">
            {/* left side */}
            <div className="w-3/5 relative">
                {/* dots */}
                <div className="absolute w-40 top-5 left-5 flex flex-wrap gap-3 wow animate__fadeInDown animate__delay-1s">
                    {dots.map((dot) => (
                        <div key={dot} className='w-4 h-4 bg-lemon rounded '></div>
                    ))}
                </div>
                <img src={leftimage} alt="" className='w-5/6 top-24 left-24 rounded-2xl wow animate__fadeInLeft absolute' />
                <div className="flex space-x-3 absolute -bottom-5 left-1/4">
                    <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                    <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                    <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                    <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                    <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                    <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                </div>
            </div>
            {/* right side */}
            <div className="w-2/5 relative pt-24 flex flex-col space-y-10">
                <div className="wow animate__fadeInDown"><img src={rightsmall} alt="" /></div>
                <div className="flex justify-center wow animate__fadeInRight"><img src={rightbig} alt="" className='rounded-2xl w-4/5' /></div>
            </div>
            <div className="relative bg-lightgreen w-1/3 rounded-3xl m-auto p-5 py-14 font-extrabold bottom-24 wow animate__fadeInUp">
                <h2 className='font-madani pb-10 px-5 leading-[50px] text-center text-white text-4xl' >المنتدى السعودي للإعلام 2025</h2>
                <p className='font-madani text-white text-center ' >منصة الابتكار، التأثير، والمستقبل الإعلامي</p>
            </div>
            <div className="flex space-x-3 absolute bottom-5 left-[10%] ">
                <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
                <FontAwesomeIcon icon={faChevronRight} className='text-lemon text-4xl' />
            </div>
        </div>
    </>
}
