import React, { useState, useEffect } from "react";
import SliderContent from "../slider/sliderContent/sliderContent";
import Slider from "react-slick";
import * as Icon from "react-bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ScreenWidth } from "../../utils/helpers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

const FreeContent = ({value, titleName, onlineCourseDetailID}) => {
  const [showSlide, setShowSlide] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(value);
  const router = useRouter();

  // console.log('title', title)

  useEffect(() => {
    const changeWidth = () => {
      setShowSlide(ScreenWidth());
    };

    if (typeof window !== "undefined") {
      changeWidth();
      window.addEventListener("resize", changeWidth);

      setTimeout(() => {
        setIsLoading(true);
      }, 0);

      return () => {
        window.removeEventListener("resize", changeWidth);
      };
    }
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: showSlide,
    slidesToScroll: 1,
    nextArrow: <Icon.ChevronRight />,
    prevArrow: <Icon.ChevronLeft />,
  };

  return (
    <div className="container">
      {/* {true ? ( */}
        <Slider {...settings}>
          {data.map((item, index) => (
            <SliderContent freeCourse={item} titleName={titleName} key={index} />
          ))}
        </Slider>
      {/* ) : (
        <div>Loading...</div> // Static fallback content for SSR
      )} */}
    </div>
  );
};

export default FreeContent;
