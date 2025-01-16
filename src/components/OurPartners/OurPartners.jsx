import React from 'react';
import img1 from '../../assets/images/partners/mediaturtles logo.svg';
import img2 from '../../assets/images/partners/NEOM-01-1.svg';
import img3 from '../../assets/images/partners/MBC Academy.svg';
import img4 from '../../assets/images/partners/alula 1.svg';
import img5 from '../../assets/images/partners/IGNITE.svg';
import img6 from '../../assets/images/partners/Jahez-2-01.svg';
import img7 from '../../assets/images/partners/kaciid.svg';

export default function OurPartners() {
    const images = [img1, img2, img3, img4, img5, img6, img7];

    return (
        <>
            <div className="bg-white py-10 overflow-hidden">
                <div className="font-madani text-black pb-2 text-[40px] w-fit m-auto mb-16 leading-[60px] font-extrabold relative after:absolute after:content-[''] after:h-2 after:w-28 after:bg-lemon after:rounded-2xl after:top-full after:left-1/2 after:-translate-x-1/2 after:translate-y-3 wow animate__fadeInDownBig">
                    فخورون بأن نكون شركاء رحلتكم نحو التميز
                </div>
                <div className="flex flex-wrap justify-center items-center space-x-8">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Partner ${index + 1}`} className="w-1/12" />
                    ))}
                </div>
            </div>
        </>
    );
}
