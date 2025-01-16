import React from 'react'
import videoBg from '../../assets/videos/NoOutro.mp4'
import Navbar from '../Navbar/Navbar'
import HeroStats from '../HeroStats/HeroStats'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Linkedin } from 'lucide-react'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function HeroSec() {
    return <>
        <div className="relative bg-blue">
            <video
                src={videoBg}
                loop
                muted
                autoPlay
                className='absolute inset-0 -z-10 w-full h-full object-cover '
            >
            </video>
            <div className="inset-0 h-full w-full bg-[#0b2926] bg-opacity-70">
                <Navbar />
                <div className="py-32 flex flex-col items-center justify-center">
                    <div className="text-center transform transition-all wow animate__slideInUp ">
                        <h1 className="font-madani text-white text-6xl font-bold ">الإعلام</h1>
                        <h1 className="font-madani text-white text-6xl font-bold leading-relaxed">في عالم يتشكل</h1>
                        <div className="flex items-center justify-center space-x-9 my-6">
                            <button className="w-48 outline outline-1 py-4 text-white font-madani rounded-xl ">سجل الآن</button>
                            <button className="w-48 bg-secondary outline outline-1 outline-secondary py-4 text-white font-madani rounded-xl ">احجز مساجتك الآن</button>
                        </div>
                        <div className="flex justify-center items-center space-x-7 text-white text-2xl my-5">
                            <Linkedin className='cursor-pointer' />
                            <FontAwesomeIcon icon={faInstagram} className='cursor-pointer' />
                            <FontAwesomeIcon icon={faXTwitter} className='cursor-pointer' />
                            <FontAwesomeIcon icon={faFacebook} className='cursor-pointer' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-16 px-20 w-full">
                        <div className="flex flex-col items-center justify-center bg-primary bg-opacity-80 w-1/5 h-full py-8 rounded-3xl font-madani text-white wow animate__fadeInLeft animate__delay-1s">
                            <FontAwesomeIcon icon={faLocationDot} className='text-3xl text-lemon mb-3' />
                            <p className="text-xl">19 - 21 فبراير,</p>
                            <p className="">2025</p>
                        </div>
                        <div className="flex items-center justify-center space-x-8 bg-primary bg-opacity-80 w-1/5 h-full py-11 rounded-3xl font-madani text-white wow animate__fadeInDown animate__delay-1s">
                            <div className="flex flex-col justify-center items-center ">
                                <div className="text-3xl font-extrabold ">44</div>
                                <div className="text-xl">يوم</div>
                            </div>
                            <div className="flex items-center justify-center text-4xl leading-10">
                                <p className='font-bold'>:</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-3xl font-extrabold">14</div>
                                <div className="text-xl">ساعة</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-primary bg-opacity-80 w-1/5 h-full py-8 rounded-3xl font-madani text-white wow animate__fadeInRight animate__delay-1s">
                            <FontAwesomeIcon icon={faClock} className='text-3xl text-lemon mb-3' />
                            <p className="text-xl">الرياض,</p>
                            <p className="">المملكة العربية السعودية</p>
                        </div>
                    </div>
                </div>
                <HeroStats />
            </div>
        </div>
    </>
}
