// Footer.js

import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-name">
            <p><strong>Desenvolvido por: João Ricardo</strong></p>
          </div>
          <div className="footer-info">
            <p><strong>E-mail:</strong> mmrricardo@gmail.com</p>
            <p><strong>GitHub:</strong> @joao-rick</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
