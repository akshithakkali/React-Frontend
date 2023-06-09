import React from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import { Button } from './Button';
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src ='C:\Users\akshi\OneDrive\Desktop\react-website-yt-1\react-website-yt-1\public\videos\video-1.mp4' autoPlay loop muted /> */}
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
            <video src='http://surl.li/fmgca' autoPlay loop muted />

            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <FaPlayCircle />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;