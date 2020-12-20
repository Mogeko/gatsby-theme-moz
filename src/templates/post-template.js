import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { defineCustomElements } from "@deckdeckgo/highlight-code/dist/loader"

import Layout, { Container } from "../components/layout"
import Article, { TopProgress } from "../components/article"
import SEO from "../components/seo"
import components from "../components/mdx/components"

const wordcount = require("wordcount")

// Common components
const shortcodes = { Link }

export default function PageTemplate({ data: { mdx, site }, pageContext }) {
  const { prev, next } = pageContext
  const prevPage = prev
    ? {
        title: prev.frontmatter.title,
        slug: `/${prev.frontmatter.date}/${prev.slug}`,
      }
    : null
  const nextPage = next
    ? {
        title: next.frontmatter.title,
        slug: `/${next.frontmatter.date}/${next.slug}`,
      }
    : null
  defineCustomElements()
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
          wordCount={wordcount(mdx.internal.content)}
          tags={mdx.frontmatter.tags}
          prevPage={prevPage}
          nextPage={nextPage}
        >
          <MDXProvider components={Object.assign(components, shortcodes)}>
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
        tags
      }
      internal {
        content
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
  pageContext: PropTypes.shape({
    prev: PropTypes.any.isRequired,
    next: PropTypes.any.isRequired,
  }),
}
