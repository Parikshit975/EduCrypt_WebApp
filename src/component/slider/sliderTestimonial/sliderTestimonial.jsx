import React from 'react'
import { ImQuotesRight } from "react-icons/im";

const SliderTestimonial = ({value}) => {
  // const description = value.substring(0, 100)

  return (
    <div className="card p-2 border-0 shadow test-Radius">
        <div className="gap-1 d-flex align-items-center justify-content-start">
            {/* <i className="cardQuotes fas fa-quote-right"></i> */}
            <ImQuotesRight className='cardQuotes'/>
            <div>
              {value.file && <img className="testImg" src={value.file} alt="" />}
            </div>
            <div className="">
                <h4 className="testTitle">{value.title}</h4>
                <div className="m-0 test-text">{'Selected As IBPS SO 2021'}</div>
            </div>
        </div>
        <div className="m-0 p-text" dangerouslySetInnerHTML = {{__html: value.description}}>    
        </div>
    </div>
  )
}

export default SliderTestimonial