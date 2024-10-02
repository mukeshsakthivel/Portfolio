import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../assets/Infofeed.png';
import slide_image_2 from '../assets/lms.png';
import slide_image_3 from '../assets/social_media_post.png';
import slide_image_4 from '../assets/react_post.png';
import '../style/App.css';

const Project = () => {
  return (
    <section className='tranding mt-10' id="Project">
      <div className="container">
        <h3 className="text-center section-heading">PROJECTS</h3>
        {/* <div className="text-center section-subHeading explorebox"><h4>Completed Projects</h4></div> */}
        <div className="container mt-20" >
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
            modules={[Autoplay,Pagination,Navigation,EffectCoverflow]}
            className="tranding-slider"
          >
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={slide_image_1} alt="Vehicle Project" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={slide_image_2} alt="BackEnd Project" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={slide_image_3} alt="Astro.js Project" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={slide_image_4} alt="Recipe Project" />
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
  );
}

export default Project;