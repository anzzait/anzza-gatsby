import './style.scss';
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="imageContainer">
      <StaticImage 
        src="../../images/hero.png"
        alt="両掛けバッグ" 
        className='innerImg'
      />
    </div>
  );
};

export default Hero;
