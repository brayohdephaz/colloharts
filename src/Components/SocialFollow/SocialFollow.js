import React from "react";
import "./socialfollow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
  return (
    <div className="social-container center">
      {/* <h3>Social follow</h3> */}
      <a href="#youtube" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2px" />
      </a>
      <a href="#twitter" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2px" />
      </a>
      <a href="#facebook" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2px" />
      </a>
      <a href="#instagram" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2px" />
      </a>
    </div>
  );
};

export default SocialFollow;
