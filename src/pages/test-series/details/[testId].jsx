import React, { useEffect, useState, useRef } from "react";
import Footer from "@/component/footer/footer";
import Header from "@/component/header/header";
import { getCourseDetail_Service } from "@/services";
import { decrypt, encrypt, get_token, isValidData } from "@/utils/helpers";
import { useRouter } from "next/router";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import Button1 from "@/component/buttons/button1/button1";
import Card3 from "@/component/cards/card3";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CourseDetail from "@/pages/view-detail/courseDetail/courseDetail";
import CourseCurriculum from "@/pages/view-detail/courseCurriculum/courseCurriculum";

const tiles = ["Test Description", "Full Length Test", "Group Chat"];

const TestID = () => {

  const [key, setKey] = useState("Test Description");
  const [testAry, setTestAry] = useState(null)
  const [relatedTestAry, setRelatdTestAry] = useState(null);
  const resetPdfLayerRef = useRef();
  const resetCourseCurriculumLayerRef = useRef();
  const router = useRouter();
  const { testId } = router.query;

  useEffect(() => {
    if(testId) {
      window.scrollTo(0, 0);
      fetchTestDetal()
    }
  }, [testId])

  const fetchTestDetal = async () => {
    const token = get_token();
    const formData = {
      course_id: testId,
      page: 1,
    }
    const response_getTestDetail_service = await getCourseDetail_Service(encrypt(JSON.stringify(formData), token));
    const response_getTestDetail_data = decrypt(response_getTestDetail_service.data, token);
    console.log('response_getTestDetail_data',response_getTestDetail_data.data);
    if(response_getTestDetail_data.status) {
      setTestAry(response_getTestDetail_data?.data?.course_detail)
      setRelatdTestAry(
        response_getTestDetail_data?.data.tiles[0]?.meta?.related_courses
      );
    }
  }


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
                {testAry?.mrp != 0 &&
                  <li className="breadcrumb-item" onClick={() => router.back()}>
                    Test Series
                  </li>
                }
                <li className="breadcrumb-item active">Details</li>
              </ol>
            </nav>
            <div className="courseTitle">
              <p>{testAry?.title}</p>
            </div>
            <div
              className="courseDuration"
              style={{ color: "black", fontWeight: 500 }}
            >
              <p>
                <span>
                  <IoDocumentTextOutline className="video_icon" />
                </span>{" "}
                120 PDF's
              </p>
              {testAry?.validity != "0 Days" && (
                  <p>
                    <span>
                      <MdOutlineCalendarMonth className="video_icon" />
                    </span>{" "}
                    Validity: {`${testAry?.validity}`}
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
            {testAry?.mrp != 0 && (
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
                          `/view-courses/course-order/${testAry.id}`
                        )
                      }
                    />
                  </span>
                </div>
                <div className="">
                  <p className="m-0">
                    <FaRupeeSign className="rupeeSign" />
                    <span className="costPrice">
                      {testAry?.course_sp}
                    </span>
                    <span style={{color: '#A8A8A8'}}>
                      <FaRupeeSign className="rupeeSign2" />
                      {testAry?.mrp}
                    </span>
                  </p>
                  <p className="m-0 text-success">{testAry?.is_gst == 0 ? 'Inclusive of GST' : 'Exclusive of GST'}  </p>
                </div>
              </div>
            )}
            <div className="courseCard">
              <Card3
                value={testAry}
              />
            </div>
          </div>
          <div className="col-5">
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
                  propsValue={isValidData(testAry) && testAry.tiles}
                >
                  {item === "Test Description" && (
                    <CourseDetail
                      title={item}
                      value={test_detail  }
                      propsValue={
                        isValidData(relatedTestAry) && relatedTestAry
                      }
                      relateCourseAry={relatedTestAry}
                    />
                  )}
                  {item === "Full Length Test" && (
                    <CourseCurriculum
                      resetRef={resetCourseCurriculumLayerRef}
                      tabName={item}
                      // propsValue={isValidData(videoData) && videoData}
                      value={""}
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

export default TestID;


const test_detail =
  "In this course, Talvir Singh will cover the syllabus of Communication. All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi. In this course, Talvir Singh will cover the syllabus of Communication. All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi. In this course, Talvir Singh will cover the syllabus of Communication. All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi.";

