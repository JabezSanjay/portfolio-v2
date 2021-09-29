import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import Image from "next/image";
import COLORS from "../assets/colors";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { fadePageAnimation } from "../components/Animations";

const Learn = () => {
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let reveal3 = useRef(null);
  let reveal4 = useRef(null);
  let learnPage = useRef(null);

  useEffect(() => {
    fadePageAnimation(reveal1, reveal2, reveal3, reveal4);
    gsap.to(learnPage, { duration: 0, css: { visibility: "visible" } });
  }, []);

  return (
    <HomeTag>
      <div className="main" ref={(el) => (learnPage = el)} id="learnPage">
        <Navbar />
        <section className="learnPage">
          <div className="learnPage__container">
            <div className="learnPage__split">
              <div>
                <h1 ref={(el) => (reveal1 = el)}>
                  Learn With <span>Me!</span>
                </h1>
                <div
                  className="learnPage__split-inputGroup"
                  ref={(el) => (reveal2 = el)}
                >
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="number" placeholder="Phone Number" />
                </div>
                <div ref={(el) => (reveal3 = el)}>
                  <Button name="Let's Learn!" width="true" />
                </div>
              </div>

              <div ref={(el) => (reveal4 = el)}>
                <Image height={353} width={627} src="/Images/learn.svg" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeTag>
  );
};

export default Learn;

const HomeTag = styled.div`
  .main {
    visibility: hidden;
  }
  .learnPage {
    background-image: url("/Images/learn-wave.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 89vh;
    &__container {
      margin-inline: auto;
      width: min(90%, 85rem);
      margin-bottom: 10rem;
    }
    &__split {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-inputGroup {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > input {
          margin-bottom: 1em;
          width: 100%;
          border: none;
          border-bottom: 0.1px solid ${COLORS.PRIMARY_COLOR};
          padding: 1rem;
          font-size: 1.3rem;
          color: ${COLORS.PRIMARY_COLOR};
          &::placeholder {
            color: ${COLORS.PRIMARY_COLOR};
            opacity: 0.6;
          }
          &:focus {
            outline: none;
          }
        }
      }
      h1 {
        text-align: center;
        font-size: 1.9rem;
        color: ${COLORS.PRIMARY_BLACK};
        span {
          font-weight: 800;
          -webkit-text-stroke: 1.2px ${COLORS.PURPLE_COLOR};
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
    .learnPage {
      &__container {
        margin-bottom: 13rem;
      }
      &__split {
        flex-direction: row;
        h1 {
          font-size: 2.2rem;
        }
      }
      &__split > * {
        flex-basis: 100%;
      }
    }
  }
`;
