/* eslint-disable react/jsx-key */
//  data
import { Router, useState } from 'react'
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaCode,
    FaStar
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';


const aboutData = [{
    title: 'skills',
    info: [{
            title: 'Web Development',
            icons: [ <
                FaHtml5 / > , <
                FaCss3 / > ,

                <
                FaJs / > , <
                FaCode / > ,


            ],
        },

    ],
}, ];
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import CountUp from 'react-countup';

const About = () => {
    const [index, setIndex] = useState(0);

    return <div className = 'h-full bg-primary/30 py-32 text-center xl:text-left pb-5' >
        <
        Circles / >
        <
        motion.div variants = { fadeIn('right', 0.2) }
    initial = 'hidden'
    animate = 'show'
    exit = 'hidden'
    className = 'hidden xl:flex absolute  -left-[150px] top-[120px]' >
        <
        Avatar / >
        <
        /motion.div> <
    div className = 'container mx-auto h-full flex-col items-center xl:flex-row gap-x-6 mt-5 md:ml-[300px]' >
        <
        div className = 'flex-1 flex flex-col justify-center' >

        <
        p className = 'md:w-[800px] mx-auto xl:mx-0 mb-6 xl:mb-12  sm:mt-[20px] px-2 xl:px-0 ' > Hey, I am < span className = 'text-accent text-lg font-bold' > Rukhsana Khatun < /span>.I am student of Jashore University of Science and Technology. I am studying in Computer Science and Engineering. 
    2 years ago, i began learning web development.Now i am qualified fullstack web - developer.I have completed many real - time projects.I am expart as PHP framwork laravel. < /p> <
    div > { /*skill */ } <
        div className = 'flex gap-x-4 -my-5 sm:my-1' >
        <
        p className = 'text-2xl text-accent font-bold pr-5' > Skill < /p> <
    div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2 ' >

        <
        /div> <
    div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        HTML <
        /div> < /
    div >
        <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2 ' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        CSS <
        /div> < /
    div >

        <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2 ' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        Bootstrap <
        /div> < /
    div > <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2 ' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        Tailwind <
        /div> < /
    div > <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        Javascript <
        /div> < /
    div >

        <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        jQuery <
        /div> < /
    div >

        <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        Vue.js <
        /div></div >

        <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        PHP <
        /div> < /
    div > <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        Laravel <
        /div> < /
    div >

        <
        /div> <
    div class = "flex sm:hidden gap-x-4 mt-6 ml-[90px]" >
        <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        jQuery <
        /div> < /
    div >

        <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        Vue.js <
        /div></div >

        <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        PHP <
        /div> < /
    div > <
        div >
        <
        div className = 'text-xl xl:text-xl font-extrabold text-accent mb-2' >
        <
        /
    div > <
        div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        Laravel <
        /div> < /
    div > <
        /div> <
    div >
        <
        div className = 'flex sm:flex-col gap-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0' >

        <
        div className = 'mb-5 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        <
        div className = 'text-2xl xl:text-4xl font-extrabold text-accent mb-2' >
        <
        CountUp start = { 0 }
    end = { 2 }
    duration = { 1 }
    />+ < /
    div >
        Years of Exprience <
        /div>



    <
    div className = 'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
        <
        div className = 'text-2xl xl:text-4xl font-extrabold text-accent mb-2' >
        <
        CountUp start = { 0 }
    end = { 50 }
    duration = { 1 }
    />+ < /
    div >
        Projects <
        /div>


    <
    /div> < /
    div > <
        /div> < /
    div >

        <
        /div> < /
    div > ;
};

export default About;