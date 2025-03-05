
import * as React from "react"

import { StaticImage } from 'gatsby-plugin-image'

import LineIcon from '../../images/line.svg';
import InstagramIcon from '../../images/instagram.svg';

import { Hamburger, Navigator } from './menus'

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";


import { Link } from 'gatsby'


import LinkWithTracking from '@/components/LinkWithTracking.jsx'


import './style.scss';


const Header = () => {
	const [isClicked, setIsClicked] = React.useState(false);

	// ハンバーガーメニューが開いている時はスクロールしない
	React.useEffect(() => {
		if (isClicked) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isClicked]);
	
	return (
		<>
			<div className="header">
				<Link to="/" className="header-logo">
					<div className="img-container">
						<StaticImage src='../../images/anzza-logo.png' 
							alt="ANZZAロゴ" layout="constrained"
							width={150}
						/>
					</div>
				</Link>

				<div className="header-menu">
					<button onClick={() => setIsClicked(!isClicked)} className="hamburger">
						<div className="img-container">
							{isClicked ? (
									<RxCross2 className="icon"/> 
								) : (
									<RxHamburgerMenu className="icon"/>
								)
							}
						</div>
					</button>
					<div className="list">
						<Navigator/>
					</div>
				</div>

				<div className="header-sns">
					<div className="img-container">
				
						<LinkWithTracking href="https://line.me/R/ti/p/%40086bsipf" target="_blank" rel="noopener noreferrer">
							<LineIcon />
						</LinkWithTracking>

						<LinkWithTracking href="https://instagram.com/anzza.2021" target="_blank" rel="noopener noreferrer">
							<InstagramIcon />
						</LinkWithTracking> 
					</div>
				</div>
			</div>



			
			<div className={`hamburger-function ${isClicked ? 'open' : ''}`}>
				<Hamburger isClicked={isClicked} setIsClicked={setIsClicked}/>
			</div>
		</>
	)
}
export default Header;
