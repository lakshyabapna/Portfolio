import React from 'react'
import './Footer.css'
import user_icon from '../../assets/Things/user_icon.svg'
import theme_pattern from '../../assets/Things/theme_pattern.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Lakshya</h1>
                <img src={theme_pattern} alt=''/>
                <p>Frontend developer from, India </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">
                    Thank You
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Lakshya Bapna. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
