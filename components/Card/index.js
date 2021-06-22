import React from "react";
import Image from "next/image";
import Button from "../Button";
import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import COLORS from "../../assets/colors";

const Card = (props) => {
  let projectName = props.name;
  let projectDescription = props.description;
  let projectImage = props.image;
  let projectUrl = props.url;
  return (
    <CardTag>
      <div className="box">
        <div className="text">
          <ExternalLink href={projectUrl}>
            <div>
              <h3>{projectName}</h3>
              <p>{projectDescription}</p>
            </div>
          </ExternalLink>
        </div>
      </div>
    </CardTag>
  );
};

export default Card;

const CardTag = styled.div`
  .box {
    background-color: transparent;
    border-radius: 3px;
    position: relative;
    left: 50%;
    top: 100%;
    margin-top: 11em;
    color: ${COLORS.SECONDARY_COLOR};
    transform: translate(-50%, -50%);
    width: 280px;
    height: 300px;
    transform-style: preserve-3d;
    perspective: 2000px;
    transition: 0.4s;
    text-align: center;
    cursor: pointer;
    transform: translate(-50%, -50%) rotateY(-20deg) skewY(3deg);
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      border-top: 20px solid ${COLORS.PRIMARY_COLOR};
      border-left: 20px solid ${COLORS.PRIMARY_COLOR};
      box-sizing: border-box;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom: 20px solid ${COLORS.PRIMARY_COLOR};
      border-right: 20px solid ${COLORS.PRIMARY_COLOR};
      box-sizing: border-box;
    }

    .text {
      transform: rotateY(20deg) skewY(-3deg);
      position: absolute;
      top: 30px;
      left: -30px;
      width: calc(100% + 60px);
      height: calc(100% - 60px);
      background-color: ${COLORS.PRIMARY_BLACK};
      border-radius: 3px;
      transition: 0.4s;
      div {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        text-align: center;
        padding: 30px 60px;
        h3 {
          font-size: 25px;
          margin-bottom: 5px;
          color: ${COLORS.TERTIARY_COLOR};
        }
        p {
          font-size: 12.5px;
          letter-spacing: 3px;
        }
        img {
          width: 200px;
        }
      }
    }
  }

  /* Moto G5 */
  @media (min-width: 331px) and (max-width: 370px) {
    .box {
      width: 260px;
      height: 300px;
      .text {
        div {
          h3 {
            font-size: 24px;
          }
          p {
            font-size: 13px;
          }
          img {
            width: 200px;
          }
        }
      }
    }
  }
  /* iPhone SE & 5 */
  @media (min-width: 300px) and (max-width: 330px) {
    .box {
      width: 230px;
      height: 300px;
      .text {
        div {
          margin-left: -20px;
          h3 {
            font-size: 22.5px;
          }
          p {
            font-size: 13px;
          }
          img {
            width: 190px;
          }
        }
      }
    }
  }
  /* Galaxy Fold Devices */
  @media (min-width: 240px) and (max-width: 290px) {
    .box {
      width: 200px;
      height: 300px;

      .text {
        div {
          margin-left: -30px;
          h3 {
            font-size: 22.5px;
          }
          p {
            font-size: 13px;
          }
          img {
            width: 190px;
          }
        }
      }
    }
  }

  /* iPad Devices */
  @media (min-width: 720px) and (max-width: 800px) {
    .box {
      width: 400px;
      height: 330px;
      .text {
        div {
          h3 {
            font-size: 30px;
          }
          p {
            font-size: 15px;
          }
          img {
            width: 250px;
          }
        }
      }
    }
  }

  /* iPad Pro Devices */
  @media (min-width: 950px) and (max-width: 1100px) {
    .box {
      width: 400px;
      height: 350px;
      .text {
        div {
          h3 {
            font-size: 30px;
          }
          p {
            font-size: 15px;
          }
          img {
            width: 250px;
          }
        }
      }
    }
  }

  /* Big Screen Devices */
  @media (min-width: 1101px) {
    .box {
      width: 400px;
      height: 330px;
      .text {
        div {
          h3 {
            font-size: 32.5px;
          }
          p {
            font-size: 15px;
          }
          img {
            width: 250px;
          }
        }
      }
    }
  }
`;
