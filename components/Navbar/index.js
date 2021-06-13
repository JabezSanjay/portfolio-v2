import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/colors";
import Hamburger from "../Hamburger";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <NavbarTag>
      <div className="header">
        <h3>
          Jabez <span>Sanjay</span>
        </h3>
        <div className="header__menu-icon">
          <input
            className="menu-icon__checkbox"
            type="checkbox"
            onChange={() => setMenuOpened(!menuOpened)}
            checked={menuOpened}
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Hamburger state={(value) => setMenuOpened(value)} opened={menuOpened} />
    </NavbarTag>
  );
};

export default Navbar;

const NavbarTag = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1em 3em;
    h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: ${COLORS.PRIMARY_COLOR};
      span {
        color: ${COLORS.PURPLE_COLOR};
      }
    }
    &__menu-icon {
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
      transform: scale(1.5);
      margin-top: 1em;
      z-index: 10;
      .menu-icon__checkbox {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        cursor: pointer;
        z-index: 2;
        -webkit-touch-callout: none;
        position: absolute;
        opacity: 0;
      }
      div {
        margin: auto;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 22px;
        height: 12px;
      }
      span {
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${COLORS.PRIMARY_COLOR};
        border-radius: 1px;
        transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

        &:first-of-type {
          top: 0;
        }
        &:last-of-type {
          bottom: 0;
        }
      }
      &.active,
      .menu-icon__checkbox:checked + div {
        span {
          &:first-of-type {
            transform: rotate(45deg);
            top: 5px;
          }
          &:last-of-type {
            transform: rotate(-45deg);
            bottom: 5px;
          }
        }
      }
      &.active:hover span:first-of-type,
      &.active:hover span:last-of-type,
      &:hover .menu-icon__checkbox:checked + div span:first-of-type,
      &:hover .menu-icon__checkbox:checked + div span:last-of-type {
        width: 22px;
      }
    }
  }
`;
