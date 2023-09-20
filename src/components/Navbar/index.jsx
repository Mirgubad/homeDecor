import "../Navbar/navbar.css";
import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`

  @media screen and (max-width: 768px) {
    position:absolute;
    width: 100%;
    flex-direction: column;
    height: 100vh;
    padding: 1.6rem;
    background:var(--main-bg);
    transition: transform 0.3s ease-in-out;

    .menu {
      place-items: start;
    }
    .menu__list {
      flex-direction: column;
      align-items: start;
      gap: 3.4rem;
    }
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

    a {
      font-size: 3.2rem;
     }
`;

const Navbar = ({ open, setOpen }) => {
  return (
    <StyledMenu className={`navbar ${open ? "active" : ""}`} open={open}>
      <nav className="menu">
        <menu className="menu__list">
          <li onClick={() => setOpen(false)} className="menu__list--item">
            <NavLink className="link " to="/">
              Home
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)} className="menu__list--item">
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>

          <li onClick={() => setOpen(false)} className="menu__list--item">
            <NavLink className="link" to="/products">
              Products
            </NavLink>
          </li>

          <li onClick={() => setOpen(false)} className="menu__list--item">
            <NavLink className="link" to="/collections">
              Collections
            </NavLink>
          </li>

          <li onClick={() => setOpen(false)} className="menu__list--item">
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </li>
        </menu>
      </nav>
    </StyledMenu>
  );
};

export default Navbar;
