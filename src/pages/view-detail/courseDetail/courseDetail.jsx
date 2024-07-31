import React, { useState } from "react";
import FreeContent from "../../../component/freeTest&Course/freeContent";
import OurProduct from "../../../component/ourProducts/ourProduct";
import { faculties_Ary, freeTestAry } from "../../../../public/assets/sampleArry";
import { isValidData } from "@/utils/helpers";

const CourseDetail = ({ value, propsValue, title, relateCourseAry }) => {
  const [active, setActive] = useState(1);

  console.log('propsValue')
  const description = value;

  return (
    <div className="container p-4">
      <section className="py-4 page-section-6">
        <div className="container">
            <div className="row">
                <div>
                <div className="page-sect-2-title course">
                    <h1 className="head">{title}</h1>
                </div>
                <div className="smallline mx-auto mb-3"></div>
                </div>
                <div className="mt-4 detailCourse">{description}</div>
            </div>
        </div>
      </section>
      <section className="py-4 page-section-6">
        <div className="container">
          <div className="row">
            <div>
              <div className="page-sect-2-title">
                <h1 className="head">Faq's</h1>
              </div>
              <div className="smallline mx-auto mb-3"></div>
            </div>
            <div className="mt-4">
              <div className="accordion accordion-flush" id="faqlist">
                <div className="accordion-item">
                  <h2 className="accordion-header" onClick={() => setActive(1)}>
                    <button
                      className={`accordion-button ${
                        active !== 1 && "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-0"
                    >
                      Introduction to Business
                    </button>
                  </h2>
                  <div
                    id="faq-content-0"
                    className={`accordion-collapse collapse accrdbtn ${
                      active == 1 && "show"
                    }`}
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      This subject provides a foundational overview of the
                      business environment, introducing key concepts,
                      structures, and functions of organizations. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </div>
                  </div>
                </div>
                <div className="accordion-item ">
                  <h2 className="accordion-header" onClick={() => setActive(2)}>
                    <button
                      className={`accordion-button ${
                        active !== 2 && "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-0"
                    >
                      Principles of Management
                    </button>
                  </h2>
                  <div
                    id="faq-content-0"
                    className={`accordion-collapse collapse accrdbtn ${
                      active == 2 && "show"
                    }`}
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      This subject provides a foundational overview of the
                      business environment, introducing key concepts,
                      structures, and functions of organizations. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </div>
                  </div>
                </div>
                <div className="accordion-item ">
                  <h2 className="accordion-header" onClick={() => setActive(3)}>
                    <button
                      className={`accordion-button ${
                        active !== 3 && "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-0"
                    >
                      Marketing Strategies
                    </button>
                  </h2>
                  <div
                    id="faq-content-0"
                    className={`accordion-collapse collapse accrdbtn ${
                      active == 3 && "show"
                    }`}
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      This subject provides a foundational overview of the
                      business environment, introducing key concepts,
                      structures, and functions of organizations. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </div>
                  </div>
                </div>
                <div className="accordion-item ">
                  <h2 className="accordion-header" onClick={() => setActive(4)}>
                    <button
                      className={`accordion-button ${
                        active !== 4 && "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-0"
                    >
                      Financial Accounting
                    </button>
                  </h2>
                  <div
                    id="faq-content-0"
                    className={`accordion-collapse collapse accrdbtn ${
                      active == 4 && "show"
                    }`}
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      This subject provides a foundational overview of the
                      business environment, introducing key concepts,
                      structures, and functions of organizations. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </div>
                  </div>
                </div>
                <div className="accordion-item ">
                  <h2 className="accordion-header" onClick={() => setActive(5)}>
                    <button
                      className={`accordion-button ${
                        active !== 5 && "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-0"
                    >
                      Organizational Behavior
                    </button>
                  </h2>
                  <div
                    id="faq-content-0"
                    className={`accordion-collapse collapse accrdbtn ${
                      active == 5 && "show"
                    }`}
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      This subject provides a foundational overview of the
                      business environment, introducing key concepts,
                      structures, and functions of organizations. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </div>
                  </div>
                </div>
                <div className="accordion-item ">
                  <h2 className="accordion-header" onClick={() => setActive(6)}>
                    <button
                      className={`accordion-button ${
                        active !== 6 && "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-0"
                    >
                      Business Ethics and Corporate Social Responsibility
                    </button>
                  </h2>
                  <div
                    id="faq-content-0"
                    className={`accordion-collapse collapse accrdbtn ${
                      active == 6 && "show"
                    }`}
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      This subject provides a foundational overview of the
                      business environment, introducing key concepts,
                      structures, and functions of organizations. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 page-section-6">
        {isValidData(propsValue) && 
          <div className="container">
              <div className="row">
                  <div>
                  <div className="page-sect-2-title">
                      <h1 className="head">Similar Courses</h1>
                  </div>
                  <div className="smallline mx-auto mb-3"></div>
                  </div>
                  <div className="mt-4">
                      <FreeContent value={relateCourseAry} title="Related Course" />
                  </div>
              </div>
          </div>
        }
      </section>
      <section className="py-4 page-section-6">
        <div className="container">
          {isValidData(faculties_Ary) && 
            <div className="row">
              <OurProduct value = "faculties" data = {faculties_Ary} />
            </div>
          }
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
