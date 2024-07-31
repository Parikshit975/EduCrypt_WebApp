import React, { useState, useEffect } from "react";
// import { prod_Ary } from "../../../public/assets/sampleArry";
import SliderProduct from "../slider/sliderProduct/sliderProduct";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { get_token, ProdscreenWidth } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { isValidData, encrypt, decrypt } from "../../utils/helpers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getFaculty_Service } from "@/services";

const OurProduct = ({ value, data }) => {
  const [showSlide, setShowSlide] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const prod_Ary = useSelector((state) => state.allCategory.allCategory.course_type_master)
  const status = isValidData(prod_Ary)
  const [facultyAry, setfacultyAry] = useState('')
  console.log('prod_Ary', prod_Ary)


  useEffect(() => {
    const changeWidth = () => {
      setShowSlide(ProdscreenWidth());
      fetchFaculty();
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
    slidesToScroll: 1,
    slidesToShow: showSlide,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  const fetchFaculty = async () => {
    const token = get_token()
    const formData = new FormData();
    const response_faculty_service = await getFaculty_Service(formData);
    const faculty_service_Data = decrypt(response_faculty_service.data, token)
    console.log('faculty', faculty_service_Data)
    if(faculty_service_Data.status) {
      setfacultyAry(faculty_service_Data.data)
    }
  }

  if (value == "product") {
    return (
      <div className="container Product_container">
        {isValidData(prod_Ary) && <>
        <div className="heading_prod">
          <h1 class="main-title">Our Products</h1>
        </div>
        <div className="row align-items-center text-white prod_slider">
          {status ? (
            <Slider {...settings}>
              {prod_Ary &&
                prod_Ary.map((item, index) => (
                  <SliderProduct value={item} key={index} />
                ))}
            </Slider>
          ) : (
            <div>Loading...</div> // Static fallback content for SSR
          )}
        </div>
        </>}
      </div>
    );
  } else if (value == "faculties") {
    return <>
      {isValidData(facultyAry) && <>
        <div className="page-sect-2-title">
            <h1 className="head">Top Faculties</h1>
        </div>
    <div className="row align-items-center text-white prod_slider">   
      <Slider {...settings}>
        {facultyAry &&
          facultyAry.map((item, index) => (
            <div className="mb-3 ourfacultySection" key={index}>
              <div className="card">
                <div>
                  {item.profile_picture && (
                    <img className="ourProImg" src={item.profile_picture} alt="" />
                  )}
                </div>
                <div className="text-center">
                  <p className="faculty_name">{item.username}</p>
                  <p className="faculty_role">Expirence: {item.experience} years</p>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
    </>}
    </>}
};

export default OurProduct;
