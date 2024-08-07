import React, { useEffect, useState } from 'react'
import Header from '@/component/header/header'
import Banner from '@/component/banner/banner'
import TrendingCourses from '@/component/trendingCourses/trendingCourses'
import Free_Test_Course from '@/component/freeTest&Course/freeTest&Course'
import OurProduct from '@/component/ourProducts/ourProduct'
import Blogs from '@/component/blogs/blogs'
import Testimonial from '@/component/testimonial/testimonial'
import GetInTouch from '@/component/getInTouch/getInTouch'
import Footer from '@/component/footer/footer'
import { getCourse_Catergory_Service, getCourse_service, getCurrentAffair_service } from '@/services'
import { useSelector, useDispatch } from 'react-redux'
import { decrypt, get_token, encrypt } from '@/utils/helpers'
import { all_CategoryAction, all_CourseAction, all_CurrentAffair } from '@/store/sliceContainer/masterContentSlice'
import Achievement from '@/component/achievement/achievement'

const index = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    setTimeout(() => {
      fetchContentData();
      fetchCourseData();
      fetchCurrentAffair();
      window.scrollTo(0, 0)
    }, 1500);
  }, [])
  

  const token = get_token()
  const fetchContentData = async () => {
    const formData = new FormData();
    const response_content_service = await getCourse_Catergory_Service(formData);
    const content_service_Data = decrypt(response_content_service.data, token)
    // console.log('bannerResponse', content_service_Data)
    if(content_service_Data.status){
      dispatch(all_CategoryAction(content_service_Data.data))
    }
  }

  const fetchCourseData = async () => {
    const formData = {
      'course_type':0,
      'page':1,
      'sub_cat':1,
      'main_cat':0
    }
    const response_getCourse_service = await getCourse_service(encrypt(JSON.stringify(formData),token));
    const response_getCourse_data = decrypt(response_getCourse_service.data, token)
    if(response_getCourse_data.status){
      dispatch(all_CourseAction(response_getCourse_data.data))
      // console.log('course', response_getCourse_data)
    }
  }

  const fetchCurrentAffair = async () => {
    const formData = {}
    const response_getCurrentAffairs_service = await getCurrentAffair_service(encrypt(JSON.stringify(formData), token))
    const response_getCurrentAffairs_data = decrypt(response_getCurrentAffairs_service.data, token);
    console.log('response_getCurrentAffairs_data', response_getCurrentAffairs_data)
    if(response_getCurrentAffairs_data.status){
      dispatch(all_CurrentAffair(response_getCurrentAffairs_data.data))
    }
  }
  
  return (
    <>
        <Header />
        <Banner />
        <TrendingCourses />
        <Free_Test_Course />
        <OurProduct value = "product" />
        <Achievement />
        <Blogs />
        <Testimonial />
        <GetInTouch />
        <Footer />
    </>
  )
}

export default index