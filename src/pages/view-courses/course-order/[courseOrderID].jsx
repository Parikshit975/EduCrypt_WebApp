import React, { useState, useEffect } from "react";
import Header from "@/component/header/header";
import { useRouter } from "next/router";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import Button1 from "@/component/buttons/button1/button1";
import Button2 from "@/component/buttons/button2/button2";
import { get_token, encrypt, decrypt, isValidData } from "@/utils/helpers";
import { getCoupon_service, getCourseDetail_Service } from "@/services";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CourseOrderID = () => {
  const [courseData, setCourseData] = useState("");
  const [couponData, setCouponData] = useState(null);
  const [id, setId] = useState('');
  const [titleName, setTitleName] = useState('');
  const router = useRouter();
  const { courseOrderID } = router.query;
  // const id = courseOrderID.slice(courseOrderID.indexOf(':') +1, courseOrderID.length)
  // const titleName = courseOrderID.slice(0, courseOrderID.indexOf(':'))
  const token = get_token();
  console.log("courseOrderID", courseOrderID);
  
  useEffect(() => {
    if(courseOrderID) {
      fetchCouponService(courseOrderID.slice(courseOrderID.indexOf(':') +1, courseOrderID.length));
      fetchCourseDetail(courseOrderID.slice(courseOrderID.indexOf(':') +1, courseOrderID.length));
      setId(courseOrderID.slice(courseOrderID.indexOf(':') +1, courseOrderID.length))
      setTitleName(courseOrderID.slice(0, courseOrderID.indexOf(':')))
    }
  }, [courseOrderID]);

  const fetchCouponService = async (id) => {
    const formData = {
      'course_id': id
    }
    const response_getCoupon_service = await getCoupon_service(encrypt(JSON.stringify(formData), token));
    const response_getCouponService_data = decrypt(response_getCoupon_service.data, token);
    console.log('response_getCouponService_data',response_getCouponService_data)
    if(response_getCouponService_data.status) {
      setCouponData(response_getCouponService_data.data)
    }
  }

  const fetchCourseDetail = async (id) => {
    const formData = {
      'course_id': id,
      'page': 1,
    };
    const response_getCourseDetail_service = await getCourseDetail_Service(encrypt(JSON.stringify(formData), token));
    const response_getCourseDetail_data = decrypt(response_getCourseDetail_service.data,token);
    console.log("get_courseDetail", response_getCourseDetail_data);
    if (response_getCourseDetail_data.status) {
      setCourseData(response_getCourseDetail_data.data.course_detail);
    }
  };



  return (
    <>
      <Header />
      <div className="container-fluid p-0 m-0" style={{ overflow: "hidden" }}>
        <div
          className="container breadcrumb_container"
          style={{ padding: "20px 5%" }}
        >
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb mb-2 cursor">
              <li className="breadcrumb-item" onClick={() => router.push("/")}>
                Home
              </li>
              <li className="breadcrumb-item" onClick={() => router.back()}>
                {titleName}
              </li>
              <li
                className="breadcrumb-item"
                onClick={() =>
                  router.push(`/view-courses/details/${courseOrderID}`)
                }
              >
                Details
              </li>
              <li className="breadcrumb-item active">Buy Now</li>
            </ol>
          </nav>
          <div className="container row mt-2 orderContainer">
            <div className="col-8">
              <div className="orderTitle mt-4">
                <div className="" style={{ margin: "10px 30px" }}>
                  Order
                </div>
                {courseData && (
                  <table style={{ width: "100%" }}>
                    <thead className="d-flex justify-content-between">
                      <tr className="col-9">PRODUCTS</tr>
                      <tr className="col-3 d-flex justify-content-center">
                        PRICE
                      </tr>
                    </thead>
                    <tbody className="row pt-2">
                      <tr className="col-9 d-flex align-items-center">
                        <span className="p-3 d-flex align-items-center">
                          <span>
                            <IoCloseCircleOutline />
                          </span>
                          <span
                            style={{
                              borderRadius: "10px",
                              padding: "17px 0px",
                              boxShadow:
                                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                              margin: "0px 10px",
                            }}
                          >
                            <img
                              style={{ width: "60px" }}
                              src={courseData.desc_header_image}
                            />
                          </span>
                          <p className="pt-2">{courseData.title}</p>
                        </span>
                      </tr>
                      <tr className="col-3 mt-3">
                        <span className="coursePriceContainer">
                          <span className="coursePrice pb-2 m-0 d-flex flex-column align-item-center">
                            <span className="Price">
                              <FaRupeeSign className="rupeeSign" />
                              <span className="costPrice">
                                {courseData.is_gst == 0 ? Number(courseData.mrp) + Number(courseData.tax): courseData.mrp}
                                {/* {courseData.course_sp} */}
                              </span>
                            </span>
                            {/* {value.course_sp !== value.mrp && */}
                            <>
                              <span className="offPriceContainer" style={{color: '#A8A8A8'}}>
                                <span className="offPrice"></span>
                                <FaRupeeSign className="rupeeSign2" />
                                {courseData.course_sp}
                                {/* {courseData.mrp} */}
                              </span>
                            </>
                            {/* } */}
                          </span>
                        </span>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            <div className="col-4 ">
              <div className="orderButton mt-4 d-flex row">
                <span className="col-6 m-0 oneTime p-0">
                  <Button1 value={"One Time Payment"} />
                </span>
                <span className="col-6 m-0 p-0">
                  <Button2 value={"EMI Payment"} />
                </span>
              </div>
              <div className="orderTitle mt-2">
                <span className="m-4">Have a Coupon Code?</span>
                <div className="d-flex m-4 mt-2 applyBtn">
                  <span>
                    <input type="" placeholder="Enter Coupon Here" />
                  </span>
                  <Button2 value={"Apply"} />
                </div>
              </div>
              <div className="orderTitle mt-2">
                <span className="m-4">Payment Details</span>
                {courseData && (
                  <table className="w-100 mt-2 totalData">
                    <tbody>
                      {/* <tr className="row">
                        <td className="col-8">
                          <span className="p-4">Package Price </span>
                        </td>
                        {courseData.course_sp && (
                          <td className="col-4 t_price">
                            <FaRupeeSign className="rupeeSign2" />
                            {courseData.course_sp}
                          </td>
                        )}
                      </tr> */}
                      <tr className="row">
                        <td className="col-8">
                          <span className="p-4">Price </span>
                        </td>
                        {courseData.course_sp && (
                          <td className="col-4 t_price">
                            <FaRupeeSign className="rupeeSign2" />
                            {couponData ? couponData.mrp : courseData.mrp}
                          </td>
                        )}
                      </tr>
                      <tr className="row">
                        <td className="col-8">
                          <span className="p-4">GST </span>
                        </td>
                        {courseData.course_sp && (
                          <td className="col-4 t_price">
                            <FaRupeeSign className="rupeeSign2" />
                            {couponData ? couponData.tax : courseData.tax}
                          </td>
                        )}
                      </tr>
                      <hr />
                      <tr className="row">
                        <td className="col-8">
                          <span className="p-4 price_total">Total </span>
                        </td>
                        {courseData.course_sp && (
                          <td
                            className="col-4 price_total"
                            style={{ fontWeight: 700 }}
                          >
                            <FaRupeeSign className="rupeeSign2" />
                            {couponData ? (Number(couponData.mrp) + Number(couponData.tax)) : (Number(courseData.mrp) + Number(courseData.tax))}
                          </td>
                        )}
                      </tr>
                    </tbody>
                  </table>
                )}
                <div className="checkOutBtn m-3">
                  <Button1
                    value={
                      <>
                        Proceed To Checkout <HiOutlineArrowNarrowRight />
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseOrderID;
