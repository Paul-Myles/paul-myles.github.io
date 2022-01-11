import React from 'react';
import { css } from '@emotion/react';

import { ReactComponent as Folder } from '../assets/folder.svg';
import { ReactComponent as ExtLink } from '../assets/external-link.svg';

const WorkPageStyle = css`
  & {
    padding-bottom: 10rem;
  }

  .project-title {
    font-size: var(--step-0);
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  
  .project-grid {
    list-style: none;
    padding: 0px;
    margin: 50px 0px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    gap: 15px;
    position: relative;
  }

  .project-inner {
    padding: 2rem 1.75rem;
    background: #f1e4b9;
    color: #315a69;
    border-radius: 4px;
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    .folder svg {
      width: 40px;
      height: 40px;
    }
    .ext-link svg{
      width: 23px;
      height: 23px;
    }
  }
`;

const WorkPage = () => {
  return (
    <section id="work" css={[WorkPageStyle]}>
      <h1 className="title">Work</h1>
      <ul className="project-grid">
        <li>
          <a href="https://jimmyjoy.com/" target="_blank">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder"><Folder /></div>
                  <div className="ext-link"><ExtLink /></div>
                </div>
                <h3 className="project-title">Jimmy Joy</h3>
                <div className="project-description"><p>A Shopify theme I built.</p></div>
              </header>
              <footer></footer>
            </div>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder"><Folder /></div>
                  <div className="ext-link"><ExtLink /></div>
                </div>
                <h3 className="project-title">API</h3>
                <div className="project-description"><p>Weather app using OpenWeather API</p></div>
              </header>
              <footer></footer>
            </div>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder"><Folder /></div>
                  <div className="ext-link"><ExtLink /></div>
                </div>
                <h3 className="project-title">Sanity</h3>
                <div className="project-description"><p>Blog using Sanity</p></div>
              </header>
              <footer></footer>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default WorkPage;
