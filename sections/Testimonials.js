import React from "react";
import Image from "next/image";

import Testimonial from "../components/Testimonial";
import styled from "styled-components";
import COLORS from "../assets/colors";
import Button from "../components/Button";
var Scroll = require("react-scroll");
var Element = Scroll.Element;

const Testimonials = () => {
  return (
    <TestimonialsTag>
      <Element name="testimonial">
        <div className="sections">
          <section className="testimonialpage">
            <div className="testimonialpage__container">
              <h1>Testimonial</h1>
              <div className="testimonialpage__split">
                <div>
                  <Testimonial />
                </div>
                <div>
                  {/* <div className="notation"></div> */}
                  <h2>
                    I enjoy creating delightful, human centered digital
                    experiences.
                  </h2>
                </div>
              </div>
              <div className="testimonialpage__split">
                <div className="changeable__1">
                  <Testimonial />
                </div>
                <div className="changeable__2">
                  {/* <div className="notation"></div> */}
                  <h2>
                    I enjoy creating delightful, human centered digital
                    experiences.
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Element>
    </TestimonialsTag>
  );
};

export default Testimonials;

const TestimonialsTag = styled.div`
  .testimonialpage {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    &__container {
      margin-inline: auto;
      width: min(90%, 85rem);
      h1 {
        text-align: center;
        font-size: 2.2rem;
        &:before {
          content: "╾What People Say";
          color: ${COLORS.PURPLE_COLOR};
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    &__split {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      /* .notation {
        &:before {
          content: "✨";
          color: ${COLORS.PURPLE_COLOR};
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          margin-top: 1.2em;
          justify-content: center;
          align-items: center;
        }
      } */

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
    .testimonialpage {
      &__container {
        margin-top: 2em;
      }
      #interchange:nth-child(1) {
        order: 2;
      }
      &__split {
        .changeable__1 {
          order: 2;
        }
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
