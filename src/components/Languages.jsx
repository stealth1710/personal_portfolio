import React from "react";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";

import { DiMysql } from "react-icons/di";
import { DiDart } from "react-icons/di";
import { motion } from "framer-motion";


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

const Languages = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial= {{opacity:0,y:-100}}
      transition={{duration:1.5}}
      viewport={{ once: true }}
      className="my-20 text-center text-4xl font-thin">Languages </motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial= {{opacity:0,x:-100}}
      transition={{duration:1.5}}
      viewport={{ once: true }}
      className="flex flex-wrap items-center justify-center gap-10">
        <motion.div
         variants={iconVariants(2)}
         animate = "animate"
         initial = "initial" 
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaPython className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        animate = "animate"
        initial = "initial"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiCsharp 
          
          className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        animate = "animate"
        initial = "initial"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiCplusplus className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        animate = "animate"
        initial = "initial"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiC className="text-7xl text-blue-300" />
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        animate = "animate"
        initial = "initial"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <DiHtml5 className="text-7xl text-red-500" />
        </motion.div>
        
        <motion.div 
         variants={iconVariants(6)}
         animate = "animate"
         initial = "initial" 
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <DiJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
         variants={iconVariants(7)}
         animate = "animate"
         initial = "initial" 
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <DiMysql className="text-7xl text-pink-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Languages;
