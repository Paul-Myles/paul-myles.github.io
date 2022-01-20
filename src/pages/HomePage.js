import React from 'react';
import media from '../styles/media';
import { css } from '@emotion/react';

const HomePageStyle = css`
  & {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 92vh;
    padding: 0px;
  }

  h1 {
    margin: 0px 0px 30px 4px;
  }

  h2 {
    font-weight: 700;
  }

  h3 {
    font-weight: 700;
  }

  p {
    margin: 20px 0px 0px;
    max-width: 540px;
  }

  .resume-homepage-link {
    color: #315a69;
    font-weight: 700;
    border: 2px solid #f1e4b9;
    background-color: #f1e4b9;
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    margin-top: 2.5em;
    display: block;
    text-align: center;
    width: 245px;
    &:hover {
      border: 2px solid #f1e4b9;
      color: #f1e4b9;
      background-color: #315a69;
    }
    ${media.small} {
      padding: 0.75em 0.55em;
      width: 220px;
    }
  }
`;

const HomePage = () => {
  return (
    <section id="home" css={[HomePageStyle]}>
      <h1>Hi, my name is</h1>
      <h2>Paul Myles</h2>
      <h3>I build things for the web.</h3>
      <p>I'm a front end developer specializing in building exceptional digital experiences.</p>
      <a className="resume-homepage-link" href="/resume.pdf" rel="noopener noreferrer" target="_blank">Check out my Resume</a>
    </section>
  );
};

export default HomePage;
