import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import { css } from "linaria"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <Copyright author={data.site.siteMetadata?.author}></Copyright>
    </footer>
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

Copyright.propTypes = {
  author: PropTypes.string.isRequired,
}
