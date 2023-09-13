import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const footSection = () => {
    return (
<div className="profile_link">
        <div className="profile">
          <a href="https://www.linkedin.com/in/salami-hubeidah-7b90a9260">
           <FaLinkedin
            color="#111827"
            fontSize={24}
            cursor="pointer"
            fontWeight="bolder"
           />
          </a>
          <a href="https://x.com/hubeidatullah?t=B-xuQ3HMcCwS19h_HkEBog&s=09">
           <FaTwitter
            color="#111827"
            fontSize={24}
            fontWeight="bolder"
           />
          </a>
          <a href="https://github.com/HubeidahOsalarmy">
           <FaGithub
            color="#111827"
           fontSize={24}
           cursor="pointer"
           fontWeight="bolder"
           />
          </a>
        </div>

        <div className="terms">
         <p>Conditions of Use</p>
         <p>Privacy & Policy</p>
         <p>Press Room</p>
        </div>

        <div className="copyright">
         <p>© 2023 MovieBox by Hubeidah</p>
        </div>

      </div>

    )}

    export default footSection