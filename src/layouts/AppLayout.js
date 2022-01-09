import React from 'react';
import { Global, css } from '@emotion/react';

import Header from './Header';
import Sidebar from './Sidebar';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ExperiencePage from '../pages/ExperiencePage';
import WorkPage from '../pages/WorkPage';
import ContactPage from '../pages/ContactPage';
import Footer from './Footer';

import colorMap from '../styles/palette';
import { useThemeContext } from '../contexts/ThemeContext';

const globalStyle = (theme) => css`
  body {
    ${colorMap.base[theme]}
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: border, background, color;
  }
  main {
    margin: 0 auto;
    max-width: 1024px;
  }
`;

const AppLayout = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <Global styles={[globalStyle(theme)]} />
      <Header />
      <Sidebar />
      <main>
        <HomePage />
        <AboutPage />
        <ExperiencePage />
        <WorkPage />
        <ContactPage />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
