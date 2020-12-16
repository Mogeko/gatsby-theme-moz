import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { styled } from "linaria/react"

import Layout, { Container, TopProgress } from "../components/layout"

import SEO from "../components/seo"
import Article from "../components/article"

// Common components
const shortcodes = { Link }

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Container>
        <TopProgress />
        <SEO title={mdx.frontmatter.title} />
        <Article>
          <PostHeader>
            <h1>{mdx.frontmatter.title}</h1>
          </PostHeader>
          <PostContent>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
            <center id="end">·End·</center>
          </PostContent>
        </Article>
      </Container>
    </Layout>
  )
}

const PostHeader = styled.header``
const PostContent = styled.div`
  #end {
    margin: 2rem 0;
  }
`

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

PageTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.any.isRequired,
    site: PropTypes.any.isRequired,
  }),
}
