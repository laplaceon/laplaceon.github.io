import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return (
      <header className="container header-container">
        <div className="row">
          <div className="col-12 col-md-6 header-left">
            <h1>Riyadh Rahman</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className="col-12 col-md-4 header-right">
            <div className="icons">
              <a href="https://github.com/laplaceon" className="social" title="GitHub">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/riyadh-rahman-1556161b7/" className="social" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <p className="info"><a href="tel:917-342-2410">(917) 342-2410</a></p>
            <p className="info"><a href="mailto:riyadh.rahman.work@gmail.com">riyadh.rahman.work@gmail.com</a></p>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;