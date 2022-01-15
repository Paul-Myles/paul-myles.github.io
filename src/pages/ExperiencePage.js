import React from 'react';
import media from '../styles/media';
import { css } from '@emotion/react';

const ExperiencePageStyle = css`
& {
  padding-bottom: 10rem;
}

ul {
  list-style-type: circle;
  padding-left: 20px;
  & > li {
    line-height: 1.1;
    padding: 10px 0 20px;
    ${media.small} {
      font-size: 12px;
      padding: 7px 0;
    }
  }
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  color: #315a69;
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #f1e4b9;
    top: 15px;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
}

.container {
  position: relative;
  background-color: inherit;
  width: 50%;
  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #315a69;
    border: 4px solid #f1e4b9;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
}

.left {
  padding: 10px 40px 0 0;
  left: 0;
  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid #f1e4b9;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #f1e4b9;
  }
}

.right {
  padding: 10px 0 0 40px;
  left: 50%;
  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #f1e4b9;
    border-width: 10px 10px 10px 0;
    border-color: transparent #f1e4b9 transparent transparent;
  }
  &:after {
    left: -16px;
  }
}

.content {
  padding: 20px 30px;
  background-color: #f1e4b9;
  position: relative;
  border-radius: 4px;
}

h1 {
  font-weight: 700;
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }
  
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  
  .container::before {
    left: 60px;
    border: medium solid #f1e4b9;
    border-width: 10px 10px 10px 0;
    border-color: transparent #f1e4b9 transparent transparent;
  }

  .left::after, .right::after {
    left: 15px;
  }
  
  .right {
    left: 0%;
  }
`;

const ExperiencePage = () => {
  return (
    <section id="experience" css={[ExperiencePageStyle]}>
      <h1 className="title">Experience</h1>
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h1>Jimmy Joy</h1>
            <p>2016-2020</p>
            <ul>
              <li>Developed and maintained a custom Shopify Theme using Shopify's Liquid templating language</li>
              <li>Managed all companied stores across different languages</li>
              <li>Collaborated with designers to incorporate UX design principles</li>
            </ul>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h1>Millienium Group</h1>
            <p>2014-2016</p>
            <ul>
              <li>Managed and maintained the companies existing websites</li>
              <li>Worked with new technologies such as .NET and Magento</li>
              <li>Clients included Pacificomm, Digital Mobile, Utilise Energy and more</li>
            </ul>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h1>DDB Group</h1>
            <p>2012-2014</p>
            <ul>
              <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, PHP, JavaScript, and jQuery</li>
              <li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
              <li>Clients included Volkswagen, McDonalds, Westpac, Cadbury, and more</li>
            </ul>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h1>Yoobee</h1>
            <p>2012</p>
            <ul>
              <li>Completed a Diploma of Web development</li>
              <li>Learned the fundamentals of Web Development</li>
              <li>Technologies that were learnt are HTML, CSS JavaScript and PHP </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
