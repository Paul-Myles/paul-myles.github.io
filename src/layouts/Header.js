import React, { useState }from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { css } from '@emotion/react';
import media from '../styles/media';

const headerStyle = () => css`
  height: 60px;
  width: 100%;
  ${media.medium} {
    height: 50px;
  }
  ${media.small} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    background: #f1e4b9;
    color: #315a69;
    box-shadow: 0px 5px 10px 0px;
    -webkit-box-shadow: 0px 5px 10px 0px;
    -moz-box-shadow: 0px 5px 10px 0px;
  }

  & > nav {
    height: 100%;
    display: flex;
    padding: 0 12px;
    margin: 0 auto;
    max-width: 1280px;
    align-items: center;
    justify-content: space-between;

    .nav-item a {
      padding: 1em;
      ${media.small} {
        display: none;
      }
    }

    .nav-item button {
      display: none;
      ${media.small} {
        display: block;
      }
    }
  }

  .resume-link {
    background: #f1e4b9;
    border: 2px solid #f1e4b9;
    color: #315a69;
    border-radius: 4px;
    font-weight: 700;
    padding: 0.5em 1em!important;
    &:hover {
      border: 2px solid #f1e4b9;
      color: #f1e4b9;
      background-color: #315a69;
    }
  }

  .logo {
    .logo_svg__g {
      ${media.small} {
        fill: #315a69;
      }
    }
  }

  button {
    border: none;
    background: #f1e4b9;
    position: relative;
    z-index: 2;
  }

  .menu-bar-top, .menu-bar-mid, .menu-bar-btm {
    width: 35px;
    height: 5px;
    background-color: #315a69;
    margin: 6px 0;
    transition: 0.4s;
  }
  
  .menu-btn-animate .menu-bar-top {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
    background-color: #315a69;
  }
  
  .menu-btn-animate .menu-bar-mid {opacity: 0;}
  
  .menu-btn-animate .menu-bar-btm {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
    background-color: #315a69;
  }

  .menu-btn-animate {
    background: #f1e4b9;
  }

  aside {
    backdrop-filter: blur(5px);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    visibility: hidden;
    -webkit-transition: transform 0.2s 0s, visibility 0s 0.2s;
    -moz-transition: transform 0.2s 0s, visibility 0s 0.2s;
    -ms-transition: transform 0.2s 0s, visibility 0s 0.2s;
    -o-transition: transform 0.2s 0s, visibility 0s 0.2s;
    transition: transform 0.2s 0s, visibility 0s 0.2s;
    -webkit-transform: translateX(300px);
    -moz-transform: translateX(300px);
    -ms-transform: translateX(300px);
    -o-transform: translateX(300px);
    transform: translateX(300px);

    .outer {
      position: absolute;
      right: 0;
      top: 0;
      height: 100vh;
      background: #f1e4b9;
      color: #315a69;
      width: 250px;
    }

    .inner {
      display: flex;
      flex-direction: column;
      padding: 4rem 2rem;
      text-align: center;
      align-items: center;
      justify-content: center;

      a {
        font-weight: 700;
        padding: 1rem 0;
      }
    }
  }

  .slide-in {
    visibility: visible;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: transform 0.2s 0s, visibility 0s 0s;
    -moz-transition: transform 0.2s 0s, visibility 0s 0s;
    -ms-transition: transform 0.2s 0s, visibility 0s 0s;
    -o-transition: transform 0.2s 0s, visibility 0s 0s;
    transition: transform 0.2s 0s, visibility 0s 0s;
  }

  .sub-nav {
    margin-top: 3rem;
    height: 20rem;
    &:after {
      align-self: center;
      background-color: #315a69;
      content: "";
      display: flex;
      width: 2px;
      justify-content: center;
      height: 100%;
      margin: 0 auto;
      opacity: 0.5;
    }
  }

  li {
    padding: 0.45rem 3.5rem;
  }
`;

const Header = () => {
  const { pathname } = useLocation();

  const [isActive, setActive] = useState("false");
  const handleMenuTrigger = () => {
    setActive(!isActive);
  };

  return (
    <header className="fixed-header" css={[headerStyle()]}>
      <nav role="navigation">
        <div className="logo">
          <Link to="/" replace={pathname === '/'}>
            <Logo className="logo" />
          </Link>
        </div>
        <div className="nav-item">
          <AnchorLink href='#about'>About</AnchorLink>
          <AnchorLink href='#experience'>Experience</AnchorLink>
          <AnchorLink href='#work'>Work</AnchorLink>
          <AnchorLink href='#contact'>Contact</AnchorLink>
          
          <a className="resume-link" href="/resume.pdf" rel="noopener noreferrer" target="_blank">Resume</a>

          <button type="button" className={`${isActive ? null : "menu-btn-animate"}`} onClick={handleMenuTrigger}>
            <div className="menu-bar-top"></div>
            <div className="menu-bar-mid"></div>
            <div className="menu-bar-btm"></div>
          </button>
        </div>
      </nav>
      <aside className={`${isActive ? null : "slide-in"}`} onClick={handleMenuTrigger}>
        <div className="outer">
          <div className="inner">
            <AnchorLink href='#about'>About</AnchorLink>
            <AnchorLink href='#experience'>Experience</AnchorLink>
            <AnchorLink href='#work'>Work</AnchorLink>
            <AnchorLink href='#contact'>Contact</AnchorLink>
            <ul className="sub-nav">
              <li>
                <a href="https://github.com/Paul-Myles" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/PM_io_" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
              </li>
              <li>
                <a href="https://www.facebook.com/level7.dungeon.master" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/paul-myles-2924b471/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </li>
              <li>
                <a href="https://codepen.io/Blockfort" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-codepen"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
