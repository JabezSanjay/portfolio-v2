import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from "../Animations";
import COLORS from "../../assets/colors";
var Scroll = require("react-scroll");
var scroller = Scroll.scroller;

const Hamburger = ({ state, opened }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (opened === false) {
      // If menu is closed and we want to open it.
      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (opened === true) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
      staggerText(line1, line2, line3, line4, line5);
    }
  }, [opened]);

  const handleScroll = (page) => {
    scroller.scrollTo(`${page}`);
    state(false);
  };

  return (
    <HamburgerTag>
      <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
        <div
          ref={(el) => (reveal1 = el)}
          className="menu-secondary-background-color"
        ></div>
        <div ref={(el) => (reveal2 = el)} className="menu-layer">
          <div className="menu-layer__items">
            <ul>
              <li
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                ref={(el) => (line1 = el)}
                onClick={() => {
                  handleScroll("home");
                }}
              >
                Home
              </li>
              <li
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                ref={(el) => (line2 = el)}
                onClick={() => {
                  handleScroll("about");
                }}
              >
                About
              </li>
              <li
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                ref={(el) => (line3 = el)}
                onClick={() => {
                  handleScroll("services");
                }}
              >
                Services
              </li>

              <li
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                ref={(el) => (line4 = el)}
                onClick={() => {
                  handleScroll("portfolio");
                }}
              >
                Portfolio
              </li>

              <li
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                ref={(el) => (line5 = el)}
                onClick={() => {
                  handleScroll("contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HamburgerTag>
  );
};

export default Hamburger;

const HamburgerTag = styled.div`
  .hamburger-menu {
    display: none;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    .menu-secondary-background-color {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: -1;
      background: ${COLORS.PRIMARY_COLOR};
    }
    .menu-layer {
      position: relative;
      background: ${COLORS.TERTIARY_COLOR};
      overflow: hidden;
      .menu-layer__items {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background: url("/Images/bg-header-mobile.png") no-repeat 100% 150%/100%
          auto;
        ul {
          text-align: center;
          margin-top: 7em;
          li {
            color: ${COLORS.PRIMARY_COLOR};
            list-style-type: none;
            margin: 0.6em 0.75em 0.6em 0;
            cursor: pointer;
            font-weight: 700;
            font-size: 2rem;
            :hover {
              color: ${COLORS.PURPLE_COLOR};
            }
          }
        }
      }
    }
  }
  //Small devices
  @media (max-width: 375px) {
    .hamburger-menu {
      .menu-layer {
        .menu-layer__items {
          align-items: flex-start;
          ul {
            text-align: left;
            margin-top: 5em;
            li {
              margin: 0.5em 0.75em 0.5em 0;
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }

  //Big screen devices
  @media (min-width: 981px) {
    .hamburger-menu {
      .menu-layer {
        .menu-layer__items {
          justify-content: center;
          background: url("Images/bg-header.png") no-repeat;
          ul {
            li {
              margin: 1.5em 0.75em 1.5em 0;
              font-size: 2.5rem;
            }
          }
        }
      }
    }
  }
  @media (min-width: 490px) and (max-width: 980px) {
    .hamburger-menu {
      .menu-layer {
        .menu-layer__items {
          justify-content: center;
          background: none;
          ul {
            li {
              margin: 1.5em 0.75em 1.5em 0;
              font-size: 2.5rem;
            }
          }
        }
      }
    }
  }
`;
