import React from 'react'

import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaDiscord } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/*<img src={logo} alt="logo" className='mx-2 w-10' />*/}
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/adnan-b-1bb830252/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
          <a href="https://www.instagram.com/adnan_171_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/stealth1710" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/adnan.aadil.56" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
          

        </div>
    </nav>

  )
}

export default Navbar