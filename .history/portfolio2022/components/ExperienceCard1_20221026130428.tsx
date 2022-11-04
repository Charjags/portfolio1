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
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Freplit.com%2Ftalk%2Fask%2FDoes-my-profile-picture-look-like-a-hexagonal-replit-logo%2F51435&psig=AOvVaw1gXB9YUW7icIszJ9uYHjS3&ust=1666893836870000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjWpcq9_voCFQAAAAAdAAAAABAE"
            alt=""
        />

        <div className="px-0 sm:px-10">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl font-light">Full Stack Software Engineer</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">ScriptChain Health</p>
            <div className="flex lg:space-x-2 my-2 sm:space-x-1">
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/fluency/48/000000/typescript--v1.png"/>
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m sm:text-sm">
                Started work... - Ended...
                </p>

            <ul className=" overflow-y-auto max-w-[15rem] md:max-w-lg lg:max-w-xl  list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52">
                <li>Summary Pointsgffffffff</li>
                <li>test</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>;
}