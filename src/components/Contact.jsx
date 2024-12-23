import React from 'react'
import {CONTACT} from "../constants"
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:100}}
    transition={{duration:1.5}}
    className='border-b border-neutral-900 pb-20'>
        <h2 className='my-10 text-center text-4xl'> Get In Touch</h2>
        <div className='text-center tracking-tighter'>
           
            
            <a href="#" className='border_b'>{CONTACT.email}</a>
            <p className='my-4'>
                {CONTACT.address}
            </p>
        </div>
    </motion.div>
  )
}

export default Contact