import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import "./Nav.css"
// import Logo from "./Logo"

const Navigation = styled.nav`
  height: 9vh;
  display: flex;
  position: fixed;
  box-shadow: ${props =>
    props.shadow ? "0 5px 5px -2px rgba(0, 0, 0, 0.2)" : "none"};
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 3vw;
  margin-bottom: 0px;
  width: 100vw;
  top: 0;
  z-index: 2;
  align-self: center;
  @media (max-width: 800px) {
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 800px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #f1faee;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Link = styled.a`
  color: black;
  text-decoration: none;
`

const Hamburger = styled.div`
  background-color: black;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: black;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = ({ homepage }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (homepage) {
        const bodyScrollTop =
          document.documentElement.scrollTop || document.body.scrollTop

        const scrolledDownEnough = bodyScrollTop > 520 ? true : false
        setScrolledDownEnough(scrolledDownEnough)
      } else {
        const bodyScrollTop =
          document.documentElement.scrollTop || document.body.scrollTop

        const scrolledDownEnough = bodyScrollTop > 30 ? true : false
        setScrolledDownEnough(scrolledDownEnough)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolledDownEnough, homepage])

  const newNav = scrolledDownEnough ? "nav-background" : ""

  return (
    <>
      {homepage ? (
        <>
          <Navigation className={newNav}>
            {/* <Logo /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              <Link href="/">
                <h2>Dot Blog</h2>
              </Link>
            </div>
            <Toggle
              navbarOpen={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
              <Navbox>
                <NavbarLinks />
              </Navbox>
            ) : (
              <Navbox open>
                <NavbarLinks />
              </Navbox>
            )}
          </Navigation>{" "}
        </>
      ) : (
        <>
          <Navigation shadow className={newNav}>
            {/* <Logo /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              <Link href="/">
                <h2>Dot Blog</h2>
              </Link>
            </div>
            <Toggle
              navbarOpen={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
              <Navbox>
                <NavbarLinks />
              </Navbox>
            ) : (
              <Navbox open>
                <NavbarLinks />
              </Navbox>
            )}
          </Navigation>
        </>
      )}
    </>
  )
}

export default Navbar
