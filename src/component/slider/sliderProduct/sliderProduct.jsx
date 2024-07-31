import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/router';

const prod_image1 = '/assets/images/product1.png';

const SliderProduct = ({value}) => {

  const Router = useRouter();
  console.log('props', value)

  if(value) {
    return (
      <div className="mb-3 ourProductSection">
        <div className="card" 
        onClick={() => Router.push(`/view-courses/${value.id}`)}
        >
            {prod_image1 && <img className="ourProImg" src={prod_image1} alt="" />}
            <a className="m-0 bg_dark p-2 d-flex align-items-center justify-content-between text-decoration-none">
                <h5 className="m-0 ourtitle">{value.name}</h5>
                <IoIosArrowForward />
            </a>
        </div>
    </div>
    )
  }
  else {
    null
  }
}

export default SliderProduct