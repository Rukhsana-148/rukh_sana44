
export const serviceData=[];
import EducationSlide from '../../components/EducationSlide'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import { fadeIn, variants } from '../../variants';
const Education = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4'>
          <motion.h2 variants={fadeIn('up', 1)} initial='hidden' animate='show' exit='hidden' className='h2 mt-20 md:mt-0'>My Result<span className='text-accent'>.</span></motion.h2>
        </div>
        <motion.div
         variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden'
        className='w-full xl:max-w-[65%] xl:h-[100%] xl:flex-row '>
        <EducationSlide/>
        </motion.div >
      
      </div>
      <Bulb/>
    </div>
  </div>;
};

export default Education;
