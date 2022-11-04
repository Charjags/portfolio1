import React from 'react'
import {motion} from "framer-motion"
type Props = {}

export default function ExperienceCard1({}: Props) {
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            alt=""
        />

        <div className="px-0 sm:px-10">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl font-light">Google Solution Challenge</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">Google</p>
            <div className="flex lg:space-x-2 my-2 sm:space-x-1">
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/python--v1.png" alt='Python' title='Python'/>
            <img className="h-10 w-10 rounded-full"src="https://img.icons8.com/color/344/google-cloud.png" alt='Google Cloud Platform' title='Google Cloud Platform'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/html-5--v1.png" alt='HTML5' title='HTML5'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/javascript--v1.png" alt='javaScript' title='javaScript'/>

            
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m text-sm">
                Started work 03/2022 - Ended 05/2022
                </p>

            <ul className="  overflow-y-auto max-w-[15rem] md:max-w-lg lg:max-w-xl  list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Squashing United Nations Development Goals by developing technical solution ensuring an 
improvement in healthier lives through Google Cloud Map tools and API.</li>
                <li>• Web application displaying health code inspection violations through pop ups within every 
restaurant or eating area in the US interfaced on an interactive map.</li>
                <li>• Python used to webscrape inspection data and feed into google earth api. HTML/JS used to develop UI and incorporate Google Cloud API. </li>
                <li>• mentorship from google developers and informative CodeLabs workshops to acquire knowledge on 
various google cloud services.</li>
                <li>Demo - https://www.youtube.com/watch?v=k5M1EJ1Ygdg</li>
            </ul>
        </div>
    </article>;
}