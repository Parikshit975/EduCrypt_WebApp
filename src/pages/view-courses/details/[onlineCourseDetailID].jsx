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
import PDF_Detail from "../../../component/PDF_Detail/PDF_Detail";
import Card3 from "@/component/cards/card3";
import { getCourseDetail_Service } from "@/services";
import Button1 from "@/component/buttons/button1/button1";
import Notes from "@/component/notes/notes";
import RecordedClass from "@/component/recordedClass/recordedClass";
import ExamCalender from "@/component/examCalender/ExamCalender";

// const tiles = ["Course Detail", "Course Curriculum", "PDF's", "Group Chat"];

const ViewOnlineCourseDetail = () => {
  const [key, setKey] = useState("Course Overview");
  const [onlineCourseAry, setOnlineCourseAry] = useState("");
  const [relateCourseAry, setRelateCourseAry] = useState("");
  const [courseDetail, setCourseDetail] = useState("");
  const [pdfData, setPdfData] = useState("");
  const [videoData, setVideoData] = useState("");
  const [tiles, setTiles] = useState([])
  const [id, setId] = useState('');
  const [titleName, setTitleName] = useState('')

  const resetLayerRef = useRef();
  const resetCourseCurriculumLayerRef = useRef();
  const router = useRouter();
  const { onlineCourseDetailID } = router.query;
  // console.log('onlineCourseDetailID============', onlineCourseDetailID?.slice(0, onlineCourseDetailID.indexOf(':')))
  // const id = onlineCourseDetailID?.slice(onlineCourseDetailID.indexOf(':') +1, onlineCourseDetailID.length)
  // const titleName = onlineCourseDetailID?.slice(0, onlineCourseDetailID.indexOf(':'))

  useEffect(() => {
    if (onlineCourseDetailID) {
      window.scrollTo(0, 0);
      fetchCourseDetail(onlineCourseDetailID?.slice(onlineCourseDetailID.indexOf(':') +1, onlineCourseDetailID.length));
      setId(onlineCourseDetailID?.slice(onlineCourseDetailID.indexOf(':') +1, onlineCourseDetailID.length));
      setTitleName(onlineCourseDetailID?.slice(0, onlineCourseDetailID.indexOf(':')))
    }
  }, [onlineCourseDetailID]);

  const fetchCourseDetail = async (id) => {
    const token = get_token();
    const formData = {
      course_id: id,
      page: 1,
    };
    const response_getCourseDetail_service = await getCourseDetail_Service(
      encrypt(JSON.stringify(formData), token)
    );
    const response_getCourseDetail_data = decrypt(
      response_getCourseDetail_service.data,
      token
    );
    // console.log("get_courseDetail", response_getCourseDetail_data);
    if (response_getCourseDetail_data.status) {
      setOnlineCourseAry(response_getCourseDetail_data?.data?.course_detail);
      setRelateCourseAry(
        response_getCourseDetail_data?.data.tiles[0]?.meta?.related_courses
      );
      setPdfData(
        response_getCourseDetail_data?.data?.course_detail?.course_syallbus_pdf
      );
      setCourseDetail(response_getCourseDetail_data?.data?.tiles)
      setTiles(response_getCourseDetail_data?.data?.tiles)
      console.log("detail", response_getCourseDetail_data?.data?.tiles);
    }
  };

  const handleTabChange = (k) => {
    console.log("k 83",k)
    setKey(k);
    // console.log('k', k)
    if (resetLayerRef.current) {
      resetLayerRef.current.click();
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
                {onlineCourseAry.mrp != 0 && (
                  <li className="breadcrumb-item" onClick={() => router.back()}>
                    {titleName}
                  </li>
                )}
                <li className="breadcrumb-item active">Details</li>
              </ol>
            </nav>
            <div className="courseTitle">
              <p>{onlineCourseAry?.title}</p>
            </div>
            <div
              className="courseDuration"
              style={{ color: "black", fontWeight: 500 }}
            >
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
              {onlineCourseAry.mrp != 0 &&
                onlineCourseAry.validity != "0 Days" && (
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
                  <p style={{ marginLeft: "5px" }}>{165} Reviews</p>
                </span>
              </div>
            </div>
            {onlineCourseAry.mrp != 0 && (
              <div className="d-flex button_price">
                <div className="share d-flex">
                  <button className="button1_share">
                    <FaShare />
                  </button>
                  <span>
                    <Button1
                      value={"Buy Now"}
                      handleClick={() =>
                        router.push(
                          `/view-courses/course-order/${titleName + ':' +onlineCourseAry.id}`
                        )
                      }
                    />
                  </span>
                </div>
                <div className="">
                  <p className="m-0">
                    <FaRupeeSign className="rupeeSign" />
                    <span className="costPrice">
                      {onlineCourseAry.is_gst == 0 ? Number(onlineCourseAry.mrp) + Number(onlineCourseAry.tax): onlineCourseAry.mrp}
                    </span>
                    <span style={{color: '#A8A8A8'}}>
                      <FaRupeeSign className="rupeeSign2" />
                      {onlineCourseAry.course_sp}
                    </span>
                  </p>
                  <p className="m-0 text-success">{onlineCourseAry.is_gst == 0 ? 'Inclusive of GST' : 'Exclusive of GST'}  </p>
                </div>
              </div>
            )}
            <div className="courseCard">
              <Card3
                value={onlineCourseAry}
                titleName = {titleName}
              />
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
              {/* <Tab
                  eventKey={'course Detail'}
                  title={'course Detail' }
                  key={'course Detail'}
                  // propsValue={isValidData(item) && item.tiles}
                >
              </Tab> */}
              {console.log("key 214",key)}
              {tiles?.map((item, index) => (
                // console.log('item', item)
                item.tile_name !== "Content" && item.tile_name !== "FAQ" &&
                <Tab
                  eventKey={item.tile_name}
                  title={item.tile_name }
                  key={index}
                  // propsValue={isValidData(item) && item.tiles}
                >
                  {item.tile_name == "Course Overview" &&
                    <CourseDetail
                      title={item.tile_name}
                      courseDetail={courseDetail}
                      propsValue={
                        isValidData(relateCourseAry) && relateCourseAry
                      }
                      relateCourseAry={relateCourseAry}
                    />
                  }
                  {/* {item.tile_name === "Notes" && ( */}
                    <Notes
                      resetRef={resetLayerRef}
                      courseDetail={item}
                      CourseID = {id}
                      tabName={item.tile_name}
                      keyValue={key}
                      // propsValue={isValidData(pdfData) && pdfData}
                    />
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
