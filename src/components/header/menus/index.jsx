import * as React from "react"
import { Link } from 'react-scroll';

import './style.scss';


export const HomeScrolls = [
  {
    path: "aboutus",
    name: "ANZZAについて",
    offset: -40,
  },
  {
    path: "inquiry",
    name: "お問い合わせ",
    offset: -40,
  },
  {
    path: "access",
    name: "アクセス",
    offset: -50,
  },
];


const Hamburger = ({isClicked, setIsClicked}) => {
	return (
    <div className='hamburger'>
      <nav>
        <ul className="JP-Title21-Regular">
          {
            HomeScrolls.map(((p, index) => 
              <li key={index}>
                <Link activeClass="active" to={p.path} spy={true} smooth={true} offset={p.offset} duration={500} onClick={() => setIsClicked(!isClicked)} >
                  <span>{ p.name }</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
	)
}

const Navigator = () => {
	return (
    <nav className="navigator">
      {
        HomeScrolls.map(((p, index) => 
          <Link to={p.path} activeClass="active" spy={true} smooth={true} offset={p.offset} duration={50} key={index} className="nav-link">
            <span className="JP-Title21-Regular">{ p.name }</span>
          </Link>
        ))
      }
    </nav>
	)
}

export { Hamburger, Navigator };