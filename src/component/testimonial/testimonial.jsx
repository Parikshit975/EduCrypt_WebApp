// pages/testimonial.js
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonial_Ary } from '../../../public/assets/sampleArry';
import SliderTestimonial from '../slider/sliderTestimonial/sliderTestimonial';
import { get_token, TestScreenWidth } from '../../utils/helpers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { encrypt, decrypt, isValidData } from '../../utils/helpers';
import { getTestimonialService } from '@/services';

const Testimonial = () => {
    const [showSlide, setShowSlide] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [testimonial_Ary1, settestimonial_Ary1] = useState('')

    useEffect(() => {
        setTimeout(() => {
            fetchTestimonialData() 
        }, 1000);
        const changeWidth = () => {
            setShowSlide(TestScreenWidth());
        };

        changeWidth();
        window.addEventListener("resize", changeWidth);

        setTimeout(() => {
            setIsLoading(true);
        }, 0);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        centerPadding: "0px",
        slidesToShow: showSlide,
        speed: 500,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
    };

    const fetchTestimonialData = async () => {
        const token = get_token();
        const formData = new FormData();
        const response_testimonial_service = await getTestimonialService(formData);
        const testimonial_service_Data = decrypt(response_testimonial_service.data, token)
        if(testimonial_service_Data.status){
            console.log('testimonal response', testimonial_service_Data.data.testimonial)
            settestimonial_Ary1(testimonial_service_Data.data.testimonial)
        }
    }

    return (
        <div className='container mb-3 test_container'>
            {isValidData(testimonial_Ary1) && <>
            <div className='testimonial_heading'>
                <h1 class="main-title">Testimonials</h1>
                {/* <p>Lorem Ipsum is simply dummy text of the printing</p> */}
            </div>
            <div className='container-fluid'>
                <Slider {...settings}>
                    { testimonial_Ary1.map((item, index) => {
                        return <SliderTestimonial value={item} key={index} />
                    })}
                </Slider>
            </div>
            </>}
        </div>
    );
};

export default Testimonial;
