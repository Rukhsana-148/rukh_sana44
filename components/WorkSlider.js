// data
import Image from 'next/image';
import Link from 'next/link'
import {FaLink} from 'react-icons/fa6'
const workSlides = [
  
        {
          title: 'Landing Page',
          link: 'https://rukhsana-148.github.io/Night/',
          path:'/night.png',

        },
        {
          title: 'E-commerce Webpage Design',
          link: 'https://rukhsana-148.github.io/Food-Tamplate-12/',
          path:'/commerce.png',
        },
       
        {
          title: 'Dynamic Website about Resutarnt',
          link: 'https://rukhsana-148.github.io/Resturant/',
          path:'/dy.png',
        },
    
        {
          title: 'Hospital Management Project',
          path: '/hospital.png',
        },
        {
          title: 'Car Rent Service',
          path: '/car.jpg',
        },
        {
          title: 'Quize Application',
          path: '/quize.png',
        },
        {
          title: 'Safety Deposite Box',
          path: '/bank.png',
        },
        {
          title: 'Online Market System',
          path: '/slide_4.jpeg',
        },
    
    
      ];

// data
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const WorkSlider = () => {
  return <Swiper 
  spaceBetween={10}
    pagination={{
      clickable:true
    }}
    modules={[Pagination]}
    className='h-[300px] sm:h-[400px] -mt-[50px] sm:mt-0 pb-5 sm:pb-0'
    >
  {
    workSlides.map((slides, index)=>{
      return <SwiperSlide key={index}>
        <div className='bg-primary px-5 py-3 rounded-lg pb-4 -mt-4 sm:mt-6 h-full'>
          <p className='sm:py-5 text-white text-xl'>{slides.title}</p>
          <Link href={`${slides.link}`} key={index} className='mt-2 text-white text-xl'>
         <FaLink/>
        </Link>
        <Image src={slides.path} width={500} height={300}/>
        
        </div>
   
        
      </SwiperSlide>
    })
  }
  </Swiper>;
};

export default WorkSlider;

