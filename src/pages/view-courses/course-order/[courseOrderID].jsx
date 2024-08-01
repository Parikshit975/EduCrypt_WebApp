import React from 'react'
import Header from '@/component/header/header';
import { useRouter } from 'next/router'
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import Button1 from '@/component/buttons/button1/button1';
import Button2 from '@/component/buttons/button2/button2';

const CourseOrderID = () => {

    const router = useRouter()
    const {courseOrderID} = router.query;
  return (
    <>
      <Header />
      <div className="container-fluid p-0 m-0" style={{ overflow: "hidden" }}>
          <div className="container breadcrumb_container">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-2 cursor">
                <li
                  className="breadcrumb-item"
                  onClick={() => router.push("/")}
                >
                  Home
                </li>
                <li className="breadcrumb-item" onClick={() => router.back()}>
                  Online Courses
                </li>
                <li className="breadcrumb-item" onClick={() => router.back()}>
                    Details
                  </li>
                <li className="breadcrumb-item active">Buy Now</li>
              </ol>
            </nav>
            <div className='container row mt-2 orderContainer'>
              <div className='col-7'>
                <div className='orderTitle mt-4'>
                  <span>Order</span>
                  <table style={{width: '100%'}}>
                    <thead className='d-flex justify-content-between'>
                      <tr>PRODUCTS</tr>
                      <tr>PRICE</tr>
                    </thead>
                    <tbody className='row'>
                      <tr className='col-9 d-flex align-items-center'>
                        <div>
                          <span><IoCloseCircleOutline /></span>
                          <span><img src="" /></span>
                          <span>Selection Hi Jawab Hai Something
                          Special For VCAINS</span>
                        </div>
                      </tr>
                      <tr className='col-3'>
                        <div className="coursePriceContainer">
                          <div className="coursePrice pb-2 m-0">
                            <div className='Price'>
                                <FaRupeeSign className='rupeeSign' /><span className='costPrice'>1999</span>
                            </div>
                            {/* {value.course_sp !== value.mrp && */}
                              <>
                              <div className='offPriceContainer'>
                                <span><p className='offPrice'></p>
                                  <FaRupeeSign className='rupeeSign2' />{3000}</span>
                              </div>
                              
                              </>
                            {/* } */}
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='col-5 '>
                <div className='orderTitle mt-4 d-flex'>
                  <Button1 value = {"One Time Payment"} />
                  <Button2 value = {"EMI Payment"} />
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CourseOrderID