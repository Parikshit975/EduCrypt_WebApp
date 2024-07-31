import React from 'react'
import Button1 from '../buttons/button1/button1'
import { CiSearch } from "react-icons/ci";

const edulogo = '/assets/images/edulogo.png'

const Header = () => {

  // const isBrowser = typeof window !== "undefined";



  return (
    <>
      <nav className="px-5 navbar navbar-expand bg-white" id="eduNav">
          <div className="container-fluid">
              <a className="m-0" href="#">
                  {edulogo && <img className="logoImg" src={edulogo} alt="" />}
              </a>
              <div className="input-group ms-3 search">
                  <span style={{padding:"10px",background: "#F1F1F1",color: "#717171",lineHeight: '10px',fontSize: '20px'}} className="d-none d-md-block input-group-text border-0" id="basic-addon1">
                      {/* <i className="bi bi-search"></i> */}
                      {/* <CiSearch /> */}
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1833 18C17.013 17.8919 16.8506 17.7718 16.6973 17.6407C15.3362 16.2795 13.975 14.9252 12.6139 13.5776C12.565 13.5295 12.5199 13.4776 12.4791 13.4224C11.5507 14.2111 10.4447 14.7626 9.25612 15.0293C8.06753 15.296 6.83196 15.2701 5.65561 14.9537C3.84257 14.5044 2.26863 13.3816 1.2536 11.8135C0.243963 10.2947 -0.185398 8.46319 0.043956 6.65383C0.27331 4.84447 1.14606 3.17805 2.50275 1.95912C3.85943 0.740187 5.60941 0.0501375 7.43291 0.0150766C9.25641 -0.0199844 11.0316 0.602299 12.4342 1.76818C13.2132 2.39907 13.8554 3.18215 14.3216 4.0696C14.7878 4.95705 15.0682 5.93023 15.1456 6.92968C15.2415 7.92495 15.1366 8.92937 14.8371 9.88333C14.5376 10.8373 14.0495 11.7214 13.402 12.4832C13.451 12.5363 13.4959 12.5853 13.5408 12.6262C14.902 13.9873 16.2631 15.3485 17.6243 16.7096C17.7554 16.8629 17.8755 17.0253 17.9836 17.1956V17.4814C17.9439 17.6047 17.8754 17.7168 17.7838 17.8084C17.6922 17.9 17.5801 17.9684 17.4569 18.0082L17.1833 18ZM1.3271 7.60756C1.3271 8.84728 1.69473 10.0592 2.38349 11.09C3.07224 12.1208 4.05118 12.9241 5.19654 13.3986C6.34189 13.873 7.60221 13.9971 8.81811 13.7553C10.034 13.5134 11.1509 12.9164 12.0275 12.0398C12.9041 11.1632 13.5011 10.0463 13.743 8.83041C13.9848 7.61451 13.8607 6.35419 13.3863 5.20883C12.9118 4.06348 12.1084 3.08453 11.0776 2.39578C10.0468 1.70703 8.83499 1.33939 7.59526 1.33939C6.7725 1.33939 5.95781 1.5016 5.19778 1.8167C4.43776 2.13181 3.74729 2.59363 3.16589 3.17579C2.58449 3.75795 2.12356 4.44902 1.80945 5.20946C1.49533 5.96989 1.3342 6.7848 1.33527 7.60756H1.3271Z" fill="#484848"/>
                        </svg>

                  </span>
                  <input type="text" className="d-none d-md-block searchBar"  placeholder="What are you looking for..." aria-label="Username"
                      aria-describedby="basic-addon1" />
              </div>
                <Button1 value = "Login/Register"/>
          </div>
      </nav>
    </>
  )
}

export default Header