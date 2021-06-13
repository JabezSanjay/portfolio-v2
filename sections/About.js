import React from "react";
var Scroll = require("react-scroll");
import Image from "next/image";
import styled from "styled-components";
import COLORS from "../assets/colors";
import Button from "../components/Button";
var Element = Scroll.Element;

const About = () => {
  return (
    <AboutTag>
      <Element name="about">
        <div className="sections">
          <section className="aboutpage">
            <div className="aboutpage__container">
              <div className="aboutpage__split">
                <div>
                  <Image
                    height={353}
                    width={627}
                    src="/Images/about-illustration.svg"
                  />
                </div>
                <div>
                  <div className="notation"></div>
                  <h2>
                    I enjoy creating delightful, human centered digital
                    experiences.
                  </h2>
                  <Button name="Contact Me" />
                  <h1>
                    <span>Think. </span>
                    Make.
                    <span> Solve!</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Element>
    </AboutTag>
  );
};

export default About;

const AboutTag = styled.div`
  .aboutpage {
    background-color: #ffffff;
    background-image: url("/Images/Page-Turner-mobile.svg");
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
    background-position: top left;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    &__container {
      margin-inline: auto;
      width: min(90%, 85rem);
      margin-top: 7.5em;
    }
    &__split {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .notation {
        &:before {
          content: "╾What I do";
          color: ${COLORS.PURPLE_COLOR};
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          margin-top: 1.2em;
          justify-content: center;
          align-items: center;
        }
      }

      h2 {
        color: ${COLORS.PRIMARY_BLACK};
        text-align: center;
        font-size: 1.6rem;
      }
      h1 {
        text-align: center;
        font-size: 3.2rem;
        color: ${COLORS.PRIMARY_COLOR};
        span {
          font-weight: 800;
          -webkit-text-stroke: 1px ${COLORS.PRIMARY_COLOR};
          -webkit-text-fill-color: white;
        }
      }
      button {
        margin: 2.4em auto;
        display: block;
      }
    }
  }
  @media (min-width: 981px) {
    .aboutpage {
      background-image: url("/Images/Page-Turner-desktop.svg");
      &__container {
        margin-top: 2em;
      }
      &__split {
        flex-direction: row;
        h1 {
          font-size: 3.8rem;
        }
        h2 {
          font-size: 2.2rem;
        }
      }
      &__split > * {
        flex-basis: 100%;
      }
    }
  }
`;
