import React, { useState, useCallback, lazy, Suspense } from 'react';
import Carousel from "react-bootstrap/Carousel"
import { bannerAry } from '../../../public/assets/sampleArry';
import CarouselItem from './carouselItem';
import { isValidData } from '@/utils/helpers';
import { useSelector } from 'react-redux';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const bannerData = useSelector((state) => state.allCategory?.allCategory?.banner_list_web)
    // console.log('bannerData123', bannerData)

    // console.log("BannerData 9",bannerData)
    const status = isValidData(bannerData)
    const handleSelect = useCallback((selectedIndex) => {
        setIndex(selectedIndex);
    }, []);


    return (
        <div className='container mt-4'>
            <div className="row align-items-center ">
                <div className={`owl-carousel owl-theme owl_custom owl-loaded owl-drag `}>
                    <Carousel
                        controls={false}
                        activeIndex={index}
                        onSelect={handleSelect}
                        className="owl-theme owl_custom owl-loaded owl-drag result p-0"
                        data-bs-touch="false"
                    >   
                    {/* {console.log("BannerData",bannerData)} */}
                        {status && 
                            bannerData?.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <CarouselItem value = {item.banner_url} />
                                </Carousel.Item>
                            ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Banner;
