import React from "react";
import styled from "styled-components";

const Burger = ({ open, setOpen }) => {
  const StyledBurger = styled.button`
    // position: absolute;
    top:50%;
    order:1;
    // transform:translateY(-50% );
    right:2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    display: none;

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      display: flex;
    }
    .header__items--right{
      display:none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: var(--txt-color-dark);
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  `;
  return (
    <StyledBurger
      className={open ? "burger__btn active" : "burger__btn "}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
