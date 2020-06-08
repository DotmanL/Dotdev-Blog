import React from "react"
import styled from "styled-components"


const NavItem = styled.a`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  font-family: 'Lobster', cursive;
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: black;
  }
`
const NavbarLinks = () => {
  return (
    <>
    <NavItem href='/' > Blog </NavItem>
     <NavItem href='https://dotcodes.netlify.app'  target="_blank" rel="noopener noreferrer"> My Portfolio</NavItem>
     
    </>
  )
}

export default NavbarLinks