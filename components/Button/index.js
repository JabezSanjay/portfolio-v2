import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/colors";

const Button = ({ name, dark, width }) => {
  return (
    <ButtonTag>
      {dark ? (
        <button className="skew-button" style={{ color: "#FFFFFF" }}>
          <span>{name}</span>
        </button>
      ) : (
        <button
          className="skew-button"
          style={{ color: "#5A4FF8", width: width ? "100%" : "auto" }}
        >
          <span>{name}</span>
        </button>
      )}
    </ButtonTag>
  );
};

export default Button;

const ButtonTag = styled.div`
  .skew-button {
    cursor: pointer;
    outline: none;
    backface-visibility: hidden;
    position: relative;
    display: inline-block;
    padding: 0;
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${COLORS.PURPLE_COLOR};
    font-size: 1rem;
    font-weight: 700;

    // Text
    span {
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      position: relative;
      display: block;
      padding: 20px 50px;
      z-index: 3;
    }
    // Border
    &:before,
    span:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) skewX(-20deg);
      width: 100%;
      height: 50px;
      border: 1px solid ${COLORS.TERTIARY_COLOR};
      z-index: 2;
    }

    span:before {
      display: block;
      transform: translate(-50%, -50%) skew(-20deg);
      transform-origin: center center;
      z-index: -1;
    }

    // Fill
    &:after {
      transition: all 100ms ease-out;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      transform: skewX(-20deg) scaleX(0);
      width: 100%;
      height: 100%;
      background-color: ${COLORS.TERTIARY_COLOR};
      border: 1px solid transparent;
      z-index: 1;
    }

    // Hover
    &:hover {
      span:before {
        animation: fill 1s ease-out;
        animation-fill-mode: forwards;
      }

      &:after {
        animation: swoosh 1.5s ease-in;
      }
    }

    // Active
    &:active {
      &:before {
        background-color: darken(#0e3876, 20%);
      }
    }
  }

  // Animation
  // ==========================================================================
  @keyframes swoosh {
    0% {
      transform-origin: left center;
    }

    20% {
      transform: skewX(-20deg) scaleX(1);
      transform-origin: left center;
    }

    21% {
      transform-origin: right center;
    }

    50% {
      transform: skewX(-20deg) scaleX(0);
      transform-origin: right center;
    }
  }

  @keyframes fill {
    0% {
      background-color: rgba(#0e3876, 0);
    }

    20% {
      opacity: 0.5;
      border-width: 15px;
      border-color: darken(#0e3876, 10%);
    }

    100% {
      opacity: 0.5;
      border-width: 1px;
      background-color: rgba(#0e3876, 0.5);
    }
  }
`;
