import React from 'react'
import { RiReactjsLine} from 'react-icons/ri'
import { RiNodejsLine } from 'react-icons/ri'
import { DiDotnet } from 'react-icons/di'
import { DiPython } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { RiTailwindCssLine } from 'react-icons/ri'
import { RiFlutterLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"

        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial= {{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl font-thin'>Technologies</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
         className='flex flex-wrap items-center justify-center gap-10'>
            <motion.div variants={iconVariants(2.5)}
            animate = "animate"
            initial = "initial"
          
            className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            animate = "animate"
            initial = "initial"
            className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <RiTailwindCssLine className='text-7xl text-blue-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            animate = "animate"
            initial = "initial"
            className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <RiFlutterLine className='text-7xl text-blue-400'/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies