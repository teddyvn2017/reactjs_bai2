import React from 'react'
import SwiperTestimonial from './SwiperTestimonial.jsx'
// import testimonials from '../assets/img/testimonials.png'
// import Left from './icon/Left.jsx'
// import Right from './icon/Right.jsx'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { register } from "swiper/element/bundle";
// register();



const Testimonial = () => {

    // const navigationPrevRef = React.useRef(null)
    // const navigationNextRef = React.useRef(null)


    return (
        <section className="mt-12">
        <div className="container max-w-[1280px]">
            <h1 className="text-[34px] text-title font-semibold text-center">Testimonials</h1>
           
            {/* Kiểm tra đã có swiper trong thư mục node_modules hay chưa                
                    nếu chưa có thì nên install ngoài cửa sổ Terminal với quyền admin
                    click phải thư mục node_modules và chọn run admin
                */}
            <SwiperTestimonial />
            {/* <div className="testimonial__swiper swiper flex flex-col justify-center"> */}
                {/* <div className="swiper-wrapper mt-8">
                    <div className="swiper-slide">
                        <p className="text-desc text-center md:w-2/3 mx-auto">
                            ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. 
                            Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. 
                            Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’
                        </p>
                        <div className="mt-8 text-center">
                            <img src={testimonials} alt="image" className="rounded-full mx-auto" />
                            <h4 className="mt-4 text-mau_den text-base font-semibold">Michelle Anna</h4>
                            <h4 className="text-mau_den text-base">CEO, Co-Founder, XYZ Inc.</h4>
                        </div>
                    </div>
                    
                    
                </div> */}

                
               
            {/* </div> */}
  
        </div>

    </section>
    )
}

export default Testimonial

