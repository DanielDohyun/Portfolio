import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div id="footer" className="footer"> 
            <div className="footer__icons">
                <a className="footer__linked" target="_blank" href="https://linkedin.com/in/daniel-dh-kim">
                    <img className="footer__linkedImg" src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" />
                </a>
                
                <a className="footer__email" href="mailto:kkdh1109@hotmail.com">
                    <img className="footer__emailImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIQf-W0jYu71zFDsOFjkpbCp6QPKzV-gVzQ&usqp=CAU" />
                </a>
            </div>
            
            <h5 className="footer__phone">Phone: 647-274-1129</h5>
            <h5 className="footer__name">Daniel Kim <span className="footer__yr">@2020</span></h5>
        </div>
    )
}

export default Footer;
