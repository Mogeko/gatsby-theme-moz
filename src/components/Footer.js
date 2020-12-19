import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { css } from "linaria"
import PropTypes from "prop-types"
import React from "react"

export default function Footer({ copyrightYear, author }) {
  const style = css`
    width: 100%;
    text-align: center;
    line-height: 4rem;
    margin-top: 2em;
    div {
      font-size: 0.95em;
      span {
        margin: 0 0.123em;
      }
    }
  `
  return (
    <footer className={style}>
      <div>
        <Copyright copyrightYear={copyrightYear} author={author} />
        <span>|</span>
        <Engine />
      </div>
    </footer>
  )
}

const Copyright = ({ copyrightYear, author }) => {
  const nowYear = new Date().getFullYear()
  return (
    <>
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
        <Link href="/about">{author}</Link>
      </span>
    </>
  )
}

const Engine = () => {
  const style = css`
    a:hover {
      color: #663399;
    }
  `
  return (
    <span className={style}>
      Powered by <Link to="https://www.gatsbyjs.com">Gatsby</Link>
    </span>
  )
}

Copyright.propTypes = {
  author: PropTypes.string.isRequired,
  copyrightYear: PropTypes.number,
}

Copyright.defaultProps = {
  copyrightYear: 2020,
  author: ``,
}

Footer.propTypes = {
  ...Copyright.propTypes,
}

Footer.defaultProps = {
  ...Copyright.defaultProps,
}
