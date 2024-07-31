import React, { useEffect, useState } from 'react';
import { blogAry } from '../../../public/assets/sampleArry';
import Button1 from '../buttons/button1/button1';

const Blogs = () => {

    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(true)
        }, 0)
    }, [])

    const handleBlogs = () => {
        console.log("All Blogs")
    }
  return (
    <>
    {/* {isLoading &&  */}
    <div className="container my-5">
        <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
                <h1 className="m-0 mb-3 main-title">Blogs</h1>
            </div>
        </div>
        <div className="row blogSection">
            {blogAry && blogAry.map((item, index) => {
                return (
                <div className="col-md-4 mb-3" key={index}>
                    <div className="card">
                        {item.image && <img className="blogImg" src={item.image} alt="" />}
                        <div className="m-0 bg_dark pt-3 ">
                            <p className='mb-2 blogDate'>{item.date}</p>
                            <h4 className="blogTitle">{item.title}</h4>
                            <p className="m-0 blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <a role="button" className='text-decoration-none p-0 pt-2 btn readBtn'>Read more <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                )
            })}            
        </div>
        <div className="row">
            <div className="col-12 mt-4 d-flex justify-content-center blogBtn">
                <Button1 value = "View All Blogs" handleClick = {handleBlogs}/>
            </div>
        </div>
    </div>
    {/* } */}
    </>
  )
}

export default Blogs