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

export default function PageTemplate({ data: { mdx, site } }) {
  return (
    <Layout>
      <Container>
        <TopProgress />
        <SEO title={mdx.frontmatter.title} />
        <Article
          author={site.siteMetadata.author}
          title={mdx.frontmatter.title}
          date={mdx.frontmatter.date}
          categories={mdx.frontmatter.categories}
        >
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
        categories
        date(formatString: "MMMM DD, YYYY")
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
