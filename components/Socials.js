import Link from 'next/link';
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'
const Socials = () => {
  return <div className='flex items-center gap-x-5 text-2xl -mt-6'>
  
    <Link href='https://www.instagram.com/rukhsana_khatun44/' className='hover:text-accent transition-all duration-300'>
    <RiInstagramLine/>
    </Link>
    <Link href='https://www.facebook.com/rukhsana.khatun.9028194' className='hover:text-accent transition-all duration-300'>
    <RiFacebookLine/>
    </Link>
    <Link href='https://www.linkedin.com/in/rukhsana-khatun-252436267?fbclid=IwAR1V8viqPk-AoFBlotxYAwloUvjHaPD7P1_S00hKn-2MFfBIsGJpXl4z48Q' className='hover:text-accent transition-all duration-300'>
    <RiLinkedinLine/>
    </Link>
    <Link href='https://github.com/Rukhsana-148?fbclid=IwAR0OuYQVrJrHYsqOvwfkI3vHlOZ8h55CE7hidKD5ynCQ5NFqaGfnvl7_X7M' className='hover:text-accent transition-all duration-300'>
    <RiGithubLine/>
    </Link>

  </div>;
};

export default Socials;
