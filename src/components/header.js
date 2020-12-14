import { styled } from "linaria/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export default function Header({ siteTitle, children }) {
  return (
    <HeaderBar>
      <div>
        <Title>
          <Link to="/">{siteTitle}</Link>
        </Title>
        <Menu>{children}</Menu>
      </div>
    </HeaderBar>
  )
}

const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  box-shadow: #0000000d 0px 4px 12px 0px;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0px 64px;
    min-height: 54px;
    min-width: 0px;
    max-width: 1192px;
    overflow: hidden;
    .homepage & {
      flex-direction: column;
      margin: 0px 20px;
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
