import React from 'react'
import {motion} from "framer-motion"
type Props = {
    directionLeft?: boolean;
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className="group relative flex curser-pointer">
    <motion.img 
        initial={{
            x:directionLeft ? -200:70,
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        src="data:image/png;base64,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"
        alt='Solidity'
        className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-28 xl:h-28  filter group-hover:grayscale transition duration-300 ease-in-out"
    />
    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
    ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 
    rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">80%</p>
        </div>
    </div>
</div>
  )
}

export default Skill