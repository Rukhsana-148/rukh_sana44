// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];


import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import { fadeIn, variants } from '../../variants';
const TestimonialSlider = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 sm:mt-10'>
          <motion.h2 variants={fadeIn('up', 1)} initial='hidden' animate='show' exit='hidden' className='h2 mt-[130px] sm:mt-0'>My Work<span className='text-accent'>.</span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden'
          className='sm:mb-4 max-w-[400px] max-auto lg:mx-0 sm:mt-4 mt-2 text-sm sm:text-lg text-center sm:text-left'
          >I am fullstack webdevelpoer. I have 30+ front end projects and 10+ backend projects.
          </motion.p>
        </div>
        <motion.div
         variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden'
        className='w-full xl:max-w-[65%] xl:h-[100%] xl:flex-row mt-14 sm:mt-0'>
        <WorkSlider/>
        </motion.div >
      
      </div>
      <Bulb/>
    </div>
  </div>;
};

export default TestimonialSlider;

