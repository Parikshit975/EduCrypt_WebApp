import React, { useEffect, useState } from "react";
import FreeContent from "../../../component/freeTest&Course/freeContent";
import OurProduct from "../../../component/ourProducts/ourProduct";
import {
  faculties_Ary,
  freeTestAry,
} from "../../../../public/assets/sampleArry";
import { isValidData } from "@/utils/helpers";

const CourseDetail = ({ courseDetail, propsValue, title, relateCourseAry }) => {
  const [active, setActive] = useState(0);
  const [description, setDescription] = useState("");
  const [faq, setFaq] = useState("");

  console.log("propsValue", courseDetail);
  useEffect(() => {
    if (courseDetail) {
      setDescription(
        courseDetail.filter((item) => item.tile_name == "Course Overview")[0]
          ?.meta?.description
      );
      setFaq(
        courseDetail.filter((item) => item.tile_name == "FAQ")[0]?.meta?.list
      );
    }
  }, [courseDetail]);

  return (
    <div className="container p-4">
      <section className="py-4 page-section-6">
        {description && (
          <div className="container">
            <div className="row">
              <div>
                <div className="page-sect-2-title course">
                  <h1 className="head">{title}</h1>
                </div>
                <div className="smallline mx-auto mb-3"></div>
              </div>
              <div
                // contentEditable="true"
                dangerouslySetInnerHTML={{ __html: description.data }}
              ></div>
              {/* <div className="mt-4 detailCourse">{description.data}</div> */}
            </div>
          </div>
        )}
      </section>
      <section className="py-4 page-section-6">
        <div className="container">
          {faq && (
            <div className="row">
              <div>
                <div className="page-sect-2-title">
                  <h1 className="head">Faq's</h1>
                </div>
                <div className="smallline mx-auto mb-3"></div>
              </div>
              <div className="mt-4">
                <div className="accordion accordion-flush" id="faqlist">
                  {faq.map((item, index) => {
                    return <div className="accordion-item" key = {index}>
                    <h2
                      className="accordion-header"
                      onClick={() => setActive(index)}
                    >
                      <button
                        className={`accordion-button ${
                          active !== index && "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-0"
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id="faq-content-0"
                      className={`accordion-collapse collapse accrdbtn ${
                        active == index && "show"
                      }`}
                      data-bs-parent="#faqlist"
                    >
                      <div className="accordion-body">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="py-4 page-section-6">
        {/* {console.log('prop', propsValue)} */}
        {isValidData(propsValue) && (
          <div className="container">
            <div className="row">
              <div>
                <div className="page-sect-2-title">
                  <h1 className="head">
                    Similar{" "}
                    {title == "Test Description" ? "Test Series" : "Courses"}
                  </h1>
                </div>
                <div className="smallline mx-auto mb-3"></div>
              </div>
              <div className="mt-4">
                <FreeContent
                  value={isValidData(relateCourseAry) && relateCourseAry}
                  title="Related Course"
                />
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="py-4 page-section-6">
        <div className="container">
          {isValidData(faculties_Ary) && (
            <div className="row">
              <OurProduct value="faculties" data={faculties_Ary} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
