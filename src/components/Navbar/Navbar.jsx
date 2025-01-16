import React from 'react'
import logo from '../../assets/images/logoAr.svg'
import { ChevronDown, Globe } from 'lucide-react'

export default function Navbar() {
    return <>
        <div className="w-full h-[85px] flex justify-around items-center">
            <div className="flex items-center space-x-3 ">
                <button>
                    <p className="bg-secondary py-4 px-6 text-white font-madani rounded-lg text-sm ">
                        تسجيل الدخول
                    </p>
                </button>
                <Globe strokeWidth={1} size={30} className='text-white' />
            </div>

            <ul className='flex justify-center items-center space-x-10 h-full'>
                <li className="flex items-center space-x-2 group text-white hover:text-lightgreen transition-all relative py-3 cursor-pointer">
                    <ChevronDown size={18} className="transition-transform duration-300 group-hover:rotate-180" />
                    <h2 className="font-madani ">
                        أخرى
                    </h2>
                    <ul className='hidden z-10 hover:block py-2 group-hover:block absolute bg-white top-0 right-0 translate-y-12 rounded-lg w-52 text-gray-900 text-end'>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer ' >حول العالم</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer '>المركز الإعلامي</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer '>فعاليات السعودية</li>
                    </ul>
                </li>
                <li className="flex items-center space-x-2 group text-white hover:text-lightgreen transition-all relative py-3 cursor-pointer">
                    <ChevronDown size={18} className="transition-transform duration-300 group-hover:rotate-180" />
                    <h2 className="font-madani  ">
                        جائزة المنتدى
                    </h2>
                    <ul className='hidden z-10 hover:block py-2 group-hover:block absolute bg-white top-0 right-0 translate-y-12 rounded-lg w-52 text-gray-900 text-end'>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer ' >جائزة المنتدى</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer '>الأسئلة الشائعة عن الجائزة</li>
                    </ul>
                </li>
                <li className="flex items-center space-x-2 group text-white hover:text-lightgreen transition-all relative py-3 cursor-pointer">
                    <ChevronDown size={18} className="transition-transform duration-300 group-hover:rotate-180" />
                    <h2 className="font-madani  ">
                        المعرض
                    </h2>
                    <ul className='hidden z-10 hover:block py-2 group-hover:block absolute bg-white top-0 right-0 translate-y-12 rounded-lg w-52 text-gray-900 text-end'>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer ' >المعرض</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer '>عن المعرض</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer '>جلسات المعرض</li>
                    </ul>
                </li>
                <li className="flex items-center space-x-2 group hover:text-lightgreen transition-all relative py-3 cursor-pointer">
                    <ChevronDown size={18} className="transition-transform duration-300 group-hover:rotate-180 text-lightgreen hover:text-lightgreen" />
                    <h2 className="font-madani text-lightgreen hover:text-lightgreen">
                        الرئيسية
                    </h2>
                    <ul className='hidden z-10 hover:block py-2 group-hover:block absolute bg-white top-0 right-0 translate-y-12 rounded-lg w-52 text-gray-900 text-end'>
                        <li className='bg-[#f3f4f6] text-lightgreen transition-all p-1 px-3 cursor-pointer' >الرئيسية</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer '>عن المنتدى</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer '>رسالة المنتدى</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer ' >المتحدثون</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer ' >جلسات المنتدى</li>
                        <li className='hover:bg-[#f3f4f6] hover:text-lightgreen transition-all p-1 px-3 cursor-pointer ' >أسئلة عن المنتدى</li>
                    </ul>
                </li>

            </ul>

            <div className="">
                <img src={logo} alt="saudi media forum logo" />
            </div>
        </div>
    </>
}
