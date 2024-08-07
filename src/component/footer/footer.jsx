import React, { useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import { useRouter } from 'next/router';
import Link from 'next/link';

const eduLogo1  = '/assets/images/eduLogo1.png'
const playStoreLogo = '/assets/images/googleStore.png';
const appleStoreLogo = '/assets/images/appleStore.png';
const windowsLogo = '/assets/images/windows.png';


const Footer = () => {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() =>{
        setTimeout(() => {
            setIsLoading(true);
        }, 0)
    }, [])
    
  return (
    <>
      {/* {isLoading &&  */}
      <footer className="footerSection">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 offset-lg-1">
              <div className="footerLogo">
                {eduLogo1 && <img src={eduLogo1} alt="" className="" />}
              </div>
              <div className="m-0 mb-2 orgName">
                Educrypt Edu Solutions Pvt. Ltd.
              </div>
              <div className="m-0 mb-2 orgAddress">
                <span className="text-white fw-semibold">Address:</span> <br />
                38 opebi Road, Ikeja, Lagos State, Nigeia.
              </div>
              <div className="m-0 mb-2 orgAddress">
                <span className="text-white fw-semibold">Phone:</span> <br />
                +2349022396389
              </div>
              <div className="m-0 mb-2 orgAddress">
                <span className="text-white fw-semibold">Email:</span> <br />
                contact@contentionary.com
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <h4 className="m-0 my-3 footTitle">Comapany</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/about" className="text-decoration-none" >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="text-decoration-none">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Media
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Career
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <h4 className="m-0 my-3 footTitle">Products</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Online/Offline Mock Tests
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Online Live Classes
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Video Courses
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    E-Books
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Free Study Material
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Pervious Yearly Paper
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <h4 className="m-0 my-3 footTitle">Help & Support</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    FAQ's
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Refund Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none">
                    Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <h4 className="m-0 my-3 footTitle">Download App</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  {playStoreLogo && (
                    <img style={{ width: "96px" }} src={playStoreLogo} alt="" />
                  )}
                </li>
                <li className="mb-2">
                  {appleStoreLogo && (
                    <img
                      style={{ width: "96px" }}
                      src={appleStoreLogo}
                      alt=""
                    />
                  )}
                </li>
                <li className="mb-2">
                  {windowsLogo && (
                    <img style={{ width: "96px" }} src={windowsLogo} alt="" />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="footerBottom gap-4 d-flex flex-wrap align-items-center
         justify-content-center justify-content-sm-center justify-content-md-between"
        >
          <p className="mb-2 copyrighttitle">
            Educrypt All Right Reserved, 2022
          </p>
          <div className="mb-2 flex-wrap foot-social">
            <a href="#" className="m-0 text-decoration-none social-icon">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" className="m-0 text-decoration-none social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="m-0 text-decoration-none social-icon">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" className="m-0 text-decoration-none social-icon">
              <i class="bi bi-send-fill"></i>
            </a>
            <a href="#" className="m-0 text-decoration-none social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
      {/* } */}
    </>
  );
}

export default Footer