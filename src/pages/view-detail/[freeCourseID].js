import React, { useState, useEffect, useRef } from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { LiaYoutube } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { get_token, isValidData } from "@/utils/helpers";
import { IoStar } from "react-icons/io5";

import CourseDetail from "./courseDetail/courseDetail";
import CourseCurriculum from "./courseCurriculum/courseCurriculum";
import PDF_Detail from "./PDF_Detail/PDF_Detail";
import Card2 from "@/component/cards/card2";
import { getCourseDetail_Service } from "@/services";
import { encrypt, decrypt } from "@/utils/helpers";

const tiles = ["Course Detail", "Course Curriculum", "PDF's", "Group Chat"];

const ViewDetail = () => {
  const [key, setKey] = useState("Course Detail");
  const [freeCourseAry, setFreeCourseAry] = useState('');
  const [relateCourseAry, setRelateCourseAry] = useState('');
  const [pdfData, setPdfData] = useState('')
  const [videoData, setVideData] = useState('')

  const resetPdfLayerRef = useRef();
  const resetCourseCurriculumLayerRef = useRef();
  const router = useRouter();
  const { freeCourseID } = router.query;
  

  useEffect(() => {
    if (freeCourseID) {
      window.scrollTo(0, 0);
      fetchCourseDetail(freeCourseID);
    }
  }, [freeCourseID]);

  const fetchCourseDetail = async (freeCourseID) => {
    const token = get_token();
    const formData = {
      'course_id': freeCourseID,
      'page': 1
    };
    const response_getCourseDetail_service = await getCourseDetail_Service(encrypt(JSON.stringify(formData), token));
    const response_getCourseDetail_data = decrypt(response_getCourseDetail_service.data, token);
    console.log('response_getCourseDetail_data', response_getCourseDetail_data.data)
    if (response_getCourseDetail_data.status) {
      setFreeCourseAry(response_getCourseDetail_data.data);
      setRelateCourseAry(response_getCourseDetail_data?.data.tiles[0]?.meta.related_courses?.filter((item) => item.mrp == 0))
      setPdfData(response_getCourseDetail_data?.data?.course_detail?.course_syallbus_pdf)
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
      <div className="container-fluid p-0" style={{ overflow: 'hidden' }}>
        <div className="course_titleContainer row">
          <div className="col-6 container breadcrumb_container">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-2 cursor">
                <li className="breadcrumb-item"
                  onClick={() => router.push('/')}
                >
                  Home
                </li>
                <li
                  className="breadcrumb-item active"
                >
                  Details
                </li>
              </ol>
            </nav>
            <div className="courseTitle">
              <p>{freeCourseAry?.course_detail?.title}</p>
            </div>
            <div className="courseDuration">
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
            </div>
            <div className="d-flex mb-2 freeCourserate">
              <div className="freeCourseRating">
                <span className="freeRating"><IoStar /> {4.1}</span>
              </div>
              <div className="freeCourseReview">
                <span className="review"><p>{165} Reviews</p></span>
              </div>
            </div>
            <div className="courseCard">
              <Card2 freeCourse={freeCourseAry.course_detail} />
            </div>
          </div>
          <div className="col-6 course_imageContainer">
            <div className="imgContainer">
              {/* <img src={freeCourseAry[0].image} alt="" /> */}
            </div>
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
                <Tab eventKey={item} title={item} key={item} propsValue={freeCourseAry.tiles}>
                  {item === "Course Detail" && <CourseDetail  title={item} value = {course_detail} propsValue={isValidData(relateCourseAry) && relateCourseAry} />}
                  {item === "Course Curriculum" && <CourseCurriculum resetRef={resetCourseCurriculumLayerRef} tabName={item} propsValue = {isValidData(videoData) && videoData} />}
                  {item === "PDF's" && <PDF_Detail resetRef={resetPdfLayerRef} tabName={item} propsValue={isValidData(pdfData) && pdfData} />}
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

export default ViewDetail;

const course_detail = "In this course, Talvir Singh will cover the syllabus of Communication. All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi. In this course, Talvir Singh will cover the syllabus of Communication. All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi. In this course, Talvir Singh will cover the syllabus of Communication. All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi.";
