import React from 'react'
import {motion } from "framer-motion"


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className="flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
        <h3 className="pl-5  absolute top-24 text-center uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
            <motion.img
            initial={{
                x: -300,
                opacity:0
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{opacity:1,x:0}}
            src="https://i.ibb.co/wRvZkpq/paris-pic.jpg"
            className="bg-[#a8d1bb] bg-opacity-20 p-10  -mb-20 mt-[8.5rem] md:mb:0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[600px]" 
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-2xl text-[#ccd6f6] mt-[5.5rem] md:text-xl mb-[-30px] front-semibold  '>Here Is A <span className="underline decoration-[#64ffda] text-[#64ffda]"> Little</span> Bit About Me!</h4>
                <p className="sm:overflow-y-auto md:overflow-visible md:max-w-lg lg:max-w-xl max-h-96 text-sm pb-5 text-justify text-[#a8b2d1] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                Hi, I’m Charan! I'm a <span className="underline decoration-[#64ffda] text-[#64ffda]">Full-Stack Software Engineer</span> with in-depth experience in <span className="underline decoration-[#64ffda] text-[#64ffda]">UI/UX design</span> and <span className="underline decoration-[#64ffda] text-[#64ffda]">backend API orchestration/creation</span>. In a nutshell, I create software applications/web applications that help organizations address business challenges and meet their needs. I'm a <span className="underline decoration-[#64ffda] text-[#64ffda]">freelance MEAN stack developer</span> and I recently became an <span className="underline decoration-[#64ffda] text-[#64ffda]">AWS certified developer</span> while receiving my <span className="underline decoration-[#64ffda] text-[#64ffda]">Java Nanodegree</span> through a scholarship from Infosys. I manage everything from application full stack development, data structures/algorithms, cloud technologies, and AWS environments and AWS tools such as RDS, EC2, Beanstalk, etc. I really enjoy working with <span className="underline decoration-[#64ffda] text-[#64ffda]">cloud technology</span>; hence, my expertise lies within creating applications incorporating the cloud, and the main languages in my tech stack are MySQL/MongoDB, Express, JavaScript, React, Python/Django, Go, Angular/TypeScript, and NodeJs. 
I consider myself most well versed in Python having developed over 50 analytical projects with 10+ incorporating the training of recurrent neural networks and generative adversarial networks. My proudest coding experience was coding with streaming data and large databases through Apache Spark. Through this, I was able to alter my mindset to deploy code in a manner where it can be scaled up rather than just completed. The “Projects” tab currently has my featured projects, however, feel free to check out my entire portfolio through my Github link!

                </p>
            </div>
        </motion.div>
  )
}