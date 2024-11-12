import Image from "next/image";
import "../style/hero.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "../style/about.css";




 
import React from 'react'
import Link from "next/link";

export default function About() {
  return (
    <div className="hero-container">
     <div className="hero-boxes">
        {/*left */}
        <div className="s-icon-margin">
        <Image src="/image/r.jpg" alt="r" height={200} width={200} className="hero-image"/>
        <div className="social-icons">
        <Link href={""}><FaFacebook className="s-icon" /></Link>
        <Link href={""}><FaInstagram className="s-icon-2" /></Link>
        <Link href={"https://www.linkedin.com/in/rija-zeeshan-43075a2b8/"}><FaLinkedin className="s-icon-3"/></Link>
        <Link href={"https://github.com/Rija-zeeshan"}><FaGithub className="s-icon-4"/></Link>
        </div>




        </div>
         {/*right */}
         <div className="hero-right-div">
            <h1 className="heading"> About Us</h1>
            <p className="paragraph">I have graduated in commerce and I am a student of IT...My dream is to lead a successful life and rule the IT world..With a solid foundation in web development technologies, I have acquired proficiency in HTML, CSS, JavaScript, and TypeScript. My journey through these languages has equipped me with the skills necessary to build dynamic and interactive web applications. Currently, I am expanding my expertise by learning Next.js, a powerful React framework that enhances server-side rendering and static site generation. This new focus aligns with my experience in TypeScript, as I have already completed several projects utilizing it to create robust and scalable solutions. My continuous learning and hands-on projects reflect my commitment to staying at the forefront of web development trends and technologies.</p>
            
         </div>
     </div>
    </div>
  )
}
