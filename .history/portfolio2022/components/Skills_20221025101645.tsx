import React from 'react'
import {motion} from "framer-motion"
import TypeScript from './Skill1'
import Angular from './Skill2'
import Node from './Skill3'
import HTML from './Skill4'
import CSS from './Skill5'
import JS from './Skill6'
import AWS from './Skill7'
import SQL from './Skill8'
import GCP from '/Skill9'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className="h-screen flex relative flex-col text-center md:text-left text-2xl
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm invisible md:visible  ">
            Hover over a skill for currency preficiency
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm  md:invisible">
            Tap on skill for currency preficiency (Check out the hover feature on a computer!)
        </h3>

        <div className="grid grid-cols-4 gap-5">
            <TypeScript />
            <Angular />
            <Node />
            <HTML />
            <CSS />
            <JS />
            <AWS />
            <SQL />
            <GCP />
        </div>
    </motion.div>
  )
}

export default Skills