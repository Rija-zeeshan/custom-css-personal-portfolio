import Image from "next/image";
import "../style/hero.css";

 
import React from 'react'

export default function Hero() {
  return (
    <div className="hero-container">
     <div className="hero-boxes">
        
         {/*left */}
         <div className="hero-right-div">
            <h1 className="heading"> My name is Rija Zeeshan</h1>
            <p className="paragraph">I am a Passionate frontend web developer. I love creating visually appealing and user-friendly websites using modern technologies.






</p>
            <button className="hero-button"> HIRE ME</button>
         </div>
                 {/*right */}
        <div>
        <Image src="/image/r.jpg" alt="r" height={200} width={200} className="hero-image"/>
        </div>

     </div>
    </div>
  )
}
