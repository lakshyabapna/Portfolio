import React from 'react'
import './About.css'
import theme_pattern from '../../assets/Things/theme_pattern.svg'
import profile_img from '../../assets/Things/About.jpeg'
const About = () => {
  return (
    <div id = 'about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
            <img src={profile_img} alt=''/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hi, I'm Lakshya Bapna, a passionate frontend developer with a strong drive to become a full-stack web developer. I love creating interactive, user-friendly web experiences and solving real-world problems through technology and innovation.</p>
                <p>Currently, I'm pursuing a B.Tech in Artificial Intelligence at Newton School of Technology, where I explore the intersection of web development and AI-driven applications. I have hands-on experience with React.js, JavaScript, HTML, CSS, and Node.js, and I enjoy bringing creative ideas to life through clean and efficient code.</p>
            </div>
            <div className="about-skills">
                <div id='about' className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}}/></div>
                <div className='about-skill'><p>React JS</p><hr style={{width:'70%'}}/></div>
                <div className='about-skill'><p>JavaScript</p><hr style={{width:'60%'}}/></div>
                <div className='about-skill'><p>Python</p><hr style={{width:'50%'}}/></div>
                
            </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div> */}
    </div>
  )
}

export default About
