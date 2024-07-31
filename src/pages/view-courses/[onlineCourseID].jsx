import React, { useState, useEffect, useRef } from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useRouter } from "next/router";
import Card1 from "@/component/cards/card1";
import { get_token, isValidData } from "@/utils/helpers";
import { getCourse_service } from "@/services";
import { encrypt, decrypt } from "@/utils/helpers";

const OC_image = "/assets/images/OC_title1.png";

const OnlineCourse = () => {
  const [key, setKey] = useState("Course Detail");
  const [onlineCourse, setOnlineCourse] = useState('')

  const resetPdfLayerRef = useRef();
  const resetCourseCurriculumLayerRef = useRef();
  const Router = useRouter();
  const { onlineCourseID } = Router.query;

  useEffect(() => {
    if (onlineCourseID) {
      window.scrollTo(0, 0);
      fetchCourseDetail(onlineCourseID);
    }
  }, [onlineCourseID]);

  console.log('onlineCourseID111', onlineCourseID)

  const fetchCourseDetail = async (onlineCourseID) => {
    const token = get_token();
    const formData = {
      'course_type':onlineCourseID,
      'page':1,
      'sub_cat':1,
      'main_cat':0,
      // 'course_ids': onlineCourseID
    }
    const response_getCourse_service = await getCourse_service(encrypt(JSON.stringify(formData),token));
    const response_getCourse_data = decrypt(response_getCourse_service.data, token)
    console.log('response_getCourse_data', response_getCourse_data)
    if (response_getCourse_data.status) {
      setOnlineCourse(response_getCourse_data.data);
      // console.log('detail', response_getCourse_data.data);
    }
  };


  return (
    <>
      <Header />
      <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
        <div className="course_titleContainer row">
          <div className="col-7 container breadcrumb_container1">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-4 cursor">
                <li
                  className="breadcrumb-item"
                  onClick={() => Router.push('/')}
                >
                  Home
                </li>
                <li
                  className="breadcrumb-item active"
                  // onClick={() => navigate("/view-courses")}
                >
                  All Courses
                </li>
                {/* {courseDetails && <li className="breadcrumb-item highlight">{courseDetails.course_detail.title}</li>} */}
              </ol>
            </nav>
            <div className="onlineCourseTitle" style={{marginTop: '35px'}}> 
              <p className="title">Online Courses</p>
              <p className="onlineCourseDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, neque nihil! Animi nam cum natus neque cumque
                consequatur iusto quidem dolorem ex facere debitis odio
                repudiandae asperiores reprehenderit quia qui, officiis expedita
                repellat est.
              </p>
            </div>
          </div>
          <div className="col-5 course_imageContainer">
            <div className="imgContainer">
              <img src={OC_image} alt="" />
            </div>
          </div>
        </div>
        <div className="course_mainContainer tabs_design__">
          <nav className="m-0 p-0">
            <div className="container onlineCourse pb-3">
              <div className="row">
                {isValidData(onlineCourse) && 
                  onlineCourse.map((item, index) => {
                    return <Card1 value = {item} key={index} />
                  })
                }
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OnlineCourse;

const course_detail =
  "In this course, Talvir Singh will cover the syllabus of Communication . All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi. In this course, Talvir Singh will cover the syllabus of Communication . All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi.In this course, Talvir Singh will cover the syllabus of Communication . All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi..";
