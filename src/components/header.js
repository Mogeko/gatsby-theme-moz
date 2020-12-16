import { styled } from "linaria/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from "./layout"

export default function Header({ siteTitle, children }) {
  return (
    <HeaderBar>
      <Container>
        <Title>
          <Link to="/">{siteTitle}</Link>
        </Title>
        <Menu>{children}</Menu>
      </Container>
    </HeaderBar>
  )
}

const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  box-shadow: #0000000d 0px 4px 12px 0px;
  ${Container} {
    display: flex;
    align-items: center;
    min-height: 54px;
    overflow: hidden;
    .homepage & {
      flex-direction: column;
    }
  }
  .homepage & {
    border-bottom: 1px solid #0000001a;
    margin: 0 0 32px;
    box-shadow: unset;
  }
`

const Title = styled.h1`
  display: block;
  flex: 0 0 auto;
  margin: 0 40px 0 0;
  font-family: "Libre Barcode 128 Text", cursive;
  font-size: 2.25em;
  font-weight: 300;
  a:hover {
    color: black;
  }
  .homepage & {
    font-size: 13em;
    line-height: 1em;
    margin: 0.5em auto;
  }
`

const Menu = styled.nav`
  display: flex;
  flex: 1 1 auto;
  overflow: auto;
  a {
    &:first-child {
      margin: 0 15px 0 0;
    }
    &:last-child {
      margin: 0 0 0 15px;
    }
    &:hover {
      fill: #191919;
      color: #191919;
    }
    flex-grow: 0;
    margin: 0 15px 0;
    text-transform: uppercase;
    font-size: 0.88em;
    color: #757575;
  }
  .homepage & {
    flex: 0 1 auto;
    margin: 25px auto;
    font-size: 1.25em;
    width: 100%;
  }
`

export const HeaderGap = styled.span`
  flex-grow: 1;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}
