import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { styled } from "linaria/react"
import PropTypes from "prop-types"
import React from "react"

export default function Footer({ copyrightYear, author }) {
  const nowYear = new Date().getFullYear()

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
          <a href="/about">{author}</a>
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
  author: PropTypes.string.isRequired,
  copyrightYear: PropTypes.number,
}

Footer.defaultProps = {
  copyrightYear: 2020,
}
