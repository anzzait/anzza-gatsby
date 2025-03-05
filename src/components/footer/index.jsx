import * as React from "react"
import './style.scss';
import { StaticImage } from 'gatsby-plugin-image'


const Footer = () => {
	return (
		<div className='Footer'>
			<StaticImage src='../../images/footer.png' alt="footer" className="footer-img"/>

			<div className="footer-bottom">
				<div className="footer-gap"/>
				<span className="footer-text">© {new Date().getFullYear()} ANZZA</span>
			</div>
		</div>
	)
}
export default Footer;


