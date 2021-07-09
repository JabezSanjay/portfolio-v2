import React, { useEffect, useRef } from "react";
import Testimonial from "../components/Testimonial";
import styled from "styled-components";
import COLORS from "../assets/colors";
import { fadePageAnimation } from "../components/Animations";

const Testimonials = () => {
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let reveal3 = useRef(null);
  let reveal4 = useRef(null);
  let reveal5 = useRef(null);

  useEffect(() => {
    fadePageAnimation(reveal1, reveal2, reveal3, reveal4, reveal5);
  }, []);

  return (
    <TestimonialsTag>
      <div className="sections">
        <section className="testimonialpage">
          <div className="testimonialpage__container">
            <h1 ref={(el) => (reveal1 = el)}>Testimonial</h1>
            <div className="testimonialpage__split">
              <div ref={(el) => (reveal2 = el)}>
                <Testimonial />
              </div>
              <div ref={(el) => (reveal3 = el)}>
                {/* <div className="notation"></div> */}
                <q>
                  I enjoy creating delightful, human centered digital
                  experiences.
                </q>
                <h4>- Jegan</h4>
              </div>
            </div>
            <div className="testimonialpage__split">
              <div className="changeable__1" ref={(el) => (reveal4 = el)}>
                <Testimonial />
              </div>
              <div className="changeable__2" ref={(el) => (reveal5 = el)}>
                {/* <div className="notation"></div> */}
                <q>
                  I enjoy creating delightful, human centered digital
                  experiences.
                </q>
                <h4>- Jayesh</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </TestimonialsTag>
  );
};

export default Testimonials;

const TestimonialsTag = styled.div`
  .testimonialpage {
    background-color: #ffffff;
    background-image: url("/Images/testimonial-bg.svg");
    background-attachment: fixed;
    background-size: cover;
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
          margin-top: 2em;
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

      q {
        color: ${COLORS.PRIMARY_BLACK};
        text-align: center;
        font-size: 1.6rem;
        width: auto;
        display: table;
      }
      h4 {
        text-align: center;
        margin-bottom: 2em;
        font-size: 1.2rem;
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
        q {
          font-size: 1.7rem;
        }
      }
      &__split > * {
        flex-basis: 100%;
      }
    }
  }
`;
