// data
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const educationData = [
  {
    degree: 'Secondary School Certificate',
    result : 'GPA-5.00',
    year: '2012-17',
    institute : 'Nengurahut School and College'
    
  },
  {
    degree: 'Higher School Certificate',
    result : 'GPA-5.00',
    year: '2017-19',
    institute : 'Monirampur Mohila College'
  },
  {
    degree: 'BSC(Eng.) in Computer Science and Engineering',
    result : 'studying',
    year: '2019-',
    institute : 'Jashore University of Science and Technology'
  },
 

];

const EducationSlide = () => {
  return <>
  {
    educationData.map((item, index)=>{
        return(
            <div key={index} className='mb-4'>
                <h3 className='sm:text-lg'>{item.degree}<span className='text-red-500 sm:font-bold'>({item.result})</span></h3>
                <p>{item.year}</p>
                <h2 className='text-red-600 font-extrabold sm:font-bold sm:text-xl'>{item.institute}</h2>
            </div>
        )
    })
  }
  </>
};

export default EducationSlide;
