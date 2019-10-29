import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';
import About from './About.json';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid" style={{textAlign:'center'}}>
        <h1 style={{ color: colorPrimary, }}>{About.title}</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p className="highlight">
              {About.p1}
            </p>
            <p>
              {About.p2}           
            </p>
            <p>
              {About.p3}
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              []=[]=[]=[](•◡•)[]=[]=[]=[]
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
