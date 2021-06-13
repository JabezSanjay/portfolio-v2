import React from "react";
import styled from "styled-components";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
import Image from "next/image";
import COLORS from "../assets/colors";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Home = () => {
  return (
    <HomeTag>
      <Element name="home">
        <Navbar />
        <section className="homepage">
          <div className="homepage__container">
            <div className="homepage__split">
              <div>
                <h1>
                  I bridge the gap between
                  <span> you</span> and your <span>customer</span> using{" "}
                  <span>code!</span>
                </h1>
                <Button name="Portfolio" />
              </div>

              <div>
                <Image
                  height={353}
                  width={627}
                  src="/Images/Homepage_Illustration.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </Element>
    </HomeTag>
  );
};

export default Home;

const HomeTag = styled.div`
  .homepage {
    background-image: url("/Images/home-wave.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
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
    .homepage {
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
