import React from "react";
import styled from "styled-components";
import Image from "next/image";

const SocialIcons = () => {
  return (
    <SocialIconsTag>
      <div id="fixed-social">
        <div>
          <a href="#" className="fixed-youtube" target="_blank">
            <Image
              src="/Images/youtube.png"
              height="512px"
              width="512px"
            ></Image>
            <span>Youtube</span>
          </a>
        </div>
        <div>
          <a href="#" className="fixed-linkedin" target="_blank">
            <Image
              src="/Images/linkedin.png"
              height="512px"
              width="512px"
            ></Image>{" "}
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </SocialIconsTag>
  );
};

export default SocialIcons;

const SocialIconsTag = styled.div`
  /* fixed social*/
  #fixed-social {
    position: sticky;
  }

  #fixed-social a {
    color: #fff;
    display: block;
    height: 40px;
    position: relative;
    text-align: center;
    line-height: 40px;
    width: 40px;
    margin-bottom: 1px;
    z-index: 2;
  }
  #fixed-social a:hover > span {
    visibility: visible;
    left: 41px;
    opacity: 1;
  }
  #fixed-social a span {
    line-height: 40px;
    left: 60px;
    position: absolute;
    text-align: center;
    width: 120px;
    visibility: hidden;
    transition-duration: 0.5s;
    z-index: 2;
    opacity: 0;
  }
  /* .fixed-youtube {
    background-color: #ff0000;
  } */
  .fixed-youtube span {
    background-color: #ff0000;
  }
  /* .fixed-linkedin {
    background-color: #0a66c2;
  } */
  .fixed-linkedin span {
    background-color: #0a66c2;
  }
`;
