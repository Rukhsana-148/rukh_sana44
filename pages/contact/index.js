/* eslint-disable react/no-unescaped-entities */
import {
FaPhone, FaEnvelope, FaMapLocation
} from 'react-icons/fa6'
import Circles from '/components/Circles'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { fadeIn, variants } from '../../variants';
const contactInfo = [
  {
    icon: <FaPhone/>,
    des : '01309655879'
  },
  {
    icon: <FaPhone/>,
    des : '01311376014'
  },
  {
    icon: <FaEnvelope/>,
    des : 'rukhsana190148@gmail.com'
  }
  , {
    icon: <FaEnvelope/>,
    des :  'rukhsanakhatun230@gmail.com'
  },
  {
    icon: <FaMapLocation/>,
    des : 'Monirampur, Jashore'
  }
]
const Contact = () => {
  return <div className='h-full bg-primary/30 overflow-visible'>
    <div class="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
  <div className='flex flex-col w-full max-w-[700px] '>

    <h2 className='text-center pt-2 sm:pt-7 h2 mt-9 sm:mt-[50px] '>Let's <span className='text-accent'>contact.</span></h2>
     <motion.div
         variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='ml-[150px] mt-3 sm:mt-5'>
      {
        contactInfo.map((item, index)=>{
          return(
            <div key={index} className='mb-5'>
             <p className='flex text-white'><span className='text-accent/60 pr-2'>{item.icon}</span>{item.des}</p>
            </div>
          )
        })
      }
     </motion.div>
  </div>
    </div>
  </div>;
};

export default Contact;
