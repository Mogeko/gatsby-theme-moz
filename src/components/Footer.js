import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { styled } from "linaria/react"
import PropTypes from "prop-types"
import React from "react"

export default function Footer({ copyrightYear }) {
  const nowYear = new Date().getFullYear()
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
    <FooterBar>
      <Copyright>
        <span>&copy;</span>
        <span>
          {copyrightYear === nowYear
            ? `${copyrightYear}`
            : `${copyrightYear} - ${nowYear}`}
        </span>
        <span>
          <FontAwesomeIcon icon={faHeart} size="sm" />
        </span>
        <span>
          <a href="/about">{data.site.siteMetadata?.author}</a>
        </span>
        <span>|</span>
        <span>
          Powered by <a href="https://www.gatsbyjs.com">Gatsby</a>
        </span>
      </Copyright>
    </FooterBar>
  )
}

const FooterBar = styled.footer`
  width: 100%;
  text-align: center;
  line-height: 4rem;
  margin-top: 2em;
`

const Copyright = styled.div`
  font-size: 0.95em;
  span {
    margin: 0 0.123em;
  }
`

Footer.propTypes = {
  copyrightYear: PropTypes.number,
}

Footer.defaultProps = {
  copyrightYear: 2020,
}
