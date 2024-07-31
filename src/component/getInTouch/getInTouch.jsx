import React, { useState, useEffect } from 'react'
import Button1 from '../buttons/button1/button1'

const getInTouch_image1  = '/assets/images/getInTouch.png'

const GetInTouch = () => {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(true)
        }, 0)
    }, [])

  return (
    <>
    <div className='container mb-3 git_container'>
        <div className='row'>
            <div className='col-md-6 col-lg-6 col-sm-6'>
                {/* <div className='row'> */}
                    <div className='git_heading'>
                        <h1 className='main-title'>Get In Touch</h1>
                    </div>
                    <div className='git_title'>
                        <p className='mb-2'>
                            Lorem ipsum dolor sit at, consectetur adipielit. Facilisi <br /> fermentum, dignissim pharetra.
                        </p>
                    </div>
                    <div className='form d-flex flex-column'>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email' />
                        <textarea type='textarea' placeholder='Input Text' rows="5" />
                        <div className='sendbtn'>
                            <Button1 value="Send" />
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className='col-md-6 col-lg-6 col-sm-6 img_mainContainer'>
                <div className='img_container'>
                    {getInTouch_image1 && <img src={getInTouch_image1} alt='' />}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default GetInTouch