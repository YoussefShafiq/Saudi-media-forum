import React from 'react'
import img1 from '../../assets/images/Rakaez1.webp'
import img2 from '../../assets/images/Rakaez2.webp'
import img3 from '../../assets/images/Rakaez3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function RakaezMontada() {
    const dots = Array.from({ length: 90 }, (_, index) => index + 1);

    return <>
        <div className="bg-primary px-20">
            <div className="font-madani text-white text-[40px] w-fit m-auto mb-16 leading-[60px] font-extrabold relative after:absolute after:contents'' after:h-2 after:w-1/2 after:bg-lemon after:rounded-2xl after:top-full after:left-1/2 after:-translate-x-1/2 after:translate-y-3 wow animate__fadeInDown ">
                ركائز المنتدى
            </div>
            <div className="flex flex-col space-y-8 bg-lightgreen bg-opacity-15 rounded-3xl p-8">
                {/* row */}
                <div className="flex items-center justify-end space-x-3 ">
                    <div className="w-3/5">
                        <p className='font-madani font-bold text-white text-2xl text-right wow animate__fadeInLeft'>
                            التحديات العالمية في قطاع الإعلام من خلال استكشاف أبرز القضايا التي تواجه الصناعة الإعلامية وكيفية التعامل معها في ظل التحولات المتسارعة</p>
                    </div>
                    {/* image */}
                    <div className="relative w-1/5 aspect-square  flex items-center justify-center ">
                        <div className="absolute ms-24 w-1/2 h-full overflow-hidden right-0 flex justify-end flex-wrap gap-3 wow animate__fadeInRight ">
                            {dots.map((dot) => (
                                <div key={dot} className='w-[9px] h-[9px] bg-lightgreen rounded opacity-25 '></div>
                            ))}
                        </div>
                        <div className="z-10 h-[90%] wow animate__fadeInRight">
                            <img src={img2} alt="" className='h-full' />
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="flex items-center justify-end space-x-3">
                    <div className="w-3/5">
                        <p className='font-madani font-bold text-white text-2xl text-right wow animate__fadeInLeft'>
                            اقتصاد الإعلام الحديث عبر تحليل ديناميكيات الاقتصاد الإعلامي واستراتيجيات النمو والاستدامة في بيئة رقمية متطورة
                        </p>
                    </div>
                    {/* image */}
                    <div className="relative w-1/5 aspect-square  flex items-center justify-center ">
                        <div className="absolute ms-24 w-1/2 h-full overflow-hidden right-0 flex justify-end flex-wrap gap-3 wow animate__fadeInRight ">
                            {dots.map((dot) => (
                                <div key={dot} className='w-[9px] h-[9px] bg-lightgreen rounded opacity-25 '></div>
                            ))}
                        </div>
                        <div className="z-10 h-[90%] wow animate__fadeInRight">
                            <img src={img1} alt="" className='h-full' />
                        </div>
                    </div>
                    <div className="w-1/5"></div>

                </div>
                {/* row */}
                <div className="flex items-center justify-end space-x-3">
                    <div className="w-3/5">
                        <p className='font-madani font-bold text-white text-2xl text-right wow animate__fadeInLeft'>
                            مستقبل الإعلام وتنمية المواهب باستشراف ملامح الإعلام المستقبلي ودور الكفاءات المبدعة في إعادة تشكيل المشهد الإعلامي
                        </p>
                    </div>
                    {/* image */}
                    <div className="relative w-1/5 aspect-square  flex items-center justify-center ">
                        <div className="absolute ms-24 w-1/2 h-full overflow-hidden right-0 flex justify-end flex-wrap gap-3 wow animate__fadeInRight ">
                            {dots.map((dot) => (
                                <div key={dot} className='w-[9px] h-[9px] bg-lightgreen rounded opacity-25 '></div>
                            ))}
                        </div>
                        <div className="z-10 h-[90%] wow animate__fadeInRight">
                            <img src={img3} alt="" className='h-full' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-3 py-10 bottom-5 justify-end me-40">
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
