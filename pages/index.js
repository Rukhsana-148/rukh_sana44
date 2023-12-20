import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
const Home = () => {
    return <div className = 'bg-primary/60 h-full overflow' >
        <
        div className = 'w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10' >

        <
        div className = 'text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto' >
        <
        motion.h1 variants = { fadeIn('down', 0.2) }
    initial = "hidden"
    animate = "show"
    exit = "hidden"
    className = 'h1 mt-[90px] md:mt-0' > Fullstack < br / > { '' } < span className = 'text-accent' > Web Develpoer < /span></motion.h1 > { /*sub title */ } <
        motion.p variants = { fadeIn('down', 0.3) }
    initial = "hidden"
    animate = "show"
    exit = "hidden"
    className = 'max-x-sm xl:max-x-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white font-semibold text-2xl ' > I am Fullstack Webdeveloper < span className = "text-accent" > (Laravel) < /span>.  < /
        motion.p > { /*button */ } <
        div class = "flex justify-center xl:hidden relative -mt-7" >
        <
        ProjectsBtn / >

        <
        /div> <
    motion.div variants = { fadeIn('down', 0.4) }
    initial = "hidden"
    animate = "show"
    exit = "hidden"
    className = 'hidden xl:flex' >
        <
        ProjectsBtn / >
        <
        /motion.div>

    <
    /div> < /
    div > { /*image */ } <
        div className = "w-[1200px] h-full absolute right-0 bottom-0" > { /*bg image */ } <
        div className = 'bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
    xl: bg - no - repeat w - full h - full absolute mix - blend - color - dodge translate - z - 0 '>

    <
    /div> <
    ParticlesContainer / >
        <
        motion.div variants = { fadeIn('up', 0.4) }
    initial = "hidden"
    animate = "show"
    transition = {
        { duration: 1, ease: 'easeInOut' }
    }
    className = 'w-full h-full max-w-[737px] max-h-[768px] absolute -bottom-10 lg:bottom:0 lg:right-[8%]' >
        <
        Avatar / >
        <
        /motion.div> < /
        div > <
        /div>;
};

export default Home;