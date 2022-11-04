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
import GCP from './Skill9'
import Mongo from './Skill10'
import Python from './Skill11'
import Go from './Skill12'
import OpenCV from './Skill13'
import REACT from './Skill14'
import Next from './Skill15'
import Tailwind from './Skill16'
import Django from './Skill17'
import Solidity from './Skill18'
import Jquery from './Skill19'
import Java from './Skill20'


type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className="h-screen flex relative flex-col text-center md:text-left text-2xl
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="pl-5 absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm invisible md:visible  ">
            Hover over a skill for currency preficiency
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm  md:invisible">
            Tap on skill for currency preficiency (Check out the hover feature on a computer!)
        </h3>

        <div className="grid grid-cols-4 gap-t pt-16">
            <TypeScript />
            <Angular />
            <Node />
            <HTML />
            <CSS />
            <JS />
            <AWS />
            <SQL />
            <GCP />
            <Mongo />
            <Python />
            <Go />
            <OpenCV />
            <REACT />
            <Next />
            <Tailwind />
            <Django />
            <Solidity />
            <Jquery />
            <Java />
        </div>
    </motion.div>
  )
}

export default Skills