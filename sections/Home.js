import React from "react";
import styled from "styled-components";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
import Image from "next/image";
import COLORS from "../assets/colors";
import Navbar from "../components/Navbar";

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
                  I bridge the gap between you and your customer using code!
                </h1>
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
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    &__container {
      margin-inline: auto;
      width: min(90%, 74rem);
    }
    &__split {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        text-align: center;
        font-size: 1.7rem;
        color: ${COLORS.PRIMARY_COLOR};
      }
    }
  }
  @media (min-width: 981px) {
    .homepage {
      &__split {
        flex-direction: row;
      }
      &__split > * {
        flex-basis: 100%;
      }
    }
  }
`;
