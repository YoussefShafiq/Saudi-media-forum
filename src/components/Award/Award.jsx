import React from 'react'
import img1 from '../../assets/images/awards/image_1.webp'
import img2 from '../../assets/images/awards/image_2.webp'
import img3 from '../../assets/images/awards/image_3.webp'
import frame from '../../assets/images/awards/frame.svg'
import stars from '../../assets/images/stars.svg'

export default function Award() {
    return <>
        <div className="bg-primary py-24 font-madani relative overflow-hidden">
            {/* header */}
            <div className="absolute top-20 end-0">
                <img src={stars} alt="" />
            </div>
            <div className="m-auto w-2/3 text-center wow animate__fadeInRight text-white">
                <h1 className='text-5xl font-bold mb-5'>
                    جائزة المنتدى السعودي للإعلام 2025
                </h1>
                <h2 className='text-2xl text-white opacity-80'>
                    جائزة المنتدى السعودي للإعلام تُكرّم وتتوج المبدعين والمتميزين في صناعة المحتوى الإعلامي؛ تهدف إلى تعزيز الإبداع والابتكار في مجالات الإعلام المختلفة،
                </h2>
            </div>
            {/* items */}
            <div className="flex">
                {/* leftside */}
                <div className="w-1/2 flex space-x-8 overflow-hidden ">
                    <div className="w-1/2 flex flex-col justify-center items-end ">
                        <div className="w-16 h-16 bg-lemon rounded-2xl wow animate__fadeInDownBig"></div>
                        <div className="w-[40%] aspect-square rounded-[35px] overflow-hidden me-[25%] mb-4  wow animate__fadeInLeftBig">
                            <img src={img1} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="w-[45%] aspect-square rounded-[35px] overflow-hidden  wow animate__fadeInLeftBig">
                            <img src={img2} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center  ">
                        <div className="w-16 h-16 relative start-16 bg-lightgreen rounded-2xl mb-10  wow animate__fadeInDownBig"></div>
                        <div className="w-14 h-14 relative start-0 bg-lightgreen rounded-2xl mb-5  wow animate__fadeInDownBig"></div>
                        <div className="w-[80%] aspect-square rounded-[40px] overflow-hidden m-auto wow animate__fadeInRightBig ">
                            <img src={img3} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>

                </div>
                {/* rightside */}
                <div className="w-1/2 flex items-center justify-center flex-wrap p-10 space-x-0 ">
                    <div className="w-1/2 relative p-2">
                        <img src={frame} alt="" />
                        <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center text-white text-[10px] text-center p-2">
                            <h2 className='text-sm font-semibold mb-2'>
                                التواصل و العلاقات العامة
                            </h2>
                            <p>
                                تتويج افضل الحملات الإعلانية المتكاملة علي مستوى القطاع الحكومي والقطاع الخاص
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 relative p-2">
                        <img src={frame} alt="" />
                        <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center text-white text-[10px] text-center p-2">
                            <h2 className='text-sm font-semibold mb-2'>
                                التواصل و العلاقات العامة
                            </h2>
                            <p>
                                تتويج افضل الحملات الإعلانية المتكاملة علي مستوى القطاع الحكومي والقطاع الخاص
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 relative p-2">
                        <img src={frame} alt="" />
                        <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center text-white text-[10px] text-center p-2">
                            <h2 className='text-sm font-semibold mb-2'>
                                التواصل و العلاقات العامة
                            </h2>
                            <p>
                                تتويج افضل الحملات الإعلانية المتكاملة علي مستوى القطاع الحكومي والقطاع الخاص
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 relative p-2">
                        <img src={frame} alt="" />
                        <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center text-white text-[10px] text-center p-2">
                            <h2 className='text-sm font-semibold mb-2'>
                                التواصل و العلاقات العامة
                            </h2>
                            <p>
                                تتويج افضل الحملات الإعلانية المتكاملة علي مستوى القطاع الحكومي والقطاع الخاص
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-white text-sm font-madani py-5 px-10 rounded-2xl hover:pointer shadow mt-5 w-fit m-auto wow animate__fadeInUpBig">
                اعرف المزيد
            </div>
        </div>
    </>
}
