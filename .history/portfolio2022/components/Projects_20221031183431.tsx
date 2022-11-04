import React from 'react'
import {motion} from "framer-motion"
type Props = {}

const Projects = (props: Props) => {
    const projects=[1,2,3,4,5];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
     className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
    nx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin
        scrollbar-track-gray-400/20 scrollbar-thumb-[#a8b2d1]/40">
        {projects.map((project, i)=>(
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 itmes-center justify-center p-20  md:p-44 h-screen ">
                <motion.img 
                initial={{
                    y:-300,
                    opacity:0
                }}
                transition={{duration:1.2}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                className="lg:h-72 lg:w-96 mx-auto object-cover lg:mb-9 pt-11"
                src="https://i.ibb.co/KFwmPDH/portfolio-pic-1.png"
                 alt="" 
                 />


            <div className="space-y-10 px-0 md:px-10 max-w-xl flex-col flex lg:pl-8 lg:mx-auto">
                <h4 className="mb-[-20px] lg:text-xl md:text-2xl sm:text-xl font-semibold text-center">
                    <span className="underline decoration-[#64ffda]/50">Case Study {i+1} of {projects.length}:</span> Scriptchain Full Stack Application
                </h4>
                <p className=" overflow-y-auto max-w-[100rem] sm:pt-[-50px] md:max-w-lg  list-disc space-y-4 ml-5 lg:text-lg sm:text-md md:max-h-52 max-h-[22rem] scrollbar-thin scrollbar-thumb-[#64ffda]/40">
                I developed all backend api and services on site such as email system sender, converting static to dynamic database in sql, duplicate entry checkers, storing information from forms into encrypted data tables within already encrypted database. I connected the website and database to private subnet in AWS rds through running an EC2 statement as a Bastion host (jumping server for subnet) providing extra security. I also developed dynamic responsive html email templates and the service to be able to send html through Nodejs through the handlebars library. I developed multiple services identifying ids of encrypted columns/rows of data tables, and token encryption. I identified/debugged and resolved many underlying issues and overall pitched in my own ideas that I believed would make code more efficient or organized and proposed new ideas to benefit the entire website itself. Through front end, I developed various pages on the site through html/css/typescript including the capability statement page, request access page, about us page, contact us page, home page, terms-conditions page, privacy policy, subfooter located at the bottom of every page. I utilized Bootstrap, jQuery, Django, and Angular frameworks to accomplish this and adjusted for responsiveness between different screen sizes and devices.
                </p>
            </div>
            </div>
            
        ))}
        
        </div>
        <div className="w-full absolute top-[30%] bg-[#64ffda]/10 left-0 h-[500px] -skew-y-12"/>
        </motion.div>
  )
}

export default Projects