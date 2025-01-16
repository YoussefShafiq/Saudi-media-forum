import React from 'react'
import logo from '../../assets/images/logoAr.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Linkedin } from 'lucide-react'

export default function Footer() {
    const dots = Array.from({ length: 15 }, (_, index) => index + 1);

    return <>
        <div className="bg-primary font-madani text-white pt-20 pb-10 relative">
            <div className="flex justify-end  wow animate__fadeInDownBig">
                <div className="w-1/3 flex flex-col items-center">
                    <h2 className='text-center text-2xl font-bold'>
                        انضم إلى قائمتنا البريدية لتصلك أحدث الأخبار الحصرية من المنتدى السعودي للإعلام
                    </h2>
                </div>
                <div className="w-1/3">
                    <div className="m-auto w-2/3">
                        <img src={logo} className='w-full' alt="" />
                    </div>
                </div>
            </div>
            <div className="w-1/3 m-auto my-10  wow animate__fadeInUpBig">
                <form className='flex items-stretch space-x-5'>
                    <button className="block bg-secondary text-white text-sm font-madani h-14 px-5 rounded-xl hover:pointer shadow w-fit m-auto min-w-fit">اشترك الان</button>
                    <input type="text" placeholder='البريد الالكترونى' name='email' className='block text-end p-2 rounded-xl focus:outline-none h-14 w-full' />
                </form>
            </div>

            {/* seperator */}
            <div className="w-[90%] h-[1px] bg-white opacity-20 m-auto my-8"></div>

            {/* links */}
            <div className="flex space-x-44 py-5 m-auto w-fit  wow animate__fadeInUpBig">
                <div className="flex flex-col text-end text-sm">
                    <h3 className='font-bold text-xl mb-3'>روابط التواصل</h3>
                    <div class="py-2">
                        <a href="#" className='flex items-center flex-row-reverse gap-2'>
                            <div className="aspect-square h-8 text-xl flex items-center justify-center border-[1px] rounded-full"><FontAwesomeIcon icon={faWhatsapp} /></div>
                            <p>
                                +966535979563
                            </p>
                        </a>
                    </div>
                    <div class="py-2">
                        <a href="#" className='flex items-center flex-row-reverse gap-2'>
                            <div className="aspect-square h-8 text-xl flex items-center justify-center border-[1px] rounded-full"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <p>
                                info@saudimf.sa
                            </p>
                        </a>
                    </div>
                    <div class="py-2">
                        <a href="#" className='flex items-center flex-row-reverse gap-2'>
                            <div className="aspect-square h-8 text-xl flex items-center justify-center border-[1px] rounded-full"><FontAwesomeIcon icon={faLocationDot} /></div>
                            <p>
                                الرياض , المملكة العربية السعودية
                            </p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col text-end text-sm">
                    <h3 className='font-bold text-xl mb-3'>روابط سريعه</h3>
                    <div class="py-2">
                        <a href="#">الرئيسية</a>
                    </div>
                    <div class="py-2">
                        <a href="#">المعرض</a>
                    </div>
                    <div class="py-2">
                        <a href="#">جائزة المنتدى</a>
                    </div>
                    <div class="py-2">
                        <a href="#">المركز الإعلامي</a>
                    </div>
                    <div class="py-2">
                        <a href="#">المتحدثون</a>
                    </div>
                    <div class="py-2">
                        <a href="#">حول العالم</a>
                    </div>
                    <div class="py-2">
                        <a href="#">فعاليات السعودية</a>
                    </div>
                </div>
            </div>

            {/* social media */}
            <div className="flex justify-center items-center space-x-7 text-white text-2xl my-5  wow animate__fadeInUpBig">
                <Linkedin className='cursor-pointer' />
                <FontAwesomeIcon icon={faInstagram} className='cursor-pointer' />
                <FontAwesomeIcon icon={faXTwitter} className='cursor-pointer' />
                <FontAwesomeIcon icon={faFacebook} className='cursor-pointer' />
            </div>

            {/* seperator */}
            <div className="w-[65%] h-[1px] bg-white opacity-20 m-auto my-8"></div>

            <div className="flex justify-between w-[60%] m-auto ">
                <div className="flex gap-5">
                    <div className='cursor-pointer'>
                        الشروط والأحكام
                    </div>
                    <div className='cursor-pointer'>
                        سياسة الخصوصية
                    </div>
                </div>
                <div className='text-sm'>
                    جميع الحقوق محفوظة للمنتدى السعودي للإعلام 2025
                </div>
            </div>


            <div className="absolute w-20 bottom-28 right-2 flex flex-wrap gap-4 wow animate__fadeInDown">
                {dots.map((dot) => (
                    <div key={dot} className='w-3 h-3 bg-lemon rounded '></div>
                ))}
            </div>

            <div className="flex space-x-3 absolute bottom-28 left-10">
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
