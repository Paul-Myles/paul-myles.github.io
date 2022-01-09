import React from 'react';
import { css } from '@emotion/react';
import PM from '../assets/pm.jpg';

const AboutPageStyle = css`
  & {
    padding-bottom: 10rem;
  }

  .inner {
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 50px;
    }
  }

  .skill-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
    }
  }

  picture {
    .overlay {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #f1e4b9;
        transition: opacity 0.2s;
        -webkit-transition: opacity 0.2s;
        opacity: 0.4;
        border-radius: 4px;
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        top: 10px;
        bottom: -10px;
        left: 10px;
        right: -10px;
        border: 2px solid #f1e4b9;
        border-radius: 4px;
      }
    }

    .overlay:hover::before {
      transition: opacity 0.2s;
      -webkit-transition: opacity 0.2s;
      opacity: 0;
    }
    
    img {
      border-radius: 4px;
      height: 100%;
      width: 100%;
    }
  }
`;

const AboutPage = () => {
  return (
    <section id="about" css={[AboutPageStyle]}>
      <h1 className="title">About</h1>
      <div className="inner">
        <div>
          <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!</p>
          <p>Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
          <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node &amp; React.</p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skill-list">
            <li>JavaScript (ES6+)</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Shopify</li>
            <li>Wordpress</li>
            <li>Git</li>
          </ul>
        </div>
        <picture>
          <div className="overlay">
            <source media="(min-width:650px)" srcSet={PM} />
            <source media="(min-width:465px)" srcSet={PM} />
            <img src={PM} width="100%" alt="PM" />
          </div>
        </picture>
      </div>
    </section>
  );
};

export default AboutPage;
