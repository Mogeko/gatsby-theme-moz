import { styled } from "linaria/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  lightNavbarActiveColor,
  lightNavbarBackgroundColor,
  lightNavbarColor,
} from "../styles/variables"

export default function Nav({ siteTitle, children }) {
  const Navbar = styled.nav`
    margin: auto;
    width: inherit;
    max-width: inherit;
    min-height: 54px;
    z-index: 15;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${lightNavbarBackgroundColor};
    a {
      color: ${lightNavbarColor};
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: inherit;
    }
  `
  const Logo = styled.div`
    display: block;
    flex: 0 0 auto;
    min-height: inherit;
    margin: auto 1.5rem auto 0;
    padding: 0.1rem 0.5rem;
    font-family: "Libre Barcode 128 Text", cursive;
    font-size: 2.5rem;
    line-height: 1;
    font-weight: 300;
    align-items: inherit;
    a:hover {
      fill: ${lightNavbarColor};
      color: ${lightNavbarColor};
    }
  `
  const NavMenu = styled.div`
    display: flex;
    flex: 1 1 auto;
    align-items: inherit;
    padding: 0.1rem 0.5rem;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 0.88em;
    min-height: inherit;
    a {
      padding: 0 1rem;
      font-size: 1rem;
      font-weight: 700;
      user-select: none;
      &:hover {
        fill: ${lightNavbarActiveColor};
        color: ${lightNavbarActiveColor};
      }
    }
  `
  return (
    <Navbar>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <NavMenu>{children}</NavMenu>
    </Navbar>
  )
}

export const NavMenuLeft = styled.div`
  min-height: inherit;
`

export const NavMenuRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: inherit;
  min-height: inherit;
`

Nav.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Nav.defaultProps = {
  siteTitle: ``,
}

NavMenuLeft.propTypes = {
  children: PropTypes.node.isRequired,
}

NavMenuRight.propTypes = {
  children: PropTypes.node.isRequired,
}
