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
            src="data:image/png;base64,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"
            alt=""
        />

        <div className="px-0 sm:px-10">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl font-light">Blockchain Engineer Intern</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">Sisu Network</p>
            <div className="flex lg:space-x-2 my-2 sm:space-x-1">
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/golang.png" alt='Go Programming Language' title='Go Programming Language' />
            <img className="h-10 w-10 rounded-full" src="https://docs.soliditylang.org/en/v0.8.17/_static/logo.svg" alt='Solidity' title='Solidity' />




            
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m text-sm">
                Started work 05/2021 - Ended 08/2021
                </p>

            <ul className="overflow-y-auto max-w-[15rem] md:max-w-lg lg:max-w-xl  list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Learned Solidity/Ethereum development programming with Golang in three days of fast 
paced self-learning to meet deadlines of ERC20 crypto coin smart contract development/stress test procedure to overload contract for micro bug detector.</li>
                <li>• Interacted with open source Uniswap Smart contract and used goroutines in Golang in JS 
to create concurrent transactions to stress test.</li>
                <li>• Deployed contracts (open-source smart contracts) onto a local host and test net for company</li>
            </ul>
        </div>
    </article>;
}