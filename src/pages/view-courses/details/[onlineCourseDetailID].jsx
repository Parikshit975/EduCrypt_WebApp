import React, { useState, useEffect, useRef } from "react";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer/footer";
import { LiaYoutube } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useRouter } from "next/router";
import { get_token, isValidData, encrypt, decrypt } from "@/utils/helpers";
import { IoStar } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";

import CourseDetail from "../../view-detail/courseDetail/courseDetail";
import CourseCurriculum from "../../view-detail/courseCurriculum/courseCurriculum";
import PDF_Detail from "../../view-detail/PDF_Detail/PDF_Detail";
import Card3 from "@/component/cards/card3";
import { getCourseDetail_Service } from "@/services";
import Button1 from "@/component/buttons/button1/button1";

const tiles = ["Course Detail", "Course Curriculum", "PDF's", "Group Chat"];

const ViewOnlineCourseDetail = () => {
  const [key, setKey] = useState("Course Detail");
  const [onlineCourseAry, setOnlineCourseAry] = useState("");
  const [relateCourseAry, setRelateCourseAry] = useState("");
  const [pdfData, setPdfData] = useState("");
  const [videoData, setVideData] = useState("");

  const resetPdfLayerRef = useRef();
  const resetCourseCurriculumLayerRef = useRef();
  const router = useRouter();
  const { onlineCourseDetailID } = router.query;

  useEffect(() => {
    if (onlineCourseDetailID) {
      window.scrollTo(0, 0);
      fetchCourseDetail(onlineCourseDetailID);
    }
  }, [onlineCourseDetailID]);

  const fetchCourseDetail = async (onlineCourseDetailID) => {
    const token = get_token();
    const formData = {
      course_id: onlineCourseDetailID,
      page: 1,
    };
    const response_getCourseDetail_service = await getCourseDetail_Service(
      encrypt(JSON.stringify(formData), token)
    );
    const response_getCourseDetail_data = decrypt(
      response_getCourseDetail_service.data,
      token
    );
    console.log('get_courseDetail', response_getCourseDetail_data);
    if (response_getCourseDetail_data.status) {
      setOnlineCourseAry(response_getCourseDetail_data.data.course_detail);
      setRelateCourseAry(
        response_getCourseDetail_data?.data.tiles[0]?.meta.related_courses
      );
      setPdfData(
        response_getCourseDetail_data?.data?.course_detail?.course_syallbus_pdf
      );
      console.log("detail", response_getCourseDetail_data);
    }
  };

  const handleTabChange = (k) => {
    setKey(k);
    if (resetPdfLayerRef.current) {
      resetPdfLayerRef.current.click();
    }
    if (resetCourseCurriculumLayerRef.current) {
      resetCourseCurriculumLayerRef.current.click();
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
        <div className="course_titleContainer row">
          <div className="col-7 container breadcrumb_container">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-2 cursor">
                <li
                  className="breadcrumb-item"
                  onClick={() => router.push("/")}
                >
                  Home
                </li>
                {onlineCourseAry.mrp != 0 &&
                <li className="breadcrumb-item" onClick={() => router.back()}>
                  Online Courses
                </li>
                }
                <li className="breadcrumb-item active">Details</li>
              </ol>
            </nav>
            <div className="courseTitle">
              <p>{onlineCourseAry?.title}</p>
            </div>
            <div className="courseDuration" style={{color: 'black', fontWeight: 500}}>
              <p>
                <span>
                  <LiaYoutube className="video_icon" />
                </span>{" "}
                120 Videos
              </p>
              <p>
                <span>
                  <IoDocumentTextOutline className="video_icon" />
                </span>{" "}
                120 PDF's
              </p>
              {onlineCourseAry.mrp != 0 && onlineCourseAry.validity != "0 Days" && (
                <p>
                  <span>
                    <IoDocumentTextOutline className="video_icon" />
                  </span>{" "}
                  Validity: {`${onlineCourseAry.validity}`}
                </p>
              )}
            </div>
            <div className="d-flex mb-2 freeCourserate">
              <div className="">
                <span className="freeRating">
                  <IoStar /> {4.1}
                </span>
              </div>
              <div className="freeCourseReview">
                <span className="review">
                  <p style={{marginLeft: '5px'}}>{165} Reviews</p>
                </span>
              </div>
            </div>
            {onlineCourseAry.mrp != 0 &&
            <div className="d-flex button_price">
              <div className="share d-flex">
                <button className="button1_share"><FaShare /></button>
                <span>
                  <Button1 value = {"Buy Now"} />
                </span>
              </div>
              {/* <button className="m-2 button1_buynow ">Buy Now</button>
              <div className="coursePriceContainer">
                    <div className="coursePrice d-flex align-items-center pb-2 m-0">
                        <div className='Price'>
                            <FaRupeeSign className='rupeeSign' /><span className='costPrice'>{onlineCourseAry.course_sp}</span>
                        </div>
                        {onlineCourseAry.course_sp !== onlineCourseAry.mrp &&
                            <>
                            <div className='offPriceContainer'>
                                <div className='offPrice'>
                                </div>
                                <FaRupeeSign className='rupeeSign2' />{onlineCourseAry.mrp}
                            </div>
                            <div className='offPricePercentage'>
                                {onlineCourseAry.discount && `(${onlineCourseAry.discount}% Off)`}
                            </div>
                            </>
                        }
                    </div>
                </div> */}
            </div>
            }
            <div className="courseCard">
              <Card3 value={onlineCourseAry} />
            </div>
          </div>
          <div className="col-5 course_imageContainer">
            {/* <div className="imgContainer">
              <img src={freeCourseAry[0].image} alt="" />
            </div> */}
          </div>
        </div>
        <div className="course_mainContainer tabs_design__">
          <nav className="m-0 p-0">
            <Tabs
              id="controlled-tab-example2"
              activeKey={key}
              onSelect={(k) => handleTabChange(k)}
              className="mb-3 "
            >
              {tiles.map((item) => (
                <Tab
                  eventKey={item}
                  title={item}
                  key={item}
                  propsValue={onlineCourseAry.tiles}
                >
                  {item === "Course Detail" && (
                    <CourseDetail
                      title={item}
                      value={course_detail}
                      propsValue={
                        isValidData(relateCourseAry) && relateCourseAry
                      }
                      relateCourseAry = {relateCourseAry}
                    />
                  )}
                  {item === "Course Curriculum" && (
                    <CourseCurriculum
                      resetRef={resetCourseCurriculumLayerRef}
                      tabName={item}
                      propsValue={isValidData(videoData) && videoData}
                    />
                  )}
                  {item === "PDF's" && (
                    <PDF_Detail
                      resetRef={resetPdfLayerRef}
                      tabName={item}
                      propsValue={isValidData(pdfData) && pdfData}
                    />
                  )}
                </Tab>
              ))}
            </Tabs>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewOnlineCourseDetail;

const course_detail =
  "In this course, Talvir Singh will cover the syllabus of Communication. All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi. In this course, Talvir Singh will cover the syllabus of Communication. All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi. In this course, Talvir Singh will cover the syllabus of Communication. All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi.";
