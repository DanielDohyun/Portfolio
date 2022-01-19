import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer__icons">
        <a
          className="footer__linked"
          target="blank"
          href="https://linkedin.com/in/daniel-dh-kim"
        >
          {/* <img
            alt="linkedin img"
            className="footer__linkedImg"
            src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
          /> */}
          <i className="footer__img fab fa-linkedin"></i>
        </a>

        <a className="footer__email" href="mailto:kkdh1109@hotmail.com">
          {/* <img
            alt="email img"
            className="footer__emailImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIQf-W0jYu71zFDsOFjkpbCp6QPKzV-gVzQ&usqp=CAU"
          /> */}
          <i className=" footer__img fas fa-envelope"></i>
        </a>
        <a
          className="footer__git"
          target="blank"
          href="https://github.com/danielDohyun"
        >
          <i className="footer__img footer__gitImg fab fa-github"></i>
          {/* <img alt="git img" className="footer__gitImg" src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" /> */}
        </a>
      </div>

      <h5 className="footer__name">
        Daniel Kim <span className="footer__yr">@2021</span>
      </h5>
    </div>
  );
}

export default Footer;
