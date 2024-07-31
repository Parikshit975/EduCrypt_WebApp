import React from 'react'
import Button1 from '../../buttons/button1/button1'
import { useRouter } from 'next/router'
import { IoStar } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

const SliderContent = ({freeCourse, title}) => {

    const router = useRouter()
    // console.log('freeCourse', freeCourse)

    const handleExplore = () => {
        console.log("Clicked ==========");
        router.push(`/view-courses/details/${freeCourse.id}`);
        // navigate('/viewDetail/422')
        // location.reload()
    }
    // const content_image = props.value.image;
    // const content_title = props.value.title;

    
    if(freeCourse) {
        return (
        <div className="card border-0 shadow b-radius mb-3 p-2 freeCard">
             {<img style={{borderRadius: "10px"}} src={title === "Related Course" ? freeCourse.desc_header_image : freeCourse.cover_image ? freeCourse.cover_image : 'https://picsum.photos/536/354'} className="card-img-top" alt="..." />}

            {/* <div className="m-0 free-badge">FREE</div> */}
            <div className="card-body pt-3 px-0 pb-0">
                <h6 className="slideTitle">
                    {freeCourse.title}
                </h6>
                {/* <div className="m-0 clearfix">
                    <div className="countTitle"><i className="fab fa-youtube"></i> 120 videos</div>
                    <div className="countTitle ms-3"><i className="far fa-file-alt"></i> 40 PDF's</div>
                </div> */}
                <div className="courserate">
                    <div className='d-flex align-items-center'>
                        <span className="rating"><IoStar /> {4.1}</span>
                        <p className="m-0 review">{166} reviews</p>
                    </div>
                    <p className="m-0 freeStripe">
                        Free
                    </p>
                </div>
                <hr />
                {/* <button className="btn exploreBtn">Explore now</button> */}
                <div className="courseBtn">
                    <Button1 value = "Explore" handleClick = {handleExplore} />
                </div>
                
            </div>
        </div>
        )
    }
    else {
        null
    }
}

export default SliderContent