import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Things/Portfoliopic.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Things/Resume.pdf'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Hey, I'm Lakshya,</span> a Passionate Frontend Developer from India</h1>
      <p>Aspiring full-stack developer with a strong foundation in frontend development, driven by a passion for AI, emerging technologies, and creating innovative solutions to real-world challenges.</p>
       <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a href={resume} target='_blank' rel='nooopener noreferrer'>My resume</a>
        </div>
       </div>
    </div>
  )
}

export default Hero
