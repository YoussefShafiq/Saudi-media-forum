import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React from 'react'

export default function Slideleft(props) {
    const { className, style, onClick } = props;
    return <>
        <div className="aspect-square cursor-pointer h-12 w-12 flex justify-center items-center outline-1 outline outline-lemon rounded-full text-lemon text-2xl" onClick={onClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
    </>
}
