import React from 'react'

export default function HeroStats() {
    return <>
        <div className="bg-primary bg-opacity-80 py-10 px-20 flex items-center justify-center space-x-10">
            <div className="flex flex-col h-full w-1/6 bg-secondary rounded py-7 text-center">
                <p className='text-white font-bold text-3xl'>+32K</p>
                <p className='text-lemon font-bold font-madani text-xl '>
                    زائر
                </p>
            </div>
            <div className="flex flex-col h-full w-1/6 bg-secondary rounded py-7 text-center">
                <p className='text-white font-bold text-3xl'>+200</p>
                <p className='text-lemon font-bold font-madani text-xl '>
                    جهة مشاركة
                </p>
            </div>
            <div className="flex flex-col h-full w-1/6 bg-secondary rounded py-7 text-center">
                <p className='text-white font-bold text-3xl'>+2000</p>
                <p className='text-lemon font-bold font-madani text-xl '>
                    إعلامي ومتحدث
                </p>
            </div>
            <div className="flex flex-col h-full w-1/6 bg-secondary rounded py-7 text-center">
                <p className='text-white font-bold text-3xl'>+80</p>
                <p className='text-lemon font-bold font-madani text-xl '>
                    جلسة
                </p>
            </div>
            <div className="flex flex-col h-full w-1/6 bg-secondary rounded py-7 text-center">
                <p className='text-white font-bold text-3xl'>+196M</p>
                <p className='text-lemon font-bold font-madani text-xl '>
                    وصول إعلامي
                </p>
            </div>
            <div className="flex flex-col h-full w-1/6 bg-secondary rounded py-7 text-center">
                <p className='text-white font-bold text-3xl'>+11M</p>
                <p className='text-lemon font-bold font-madani text-xl '>
                    مشاهدات
                </p>
            </div>
        </div>
    </>
}
