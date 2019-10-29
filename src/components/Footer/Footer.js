import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary,textAlign:'left'}}>Made by <span role="img" aria-label="heart">❤️</span><a href="#" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Seyed mahdi</a> <span role="img" aria-label="heart">❤️</span></div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;