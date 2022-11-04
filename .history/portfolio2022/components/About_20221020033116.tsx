import React from 'react'
import {motion } from "framer-motion"


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className="flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
            <motion.img
            initial={{
                x: -300,
                opacity:0
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{opacity:1,x:0}}
            src="https://i.ibb.co/wRvZkpq/paris-pic.jpg"
            className="-mb-20 mt-[8.5rem] md:mb:0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[600px]" 
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-2xl mt-[5.5rem] md:text-xl mb-[-30px] front-semibold  '>Here Is A <span className="underline decoration-[#F7AB0A]"> Little</span> Bit About Me!</h4>
                <p className="text-sm pb-5 text-justify">
                    I consider myself most exceptional at python, having developed over 50 analytical projects with 10+ incorporating the training of recurrent neural networks and generative adversarial networks. I also have 6 years of fluency in a multitude of python libraries such as numpy, pandas, OpenCv, Tensorflow, Matplotlib, Scikit-learn, and Tkinter. I have additional python experience coding with streaming data and databases through Apache Spark. I interned at a fast pace learning blockchain engineering project to develop and deploy a uniswap cryptocurrency smart contract for a startup company, despite my minimalistic relevant experience at the time. In 3 days I ramped my knowledge in Ethereum with Go and became proficient in Solidity. Since then, I have created my own crypto token by reverse engineering the famous ERC20 smart contract and developed a program to create a collection of art that was then deployed/minted 

                </p>
            </div>
        </motion.div>
  )
}