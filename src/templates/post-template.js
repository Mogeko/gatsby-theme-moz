import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { styled } from "linaria/react"
import { css } from "linaria"

import Layout, { Container, TopProgress } from "../components/layout"
import { containerXsMax } from "../styles/variables"
import SEO from "../components/seo"

// Common components
const shortcodes = { Link }

export default function PageTemplate({ data: { mdx, site } }) {
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
          <PostFooter>
            <Copyright author={site.siteMetadata.author} />
          </PostFooter>
        </Article>
      </Container>
    </Layout>
  )
}

const Copyright = ({ author }) => {
  const localUrl = window.location.href
  const styles = css`
    margin-top: 5rem;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    p {
      margin: 5px 0;
      &.license {
        font-weight: 700;
      }
    }
  `

  return (
    <div className={styles}>
      <p>
        Author: <Link to="/about">{author}</Link>
      </p>
      <p>
        Link: <Link to={localUrl}>{localUrl}</Link>
      </p>
      <p className="license">
        <Link to={localUrl}>本文</Link>
        采用
        <Link
          to="http://creativecommons.org/licenses/by-nc/4.0/"
          rel="license"
          target="_blank"
        >
          知识共享署名 - 非商业性使用 4.0 国际许可协议
        </Link>
        进行许可
      </p>
    </div>
  )
}

const Article = styled.article`
  max-width: ${containerXsMax};
  margin: inherit;
`
const PostHeader = styled.header``
const PostContent = styled.div`
  #end {
    margin: 2rem 0;
  }
`
const PostFooter = styled.footer``

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
