import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

export const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" />
        </div>
        <div className="about-right">
               <h3>ABOUT UNIVERSITY</h3>
               <h2>Nurturing Tommorrow's Leaders Today</h2>
               <p>Embark on a transformative educational journey with our university's
                comprehensive education programs. Our cutting-edge curriculum is designrd to empower
                students eith knowledge, skills, and experiences neede to excel in the dynamic
                field of education.</p>
                <p>With a focues  on innovations ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptas. 
                Adipisci expedita ducimus explicabo non recusandae eligendi repellendus ab consequatur.</p>
                <p>Whether you aspire to become a teacher, administrator, counselor, or educationalleader, our diverse range
                of programs offers the perfect pathway to achieve our goals and unlock your full
                potential in shaping the future of education.</p>
        </div>
    </div>
  )
}
