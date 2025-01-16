import React from 'react'
import img from '../../assets/images/take_part.webp'

export default function BePart() {
    const dots = Array.from({ length: 6 }, (_, index) => index + 1);

    return <>
        <div className="flex md:flex-row flex-col bg-primary font-madani text-white relative">
            <div className="w-full md:w-1/2 flex justify-start">
                <div className="w-1/4 h-full rounded-r-[80px] bg-arrows-pattern absolute left-0"></div>
                <div className="h-full w-3/5 bg-lightgreen rounded-r-[80px] relative wow animate__fadeInDownBig ">
                    <div className="h-full w-full absolute flex justify-end items-center left-1/2">
                        <div className="w-[130%] absolute aspect-square rounded-[40px] overflow-hidden wow animate__fadeInLeftBig "><img src={img} className='w-full h-full object-cover' alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 flex-col justify-center items-end py-64 px-14 wow animate__fadeInRight">
                <h1 className='text-5xl font-bold mb-14'>!كن جزءًا من التحول الإعلامي</h1>
                <h2 className='text-3xl font-bold mb-3'>كن جزءًا من مستقبل الإعلام في</h2>
                <h2 className='text-3xl font-bold mb-3'>المملكة والعالم</h2>
                <p className='opacity-60 text-2xl text-end mb-3'>انضم إلينا في هذا الحدث الفريد الذي يجمع بين أبرز الخبراء والمتخصصين في المجال الإعلامي</p>
                <div className="bg-secondary text-white text-sm font-madani py-5 px-20 rounded-2xl hover:pointer shadow mt-5">
                    سجل الآن
                </div>
            </div>
            <div className="absolute w-14 top-32 right-2 flex flex-wrap gap-4 wow animate__fadeInDown">
                {dots.map((dot) => (
                    <div key={dot} className='w-3 h-3 bg-lemon rounded '></div>
                ))}
            </div>
        </div>
    </>
}
