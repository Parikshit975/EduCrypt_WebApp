import React from 'react'
import Button1 from '../buttons/button1/button1';
import Button2 from '../buttons/button2/button2';
import { IoStar } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { useRouter } from 'next/router';

const content_image = '/assets/images/slideImg.png';
const content_title = "Selection Hi Jawab Hai Something Special For VCAINS"

const Card1 = ({value}) => {

    const Router = useRouter()

    const handleExplore = () => {
        Router.push(`/view-courses/details/${value.id}`);
    }
  return (
        
            <div className="col-md-3">
                <div className="card border-0 shadow b-radius mb-3 p-2 course_card m-4">
                    {value.cover_image && <img style={{borderRadius: "10px"}} src={value.cover_image} className="card-img-top" alt="..." />}
                    {/* <div className="m-0 free-badge">FREE</div> */}
                    <div className="card-body pt-3 px-0 pb-0">
                        <h6 className="mb-2 slideTitle">
                            {value.title}
                        </h6>
                        <div className="courserate">
                            <div className='d-flex'>
                                <div className="courseRating">
                                    <span className="rating"><IoStar /> {4.1}</span>
                                </div>
                                <div className="courseReview">
                                    <span className="review"><p>{165} reviews</p></span>
                                </div>
                            </div>
                        </div>
                        <span className="courseDur">
                            <span className="courseValidity">
                                <span className='validity d-flex'><MdOutlineCalendarMonth /> Validity: <p>{`${value.validity}`}</p></span>
                            </span>
                        </span>
                        <hr />
                        <div className="coursePriceContainer">
                            <div className="coursePrice d-flex align-items-center pb-2 m-0">
                                <div className='Price'>
                                    <FaRupeeSign className='rupeeSign' /><span className='costPrice'>{value.course_sp}</span>
                                </div>
                                {value.course_sp !== value.mrp &&
                                    <>
                                    <div className='offPriceContainer'>
                                        <div className='offPrice'>
                                        </div>
                                        <FaRupeeSign className='rupeeSign2' />{value.mrp}
                                    </div>
                                    <div className='offPricePercentage'>
                                        {`(${value.discount}% Off)`}
                                    </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="d-flex justify-content-between onlineCourseButtons">
                            <Button2 value = "Explore" handleClick = {handleExplore} />
                            <Button1 value = "Buy Now" handleClick = {handleExplore} />
                        </div>
                    </div>
                </div>
            </div>
        
  )
}

export default Card1