import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLORS from "../assets/colors";
import { fadePageAnimation } from "../components/Animations";
import Button from "../components/Button";
import SkewStack from "../components/SkewStack";

const Services = () => {
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let reveal3 = useRef(null);
  let reveal4 = useRef(null);

  useEffect(() => {
    fadePageAnimation(reveal1, reveal2, reveal3, reveal4);
  }, []);

  return (
    <ServicesTag>
      <div className="sections" id="servicespage">
        <section className="servicespage">
          <div className="servicespage__container">
            <div className="servicespage__split">
              <div>
                <div className="notation" ref={(el) => (reveal1 = el)}></div>
                <h2 ref={(el) => (reveal2 = el)}>
                  Experienced building web application with backend API systems
                  using the below stack!
                </h2>
                <div ref={(el) => (reveal3 = el)}>
                  <a href="#portfoliopage">
                    <Button name="Portfolio" dark="dark" />
                  </a>
                </div>
              </div>
              <div ref={(el) => (reveal4 = el)}>
                <SkewStack />
              </div>
            </div>
          </div>
        </section>
      </div>
    </ServicesTag>
  );
};

export default Services;

const ServicesTag = styled.div`
  .servicespage {
    background-color: ${COLORS.PRIMARY_BLACK};
    background-image: url("/Images/services-bg.svg");
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &__container {
      margin-inline: auto;
      width: min(90%, 85rem);
      margin: 2em 0;
    }
    &__split {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .notation {
        &:before {
          content: "???What I know";
          color: ${COLORS.TERTIARY_COLOR};
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      h2 {
        color: ${COLORS.SECONDARY_COLOR};
        text-align: center;
        font-size: 1.6rem;
      }

      button {
        margin: 0em auto;
        display: block;
      }
    }
  }
  @media (min-width: 981px) {
    .servicespage {
      background-image: url("/Images/services-bg.svg");
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
