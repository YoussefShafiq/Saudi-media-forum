import React from 'react'
import HeroSec from '../../components/HeroSec/HeroSec'
import NewsSlider from '../../components/NewsSlider/NewsSlider'
import Sec3 from '../../components/Sec3/Sec3'
import RakaezMontada from '../../components/RakaezMontada/RakaezMontada'
import Fomex from '../../components/Fomex/Fomex'
import BePart from '../../components/bePart/BePart'
import Award from '../../components/Award/Award'
import WhyBeHere from '../../components/WhyBeHere/WhyBeHere'
import OurPartners from '../../components/OurPartners/OurPartners'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return <>
        <div className="overflow-hidden">
            <HeroSec />
            <NewsSlider />
            <Sec3 />
            <RakaezMontada />
            <Fomex />
            <BePart />
            <Award />
            <WhyBeHere />
            <OurPartners />
            <Footer />
        </div>
    </>
}
