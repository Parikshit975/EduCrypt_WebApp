import axiosClient from "./axios";


// Master hit
const MasterUrl = 'master_hit/';

export const getAppDetial = async (params) => await axiosClient.post(MasterUrl + 'get_app_details', params);
export const getCourse_Catergory_Service = async (params) => await axiosClient.post(MasterUrl + 'content', params);
export const getTestimonialService = async (params) => await axiosClient.post(MasterUrl + 'get_testimonial_list', params)


// Courses

const CourseUrl = 'course/';

export const getCourse_service = async (params) => await axiosClient.post(CourseUrl + 'get_courses', params)
export const getCourseDetail_Service = async (params) => await axiosClient.post('course_deprecated/get_course_detail' ,params)


// Coupons

const CouponUrl = 'coupon/';
export const getCoupon_service = async (params) => await axiosClient.post(CouponUrl + 'get_coupon_over_course' , params)

// Current Affairs

const currentAffairUrl = 'current_affairs/';
export const getCurrentAffair_service = async (params) => await axiosClient.post(currentAffairUrl + 'current_affair_list', params)

// Faculties

const facultyUrl = 'educators/';

export const getFaculty_Service = async (params) => await axiosClient.post(facultyUrl + 'get_educators', params)