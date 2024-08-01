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

    const router = useRouter()

    const handleExplore = () => {
        router.push(`/view-courses/details/${value.id}`);
    }

    const handleBuy = () => {
        router.push(`/view-courses/course-order/${value.id}`);
    }
  return (
            <div className="col-md-3 p-0">
                <div className="card border-0 shadow b-radius mb-3 mt-2 p-2 course_card m-0">
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
                                    <span className="review"><p className='mb-1'>{165} reviews</p></span>
                                </div>
                            </div>
                        </div>
                        <span className="courseDur">
                            <span className="courseValidity">
                                <span className='validity d-flex'><MdOutlineCalendarMonth /> Validity: <p className='m-0'>{`${value.validity}`}</p></span>
                            </span>
                        </span>
                        <hr class="dotted-divider" />
                        {value.mrp != 0 && 
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
                        }
                        {value.mrp == 0 ? 
                        <div className="courseBtn">
                            <Button1 value = "Explore" handleClick = {handleExplore} />
                        </div> 
                        :
                        <div className="d-flex justify-content-between onlineCourseButtons">
                            <Button2 value = "Explore" handleClick = {handleExplore} />
                            <Button1 value = "Buy Now" handleClick = {handleBuy} />
                        </div>
                        }
                    </div>
                </div>
            </div>
        
  )
}

export default Card1