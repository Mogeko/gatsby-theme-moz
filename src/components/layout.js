/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { styled } from "linaria/react"
import CssBaseline from "../styles/base"
import Header, { HeaderGap } from "./header"
import Footer from "./footer"
import {
  containerMdMax,
  lightWrapperBackgroundColor,
  lightBackgroundColor,
} from "../styles/variables"
import Nav, { NavMenuLeft, NavMenuRight } from "./nav"

export default function Layout({ children, className }) {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          copyrightYear
          author
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Wrap className={className}>
        <CssBaseline />
        <Nav siteTitle={data.site.siteMetadata.title}>
          <NavMenuLeft>
            <Link to="/about">About</Link>
          </NavMenuLeft>
          <NavMenuRight>
            <Link to="/categories">Categories</Link>
            <Link to="/tags">Tags</Link>
          </NavMenuRight>
        </Nav>
      </Wrap>
    </Container>
  )
}

export const Container = styled.div`
  background-color: ${lightBackgroundColor};
  position: relative;
  display: flex;
`

const Wrap = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  background-color: ${lightWrapperBackgroundColor};
  width: 100%;
  min-height: 100vh;
  grid-template-columns: minmax(350px,5fr) minmax(250px,2fr);
  grid-template-rows: 54px auto 1fr auto;
  grid-column-gap: 32px;
  grid-row-gap: 0;
  max-width: ${containerMdMax};
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
