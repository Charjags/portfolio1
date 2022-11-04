import React from 'react'
import {motion} from "framer-motion"
type Props = {}

export default function ExperienceCard({}: Props) {
  return <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-
  [500px] sm:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 pb-3 md:hover:opacity-100 md:opacity-40
  cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y:-100,
            opacity:0,

        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center"
            src="https://i.ibb.co/JkRNFvG/1627588591899.jpg"
            alt=""
        />

        <div className="px-0 sm:px-10">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl font-light">Full Stack Software Engineer</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">ScriptChain Health</p>
            <div className="flex lg:space-x-2 my-2 sm:space-x-1">
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/fluency/48/000000/typescript--v1.png" alt='TypeScript' title='TypeScript'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/angularjs.png" alt='AngularJS' title='AngularJS'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/html-5--v1.png" alt='HTML5' title='HTML5'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/css3.png" alt='CSS' title='CSS'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/javascript--v1.png" alt='javaScript' title='javaScript' />
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/fluency/344/node-js.png" alt='NodeJS' title='NodeJS'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/amazon-web-services.png" alt='AWS' title='AWS'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/ios/344/django.png" alt='Django' title='Django'/>


            
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m text-sm">
                Started work 05/2022 - Ended 10/2022
                </p>

            <ul className=" overflow-y-auto max-w-[15rem] md:max-w-lg lg:max-w-xl  list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Developed front-end responsive UI Interface of site through Angular/TypeScript/BootStrap.</li>
                <li>• Used NodeJs to connect entire back-end JS controllers/MySQL database to angular front end.</li>
                <li>• Created and integrated company database into AWS, using EC2 Instance to place db into private subnet in 
VPC with PemKeyProtection, Password Authorization, and Specified IP access through connection method 
of TCP over SSH.</li>
                <li>• TypeScript used to connect controllers to components and initialize forms, routers, email system senders.</li>
                <li>• Demo – https://www.Scriptchain.co</li>
            </ul>
        </div>
    </article>;
}