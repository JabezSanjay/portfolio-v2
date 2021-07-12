import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/colors";

const SkewStack = () => {
  return (
    <SkewStackTag>
      <div className="skew">
        <h1 className="text">
          <div className="line">
            <p>MongoDB</p>
          </div>
          <div className="line">
            <p>EXPRESS</p>
          </div>
          <div className="line">
            <p>REACT</p>
          </div>
          <div className="line last">
            <p>NODE</p>
          </div>
        </h1>
      </div>
    </SkewStackTag>
  );
};

export default SkewStack;

const SkewStackTag = styled.div`
  .skew {
    color: white;
  }
  .text {
    font-size: 3.125rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-top: 1.5em;

    .line {
      overflow: hidden;
      white-space: nowrap;
      height: 60px;

      &:first-child {
        & + .line {
          margin: 15px;
          & + .line {
            margin: 15px;
          }
        }
      }
      > p {
        margin: 0;
        height: 60px;
        overflow: hidden;
        font-size: 1em;
        line-height: 0.8;
        white-space: nowrap;
      }
    }
    .line:nth-child(odd) {
      transform: skew(0deg, -20deg) scaleY(1.33333);
      margin-left: -20px;
    }
    .line:nth-child(even) {
      transform: skew(60deg, -20deg) scaleY(0.66667);
      margin-left: 80px;
      margin-top: -11.7px;
    }

    p::first-letter {
      font-weight: 800;
      color: ${COLORS.TERTIARY_COLOR};

      font-size: 4.375rem;
    }
  }
  @media (min-width: 981px) {
    .text {
      margin-top: 0;
    }
  }
`;
