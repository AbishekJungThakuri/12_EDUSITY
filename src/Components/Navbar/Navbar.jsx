import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} `}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li><Link to="hero" offset ={0}   smooth={true} duration={500}>Home </Link></li>
        <li><Link to="programs" offset ={-260}   smooth={true} duration={500}>Program</Link></li>
        <li><Link to="about" offset ={-130}   smooth={true} duration={500}>About Us</Link></li>
        <li><Link to="campus" offset ={-260}   smooth={true} duration={500}>Campus</Link></li>
        <li><Link to="testimonial" offset ={-260}   smooth={true} duration={500}>Testimonial</Link></li>
        <li> <button className='btn'>Contact Us</button> </li> 
      </ul>
    </nav>
  );
};
