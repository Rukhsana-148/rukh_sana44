// data
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const serviceData = [
  {
    description: 'Modern Webpage Design',
  },
  {
    description: 'User friendly and attractive landing page',
  },
  {
   
    description: 'Responsive website',
  },
  {
    
    description: 'Realtime Projects',
  },
  {
    
    description: 'Modern & attractive portfolio',
  },
  {
    
    description: 'Full Dynamic Website',
  },

];

const ServiceSlider = () => {
  return <Swiper breakpoints={
    {320:{
      slidesPerView:1,
      spaceBetween:15
    },
    640:{
      slidesPerView:3,
      spaceBetween:15
    }
    
    }}
    freeMode={true}
    pagination={{
      clickable:true
    }}
    modules={[FreeMode, Pagination]}
    className='h-[140px] sm:h-[340px]'
    >
  {
    serviceData.map((item, index)=>{
      return <SwiperSlide key={index}>
        <div className='bg-primary/70 h-max rounded-lg px-6 py-8 flex xl:flex-row
         sm:flex-col gap-x-6  sm:gap-x-0 group cursor-pointer hover:bg-primary/100 transition-all duration-300'>
        <p className='text-white'>{item.description}</p>
        </div>
       
      </SwiperSlide>
    })
  }
  </Swiper>;
};

export default ServiceSlider;
