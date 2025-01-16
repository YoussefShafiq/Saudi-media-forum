import React from 'react'
import img from '../../assets/images/awards/step_into_future_1.svg'
import fomexlogo from '../../assets/images/heroLogo.svg'

export default function Fomex() {
    const dots = Array.from({ length: 25 }, (_, index) => index + 1);

    return <>
        <div className="bg-primary py-5 relative">
            <div className="h-[80vh] overflow-hidden flex items-center">
                <img src={img} alt="" className='w-full' />
            </div>
            <div className="py-8 flex flex-col items-center wow animate__fadeInUp">
                <div>
                    <img src={fomexlogo} alt="" />
                </div>
                <div className="font-madani text-white font-bold text-5xl my-5">
                    معرض (FOMEX) 2025 , انطلق نحو مستقبل الإعلام!
                </div>
                <div className="font-madani text-white opacity-80 text-xl my-5 w-1/2 text-center">
                    استعد لرحلة استثنائية إلى عالم التقنيات الحديثة في معرض Fomex ، أكبر معرض إعلامي متخصص بتقنيات الإعلام والإنتاج الرقمي في الشرق الأوسط.
                </div>
                <div className="bg-secondary text-white text-sm font-madani py-5 px-10 rounded-2xl hover:pointer shadow">
                    احجز مساحتك الآن
                </div>
            </div>
            <div className="absolute w-32 bottom-0 left-0 flex flex-wrap gap-4 wow animate__fadeInDown">
                {dots.map((dot) => (
                    <div key={dot} className='w-3 h-3 bg-lemon rounded '></div>
                ))}
            </div>
        </div>
    </>
}
