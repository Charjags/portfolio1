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
            src="https://static.dezeen.com/uploads/2013/01/dezeen_American-Airlines-logo-and-livery_4a.jpg"
            alt=""
        />

        <div className="px-0 sm:px-10">
        <h4 className="sm:text-2xl md:text-3xl lg:text-4xl font-light">TAMUHACK2022 Hackathon</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">American Airlines</p>
            <div className="flex lg:space-x-2 my-2 sm:space-x-1">
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/python--v1.png" />
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/opencv.png" />
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/amazon-web-services.png" />
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/ios/344/django.png"/>


            
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m sm:text-sm">
                Started work 05/2022 - Ended 10/2022
                </p>

            <ul className=" overflow-y-auto max-w-[15rem] md:max-w-lg lg:max-w-xl  list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52">
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










