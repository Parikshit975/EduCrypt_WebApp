import React from 'react'
import { useRouter } from 'next/router'
import { IoStar } from "react-icons/io5";
import Button1 from '../buttons/button1/button1'

const Card2 = ({freeCourse}) => {

    const router = useRouter()

    const handleExplore = () => {
        console.log("Clicked ==========")
        router.push(`/view-detail/${freeCourse.id}`);
        // navigate('/viewDetail/422')
        // location.reload()
    }

  return (
    <div className="card border-0 shadow b-radius mb-3 p-2 freeCard">
            {freeCourse?.desc_header_image && <img style={{borderRadius: "10px"}} src={freeCourse.desc_header_image} className="card-img-top" alt="..." />}
            {/* <div className="m-0 free-badge">FREE</div> */}
            <div className="card-body pt-3 px-0 pb-0">
                <h6 className="mb-2 slideTitle">
                    {freeCourse?.title}
                </h6>
                {/* <div className="m-0 clearfix">
                    <div className="countTitle"><i className="fab fa-youtube"></i> 120 videos</div>
                    <div className="countTitle ms-3"><i className="far fa-file-alt"></i> 40 PDF's</div>
                </div> */}
                <div className="courserate">
                    <div className='d-flex'>
                        <div className="courseRating">
                            <span className="rating"><IoStar /> {4.1}</span>
                        </div>
                        <div className="courseReview">
                            <span className="review"><p>{165} reviews</p></span>
                        </div>
                    </div>
                    <div className="freeStripe m-0">
                    Free
                </div>
                </div>
                {/* <button className="btn exploreBtn">Explore now</button> */}
                <div className="courseBtn">
                    <Button1 value = "Explore" handleClick = {handleExplore} />
                </div>
            </div>
        </div>
  )
}

export default Card2