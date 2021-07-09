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
                  I worked with Jabez on multiple projects. I love his
                  dedication towards the work, especially taking ownership of
                  the project. His eagerness to learn new technology and
                  parallel implementation is something amusing. I recommend him
                  as an expert in React, Node, MERN/Fullstack Engineer!
                </q>
                <h4>- Jegan Selvaraj</h4>
                <h5>
                  Tech Serial-Entrepreneur | Angel Investor | Startup Advisor &
                  Mentor | Ex CTO - Oasys Cybernetics | Ex CTO & Director - TVS
                  NEXT | Ex CEO - Blisslogix
                </h5>
              </div>
            </div>
            <div className="testimonialpage__split">
              <div className="changeable__1" ref={(el) => (reveal4 = el)}>
                <Testimonial />
              </div>
              <div className="changeable__2" ref={(el) => (reveal5 = el)}>
                {/* <div className="notation"></div> */}
                <q>
                  I worked with Jabez on multiple projects. I love his
                  dedication towards the work, especially taking ownership of
                  the project. His eagerness to learn new technology and
                  parallel implementation is something amusing. I recommend him
                  as an expert in React, Node, MERN/Fullstack Engineer!
                </q>
                <h4>- Jayesh Bino Rajiv</h4>
                <h5>Senior Software Developer - Wipro Technologies</h5>
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
        font-size: 1.05rem;
        width: auto;
        display: table;
      }
      h4 {
        font-size: 1.2rem;
        text-align: center;
      }
      h5 {
        font-size: 0.9rem;
        font-weight: 500;
        margin-top: -1em;
        text-align: center;
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
          font-size: 1.1rem;
        }
      }
      &__split > * {
        flex-basis: 100%;
      }
    }
  }
  @media (min-width: 1350px) {
    .testimonialpage {
      &__split {
        q {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
