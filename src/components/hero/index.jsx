import './style.scss';
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="imageContainer">
      <StaticImage 
        src="../../images/17942726441196490.png"
        alt="Generated Image" 
        className='innerImg'
      />
    </div>
  );
};

export default Hero;
