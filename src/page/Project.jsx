import React from 'react';
import '../style/Project.css';
import aboutPhoto from '../assets/photo2.jpg';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const Project = () => {
  return (
    <section id='Project'>
      <div className="fullproject" >
        <div className="projectbox">
          <h3>PROJECTS</h3>
        </div>
        <div className="projectswipe">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            className="tranding-slider"
          >
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={aboutPhoto} alt="Recipe Project" className='sliding-img' />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={aboutPhoto} alt="Recipe Project" className='sliding-img' />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={aboutPhoto} alt="Recipe Project" className='sliding-img' />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={aboutPhoto} alt="Recipe Project" className='sliding-img' />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>


      </div>
    </section>

  )
}

export default Project