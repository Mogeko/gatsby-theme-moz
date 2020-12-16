import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout, { Container } from "../components/layout"
import Article, { TopProgress } from "../components/article"
import SEO from "../components/seo"

// Common components
const shortcodes = { Link }

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Container>
        <TopProgress />
        <SEO title={mdx.frontmatter.title} />
        <Article title={mdx.frontmatter.title}>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Article>
      </Container>
    </Layout>
  )
}

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
