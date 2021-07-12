import React from "react";
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
      <div className="card" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="inner">
          <h2 className="title">{projectName}</h2>
          <time className="subtitle">{projectDescription}</time>
          <div className="button">
            <button className="code-button">Code</button>
            <button className="preview-button">Preview</button>
          </div>
        </div>
      </div>
    </CardTag>
  );
};

export default Card;

const CardTag = styled.div`
  .card {
    height: 400px;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    text-decoration: none;

    margin-bottom: 20px;
    background-size: cover;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin: 0 0.75em 1.25em 0.75em;
  }

  .inner {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    box-sizing: border-box;
    padding: 10px;
    opacity: 0.9;
  }

  .title {
    font-size: 24px;
    color: black;
    text-align: center;
    font-weight: 700;
    color: ${COLORS.PRIMARY_BLACK};
    text-shadow: 0px 2px 2px #a6f8d5;
    position: relative;
    margin: 0 0 20px 0;
  }

  .subtitle {
    color: ${COLORS.PRIMARY_COLOR};
    text-align: center;
  }
  .button {
    display: flex;
    margin-top: -1em;
    button {
      background-color: transparent;
      border: 2px solid ${COLORS.PURPLE_COLOR};
      color: ${COLORS.PURPLE_COLOR};
      padding: 12px 16px;
      font-size: 16px;
      cursor: pointer;
      opacity: 1;
      transform: skewX(-10deg);
      :hover {
        background: ${COLORS.PURPLE_COLOR};
        color: ${COLORS.SECONDARY_COLOR};
      }
    }
    .code-button {
      margin-right: 0.5em;
    }
    .preview-button {
      margin-left: 0.5em;
    }
  }

  @media (min-width: 981px) {
    .siteTitle {
      font-size: 60px;
    }
    .card {
      height: 500px;
    }
    .inner {
      width: 50%;
      height: 100%;
      opacity: 1;
    }
    .title {
      font-size: 30px;
    }
  }
`;
