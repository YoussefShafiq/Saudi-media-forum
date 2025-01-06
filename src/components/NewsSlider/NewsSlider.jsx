import React, { lazy, useRef } from "react";
import Slider from "react-slick"; // Import react-slick
import Slideleft from "../Slideleft/Slideleft"; // Custom left arrow
import Slideright from "../Slideright/Slideright"; // Custom right arrow
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function NewsSlider() {

    const sliderRef = useRef(null);
    // Define slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="py-10 px-24 bg-primary">
            <div className="flex justify-between items-center">
                <div className="flex space-x-5 wow animate__slideInDown ">
                    <Slideleft onClick={() => sliderRef.current.slickPrev()} />
                    <Slideright onClick={() => sliderRef.current.slickNext()} />
                </div>
                <div className="font-madani text-white text-[40px] leading-[60px] font-extrabold relative after:absolute after:contents'' after:h-2 after:w-1/2 after:bg-lemon after:rounded-2xl after:top-full after:left-1/2 after:-translate-x-1/2 after:translate-y-3 wow animate__slideInDown ">
                    أهم الأخبار
                </div>
            </div>
            <div className="my-20 bg-lightgreen px-5 py-3 rounded-3xl transform transition-all wow animate__slideInRight ">
                <Slider ref={sliderRef} {...settings}>
                    <div className="text-center">
                        <div className="w-[calc(33.3333%-10px)] me-[10px] inline-block "><TwitterTweetEmbed onLoad={lazy} className='hide-image' tweetId="1874833035163562356" /></div>
                        <div className="w-[calc(33.3333%-10px)] me-[10px] inline-block "><TwitterTweetEmbed onLoad={lazy} tweetId="1874833035163562356" /></div>
                        <div className="w-[calc(33.3333%-10px)] inline-block "><TwitterTweetEmbed onLoad={lazy} tweetId="1874833035163562356" /></div>
                    </div>
                    <div className="text-center">
                        <div className="w-[calc(33.3333%-10px)] me-[10px] inline-block "><TwitterTweetEmbed onLoad={lazy} tweetId="1874833035163562356" /></div>
                        <div className="w-[calc(33.3333%-10px)]  inline-block "><TwitterTweetEmbed onLoad={lazy} tweetId="1874833035163562356" /></div>
                    </div>
                    <div className="text-center">
                        <div className="w-[calc(33.3333%-10px)] me-[10px] inline-block "><TwitterTweetEmbed onLoad={lazy} tweetId="1874833035163562356" /></div>
                        <div className="w-[calc(33.3333%-10px)] me-[10px] inline-block "><TwitterTweetEmbed onLoad={lazy} tweetId="1874833035163562356" /></div>
                        <div className="w-[calc(33.3333%-10px)] inline-block "><TwitterTweetEmbed onLoad={lazy} tweetId="1874833035163562356" /></div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
