import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import {motion} from "framer-motion"; 

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Charan Jagwani",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />",
            ">:)",

        ],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
         src="https://i.imgur.com/35trhFu.jpeg" alt=""
        />
        <div className="z-20">
        <h2 className="md:text-sm text-xs uppercase text-[#a8b2d1] pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-2xl md:text-4xl text-[#ccd6f6] lg:text-6xl font-semibold px-18">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
          <motion.button
          whileHover={{
            scale:1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
          }}
          className="heroButton text-[#64ffda]">About</motion.button>
          </Link>
          <Link href ="#experience">
          <motion.button
          whileHover={{
            scale:1.1,
            textShadow: "0px 0px 8px #233554",
            boxShadow: "0px 0px 8px #233554"
          }}
          className="heroButton text-[#64ffda]">Experience</motion.button>
          </Link>
          <Link href="#skills">
          <motion.button
          whileHover={{
            scale:1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
          }}
          className="heroButton text-[#64ffda]">Skills</motion.button>
          </Link>
          <Link href="#projects">
          <motion.button
          whileHover={{
            scale:1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
          }}
          className="heroButton text-[#64ffda]">Projects</motion.button>
          </Link>
          <Link href="#resume">
          <motion.button
          whileHover={{
            scale:1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
          }}
          className="heroButton text-[#64ffda]">Resume/CV</motion.button>    
          </Link>              
        </div>
        </div> 
    </div>
  )
}