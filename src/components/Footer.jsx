import React from "react";
import './../css/components/Footer.css';
import logo from '../logo_practical_cm.png';

function Footer() {
  return (
    <div className="footerRoot">
      <div className="footerWrapper">
        <div className="footerLinks">
            <a href="https://www.amazon.com/dp/B0D2VDMWDW" target="_blank">Book on Amazon</a>
            <span className="footerLinkSeparator"> | </span>
            <a href="https://www.linkedin.com/in/nicolas-chabanovsky-61266074/" target="_blank">About the author</a>
            
            <a className="logoLink" href="https://practical-cm.com/">
                <img src={logo} />
            </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;