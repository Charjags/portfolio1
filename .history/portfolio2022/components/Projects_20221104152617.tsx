import React from 'react'
import {motion} from "framer-motion"
import {Project} from "../typings";
import { urlFor } from '../sanity';
type Props = {
    projects: Project[];
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
     className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
    nx-auto items-center z-0">
        <h3 className="pl-5 absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
        
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin
        scrollbar-track-gray-400/20 scrollbar-thumb-[#a8b2d1]/40">
        {projects?.map((project, i)=>(
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 itmes-center justify-center p-[3rem]  md:p-44 h-screen ">
                <div className=' px-0 md:px-10 max-w-xl text-xs sm:pb-4 mt-24 flex lg:pl-3 lg:mx-auto justify-center text-center invisible md:visible '>
                    (Hover Over Image to Expand)
                </div>
                <motion.img 
                initial={{
                    y:-300,
                    opacity:0
                }}
                whileHover={{scale:2.2,}}
                transition={{duration:1.2}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                className="lg:h-72 lg:w-96 mx-auto object-cover pt-0 mt-16"
                src={urlFor(project?.image).url()}
                 alt="" 
                 />
                <div className='space-y-10 px-0 md:px-10 max-w-xl text-xs sm:pb-4 md:text-base flex lg:pl-8 lg:mx-auto justify-center text-center lg:pb-4'><span className='text-[#64ffda]'>{project.linkToBuild}</span></div>

            <div className="space-y-10 px-0 md:px-10 max-w-xl flex-col flex lg:pl-8 lg:mx-auto">
                <h4 className="mb-[-20px] lg:text-xl md:text-2xl sm:text-xl font-semibold text-center">
                    <span className="underline decoration-[#64ffda]/50">Case Study {i+1} of {projects.length}:</span>{" "} {project?.title}
                </h4>
                
                <div className='flex items-center space-x-2 pb-3 justify-center'>
                {project?.technologies.map((technology) => (
                    <img
                        className='h-10 w-10'
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        alt=""
                        />
                ))}
                </div>
                    </div>
                <p className="text-md text-center md:text-left sm:overflow-y-auto lg:overflow-visible sm:ml-5 lg:text-lg sm:text-md scrollbar-thin scrollbar-thumb-[#64ffda]/40 justify-center">
                {project?.summary}
                </p>
            
            </div>
            
        ))}
        
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>
        </motion.div>
  )
}

export default Projects