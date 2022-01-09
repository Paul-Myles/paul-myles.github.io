import React from 'react';
import { css } from '@emotion/react';

const ExperiencePageStyle = css`
& {
  padding-bottom: 10rem;
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
    bottom: 10px;
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
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h1>Millienium Group</h1>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h1>DDB Group</h1>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h1>Yoobee</h1>
            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
