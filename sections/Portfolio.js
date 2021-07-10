import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLORS from "../assets/colors";
import { fadePageAnimation } from "../components/Animations";
import Button from "../components/Button";
import Card from "../components/Card";

const Portfolio = () => {
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let reveal3 = useRef(null);
  let reveal4 = useRef(null);

  useEffect(() => {
    fadePageAnimation(reveal1, reveal2, reveal3, reveal4);
  }, []);

  return (
    <PortfolioTag>
      <div className="sections" id="portfolio">
        <section className="portfoliopage">
          <div className="portfoliopage__container">
            <h2 className="text-center" ref={(el) => (reveal1 = el)}>
              Look at My Products.
            </h2>
            <div ref={(el) => (reveal2 = el)}>
              <Button name="Contact Me" />
            </div>
            <div className="portfoliopage__split">
              <div ref={(el) => (reveal3 = el)}>
                <Card
                  name="Ecommerce WebApp"
                  description="MongoDB | Express | React | NodeJs"
                  url="https://tshirts-mern.herokuapp.com/"
                  image="/Images/ecommerce-project.jpg"
                />
              </div>
              <div ref={(el) => (reveal4 = el)}>
                <Card
                  name="Movie Nomination"
                  description="React | Context API"
                  url="https://tshirts-mern.herokuapp.com/"
                  image="/Images/shoppies-project.jpg"
                />
              </div>
            </div>

            {/* <h1>
                <span>Think. </span>
                Make.
                <span> Solve!</span>
              </h1>*/}
          </div>
        </section>
      </div>
    </PortfolioTag>
  );
};

export default Portfolio;

const PortfolioTag = styled.div`
  .portfoliopage {
    background-image: url("/Images/portfolio-bg.svg");
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    h2 {
      text-align: center;
      font-size: 2.2rem;
    }
    .text-center {
      &:before {
        content: "╾Portfolio";
        color: ${COLORS.PURPLE_COLOR};
        font-size: 1.3rem;
        font-weight: 800;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    /* h1 {
      text-align: center;
      font-size: 3.2rem;
      color: ${COLORS.PRIMARY_COLOR};
      span {
        font-weight: 800;
        -webkit-text-stroke: 1px ${COLORS.PRIMARY_COLOR};
        -webkit-text-fill-color: white;
      }
    } */
    button {
      margin: 2.4em auto;
      display: block;
    }
    &__container {
      margin-inline: auto;
      width: min(90%, 85rem);
      margin-top: 3em;
    }
    &__split {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        margin: 2.4em auto;
        display: block;
      }
    }
  }
  @media (min-width: 981px) {
    .portfoliopage {
      background-image: url("/Images/portfolio-bg.svg");
      flex-direction: row;
      &__container {
        margin-top: 2em;
        flex-direction: row;
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
