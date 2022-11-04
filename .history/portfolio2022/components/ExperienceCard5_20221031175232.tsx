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
            src="https://logos-world.net/wp-content/uploads/2020/06/Houston-Cougars-sing.jpg"
            alt=""
        />

        <div className="px-0 sm:px-10">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl font-light">Machine Learning Research Assistant (The Nahual Project)</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">University of Houston</p>
            <div className="flex lg:space-x-2 my-2 sm:space-x-1">
            <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/70142?s=280&v=4" alt='jQuery' title='jQuery' />
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/ios/344/django.png" alt='Django' title='Django'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/python--v1.png" alt='Python' title='Python' />
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/javascript--v1.png" alt='javaScript' title='javaScript'/>





            
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m sm:text-sm">
                Started work 11/2020 - Ended 07/2021
                </p>

            <ul className=" overflow-y-auto max-w-[15rem] md:max-w-lg lg:max-w-xl  list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52">
                <li>• Learned Solidity/Ethereum development programming with Golang in three days of fast 
paced self-learning to meet deadlines of ERC20 crypto coin smart contract development/stress test procedure to overload contract for micro bug detector.</li>
                <li>• Interacted with open source Uniswap Smart contract and used goroutines in Golang in JS 
to create concurrent transactions to stress test.</li>
                <li>• Deployed contracts (open-source smart contracts) onto a local host and test net for company</li>
            </ul>
        </div>
    </article>;
}