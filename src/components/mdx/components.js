import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import { styled } from "linaria/react"
import {
  screenSmMin,
  lightPostLinkColor,
  lightPostLinkHoverColor,
  lightCodeNotclassBackgroundColor,
  lightGlobalLinkColor,
} from "../../styles/variables"
import { css, cx } from "linaria"
import { Link } from "gatsby"

export const Content = styled.div`
  margin-top: 2rem;
  p {
    font-size: 1rem;
    line-height: 1.7;
    margin: 0 0 1.75rem;
    padding: 0;
  }
  ol,
  ul {
    margin: 0 0 0.5rem 2rem;
    padding: 0;
    ol,
    ul {
      margin-left: 1rem;
    }
  }
  blockquote {
    font: italic 14px/22px normal helvetica, serif, STSong;
    margin: 10px 0 10px 2%;
    padding: 10px 10px 10px 15px;
    border-left: 3px solid #ccc;
    background-color: #f1f1f1;
    i,
    em {
      text-decoration: underline;
    }
  }
  del {
    text-decoration: line-through red;
    text-decoration-thickness: 0.125rem;
  }
  a {
    color: ${lightPostLinkColor};
    &:hover {
      color: ${lightPostLinkHoverColor};
    }
  }
  code,
  deckgo-highlight-code {
    --font-family: "Fira Code", Consolas, Monaco, Menlo, Consolas, monospace;
    --deckgo-highlight-code-font-family: var(--font-family);
    font-family: var(--font-family);
  }
`

const useAnchor = (WrappedComponent, { children }) => {
  const [active, setActive] = useState("hide")
  const handleMouseOver = () => setActive(null)
  const handleMouseOut = () => setActive("hide")
  const anchorLink = children
    .replace(/(\s+)|([.,!?:;'\"\'-])/g, "-")
    .toLowerCase()
  const Component = css`
    .anchor {
      position: relative;
      .hide {
        display: none;
      }
      .anchor-link {
        position: absolute;
        top: 50%;
        left: 0.75rem;
        right: -2rem;
        color: ${lightGlobalLinkColor};
        transform: translateY(-50%);
      }
    }
  `
  return (
    <WrappedComponent
      id={anchorLink}
      className={Component}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      <span className="anchor">
        <Link className={cx("anchor-link", active)} to={`#${anchorLink}`}>
          <FontAwesomeIcon icon={faLink} size="xs" flip="horizontal" />
        </Link>
      </span>
    </WrappedComponent>
  )
}

const H1Anchor = props =>
  useAnchor(
    styled.h1`
      font-size: 2.5rem;
      line-height: 1.25;
      margin: 3.5rem 0 1.75rem;
    `,
    props
  )

const H2Anchor = props =>
  useAnchor(
    styled.h2`
      font-size: 1.8rem;
      line-height: 1.25;
      margin: 2.8rem 0 1.25rem;
      &::before {
        content: "#";
        margin-right: 5px;
        color: ${lightPostLinkColor};
      }
    `,
    props
  )

const H3Anchor = props =>
  useAnchor(
    styled.h3`
      font-size: 2.2rem;
      line-height: 1.25;
      margin: 3.2rem 0 1.5rem;

      &::before {
        content: "|";
        margin-right: 5px;
        color: ${lightPostLinkColor};
      }
    `,
    props
  )

const H4Anchor = props =>
  useAnchor(
    styled.h4`
      font-size: 1.5rem;
      line-height: 1.25;
      margin: 2.4rem 0 1rem;
    `,
    props
  )

const H5 = styled.h5`
  font-size: 1.2rem;
  line-height: 1.25;
  margin: 2rem 0 0.8rem;
`

const H6 = styled.h6`
  font-size: 1rem;
  line-height: 1.25;
  margin: 1.5rem 0 0.5rem;
`

const Table = props => {
  const Table = css`
    width: 90%;
    margin: 10px auto;
    overflow-x: auto;
    box-shadow: 2px 2px 3px #00000020;
    table {
      border-spacing: 0;
      width: 100%;
      th,
      td {
        padding: 5px 15px;
        border: 1px double #dfe2e5;
      }
      tr:nth-child(even),
      thead {
        background-color: #f8f8f8;
      }
      td {
        word-break: break-word;
        text-align: center;
      }
    }
    @media (max-width: ${screenSmMin}) {
      width: 100%;
      table {
        min-width: 360px;
      }
    }
  `
  return (
    <div className={Table}>
      <table {...props} />
    </div>
  )
}

const InlineCode = styled.code`
  padding: 1px 6px;
  margin: 0 2px;
  background: ${lightCodeNotclassBackgroundColor};
  border-radius: 5px;
  font-size: 0.9rem;
`

const Image = props => {
  const style = css`
    display: block;
    min-width: calc(100% * 2 / 3);
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
  `
  return <img className={style} decoding="async" loading="lazy" {...props} />
}

const components = {
  h1: H1Anchor,
  h2: H2Anchor,
  h3: H3Anchor,
  h4: H4Anchor,
  h5: H5,
  h6: H6,
  table: Table,
  inlineCode: InlineCode,
  img: Image,
}

export default components
