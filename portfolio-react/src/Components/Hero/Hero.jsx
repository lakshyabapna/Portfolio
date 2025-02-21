import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Things/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Hey, I'm Lakshya,</span> a Passionate Frontend Developer from India</h1>
      <p>Aspiring full-stack developer with a strong foundation in frontend development, driven by a passion for AI, emerging technologies, and creating innovative solutions to real-world challenges.</p>
       <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
       </div>
    </div>
  )
}

export default Hero
