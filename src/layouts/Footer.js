import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const footerStyle = css`
  padding: 40px 16px;
  & > nav {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Footer = () => {
  return (
    <footer css={[footerStyle]}>
      <nav>
        <div>{new Date().getFullYear()} &copy; PM Digital</div>
      </nav>
    </footer>
  );
};

export default Footer;
