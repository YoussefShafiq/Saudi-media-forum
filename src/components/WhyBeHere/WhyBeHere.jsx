import React from 'react'
import img1 from '../../assets/images/why_you_should_come/image_1.jpg'
import img2 from '../../assets/images/why_you_should_come/image_2.jpg'
import img3 from '../../assets/images/why_you_should_come/image_3.jpg'


export default function WhyBeHere() {
    return <>
        <div className="bg-arrows-pattern bg-primary">
            <div className="font-madani text-white pb-5 text-[40px] w-fit m-auto mb-16 leading-[60px] font-extrabold relative after:absolute after:contents'' after:h-2 after:w-1/2 after:bg-lemon after:rounded-2xl after:top-full after:left-1/2 after:-translate-x-1/2 after:translate-y-3 wow animate__fadeInDownBig ">
                ركائز المنتدى
            </div>
            <div className="flex md:flex-row flex-col md:justify-center md:items-center space-x-8 px-10 wow animate__fadeInUpBig">
                <div className="w-1/3 aspect-square ">
                    <img src={img1} className='w-full rounded-3xl object-cover' alt="" />
                    <div className="bg-lightgreen h-1/2 flex flex-col justify-center items-center w-4/5 relative bottom-0 -translate-y-1/2 m-auto text-center text-white font-madani p-5 rounded-3xl">
                        <h1 className='font-bold text-xl py-5'>
                            تواصل مع رواد الإعلام
                        </h1>
                        <p>
                            انضم إلى قادة الإعلام ورواد الأعمال الذين يقودون التحول الرقمي في القطاع. اغتنم الفرصة للتواصل مع الخبراء وبناء علاقات مهنية قيمة.
                        </p>
                    </div>
                </div>
                <div className="w-1/3 aspect-square ">
                    <img src={img2} className='w-full rounded-3xl object-cover' alt="" />
                    <div className="bg-lightgreen h-1/2 flex flex-col justify-center items-center w-4/5 relative bottom-0 -translate-y-1/2 m-auto text-center text-white font-madani p-5 rounded-3xl">
                        <h1 className='font-bold text-xl py-5'>
                            اكتساب معرفة
                        </h1>
                        <p>
                            شارك في جلسات حوارية وورش عمل يقودها نخبة من المتحدثين والخبراء العالميين. احصل على رؤى جديدة وأفكار مبتكرة تعزز من مهاراتك ومعرفتك.

                        </p>
                    </div>
                </div>
                <div className="w-1/3 aspect-square ">
                    <img src={img3} className='w-full rounded-3xl object-cover' alt="" />
                    <div className="bg-lightgreen h-1/2 flex flex-col justify-center items-center w-4/5 relative bottom-0 -translate-y-1/2 m-auto text-center text-white font-madani p-5 rounded-3xl">
                        <h1 className='font-bold text-xl py-5'>
                            استكشاف التكنولوجيا الحديثة
                        </h1>
                        <p>
                            اكتشف آخر ما توصلت إليه التكنولوجيا الإعلامية وأحدث الابتكارات الرقمية. كن في طليعة التطورات التي تعيد تشكيل مستقبل الإعلام.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
