/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { styled } from "linaria/react"
import CssBaseline from "../styles/base"
import Header, { HeaderGap } from "./header"
import Footer from "./footer"
import {
  screenSmMin,
  screenMdMin,
  screenLgMin,
  containerSmMax,
  containerMdMax,
  containerLgMax,
  containerXsMax,
} from "../styles/variables"

export { TopProgress } from "./header"

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
    <Wrap className={className}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}>
        <a href="/about">About</a>
        <HeaderGap />
        <a href="/categories">Categories</a>
        <a href="/tags">Tags</a>
      </Header>
      <Main>{children}</Main>
      <Footer
        copyrightYear={data.site.siteMetadata?.copyrightYear || 2020}
        author={data.site.siteMetadata?.author}
      />
    </Wrap>
  )
}

export const Container = styled.div`
  max-width: ${containerXsMax};
  @media (min-width: ${screenSmMin}) {
    max-width: ${containerSmMax};
  }
  @media (min-width: ${screenMdMin}) {
    max-width: ${containerMdMax};
  }
  @media (min-width: ${screenLgMin}) {
    max-width: ${containerLgMax};
  }
  padding: 0 20px;
  margin: auto;
  width: 100%;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1 0 auto;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
