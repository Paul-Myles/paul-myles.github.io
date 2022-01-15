import React from 'react';
import media from '../styles/media';
import { css } from '@emotion/react';

const ContactPageStyle = css`
  min-height: 450px;
  ${media.small} {
    min-height: 300px;
  }

  .email-link {
    color: #315a69;
    font-weight: 700;
    border: 2px solid #f1e4b9;
    background-color: #f1e4b9;
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    margin-top: 50px;
    display: block;
    text-align: center;
    width: 178px;
    &:hover {
      border: 2px solid #f1e4b9;
      color: #f1e4b9;
      background-color: #315a69;
    }
    ${media.small} {
      padding: 0.55em;
      width: 160px;
    }
  }
`;

const ContactPage = () => {
  return (
    <section id="contact" css={[ContactPageStyle]}>
      <h1 className="title">What's Next?</h1>
      <p>I'm currently looking for any new opportunities,<br />so if you have a spot going lets talk!</p>
      <a className="email-link" href="mailto:pmyles86@gmail.com" rel="noopener noreferrer" target="_blank">Get In Touch</a>
    </section>
  );
};

export default ContactPage;
