import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"; 
import Link from 'next/link';
type Props = {}

export default function Header({}: Props) {
  return (
  <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
  xl:items-center">
    <motion.div
    initial={{
       x:-500,
       opacity:0,
       scale:0.5
    }}
    animate={{
      x:0,
      opacity:1,
      scale:1
    }}
    transition={{
      duration: 1.5,
    }}
     className="flex flex-row items-center">
      {/* Social Icons */}   
      <SocialIcon url="https://www.linkedin.com/in/charanjagwani/"
      fgColor='#a8b2d1'
      bgColor='transparent'/>

<SocialIcon url="https://www.github.com/charjags/"
      fgColor='#a8b2d1'
      bgColor='transparent'/>

<SocialIcon url="https://www.youtube.com/channel/UC2KWRuoLBrY97V_zAwONGOQ"
      fgColor='#a8b2d1'
      bgColor='transparent'/>
      
    </motion.div>

      <Link href='#contactme '>
    <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{duration:1.5}}
     className="flex flex-row items-center text-gray-300 cursor-pointer">
      <SocialIcon
      className="cursor-pointer"
      network="email"
      fgColor="#a8b2d1"
      bgColor="transparent"
      />
      <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
    </motion.div>
    </Link>
  </header>
  );
}