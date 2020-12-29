import { Link } from "gatsby"
import { css } from "linaria"
import PropTypes from "prop-types"
import React from "react"
import { styled } from "linaria/react"
import {
  lightFooterBarBackgroundColor,
  lightFooterLinkColor,
  lightFooterBarLinkHoverColor,
} from "../styles/variables"

export default function Footer({ copyrightYear }) {
  const FooterBar = styled.footer`
    background-color: ${lightFooterBarBackgroundColor};
    grid-area: 4/1/5/3;
    padding: 0 0.5rem;
    position: relative;
  `
  const CopyrightBar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem 0;
    p {
      line-height: 1;
      padding: 0.125rem;
      margin: 0;
      font-size: 0.8rem;
    }
  `
  return (
    <FooterBar>
      <CopyrightBar>
        <Copyright copyrightYear={copyrightYear} />
        <PoweredBy />
      </CopyrightBar>
    </FooterBar>
  )
}

const Copyright = ({ copyrightYear }) => {
  const nowYear = new Date().getFullYear()
  const year =
    copyrightYear === nowYear
      ? `${copyrightYear}`
      : `${copyrightYear} - ${nowYear}`
  return <p>&copy; {year}, All Rights Reserved</p>
}

const PoweredBy = () => {
  const style = css`
    a {
      color: ${lightFooterLinkColor};
      &:hover {
        color: ${lightFooterBarLinkHoverColor};
        text-decoration: underline;
      }
    }
    .engine:hover {
      color: #663399;
    }
  `
  return (
    <p className={style}>
      Powered by{" "}
      <Link className="engine" to="https://www.gatsbyjs.com">
        Gatsby
      </Link>{" "}
      and the{" "}
      <Link to="https://github.com/Mogeko/gatsby-theme-moz">Moz theme</Link>
    </p>
  )
}

Copyright.propTypes = {
  copyrightYear: PropTypes.number,
}

Copyright.defaultProps = {
  copyrightYear: 2020,
}

Footer.propTypes = {
  ...Copyright.propTypes,
}

Footer.defaultProps = {
  ...Copyright.defaultProps,
}
