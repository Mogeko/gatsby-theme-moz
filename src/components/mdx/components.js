import React from "react"
import { styled } from "linaria/react"
import {
  screenSmMin,
  lightPostLinkColor,
  lightPostLinkHoverColor,
  lightCodeNotclassBackgroundColor,
  lightGlobalLinkColor,
} from "../../styles/variables"
import { css } from "linaria"

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
    border-left: 0.32813rem solid #bdbdbd;
    margin: 0 1.75rem 1.75rem 1.5rem;
    padding: 0 0 0 1.42188rem;
    font-size: 1.05rem;
    line-height: 1.75;
    color: inherit;
    opacity: 0.8;
    p {
      margin-bottom: 0.5rem;
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

const withAnchor = {
  '.anchor': {
    marginLeft: '0.5rem',
    '.anchor-link': {
      color: lightGlobalLinkColor,
      MozTransform: 'scaleX(-1)',
      WebkitTransform: 'scaleX(-1)',
      transform: 'scaleX(-1)',
      verticalAlign: 'middle',
      visibility:' hidden',
    },
  },
  '&:hover .anchor .anchor-link': {
    visibility: 'visible',
  }
}
const H1Anchor = styled.h1`
  font-size: 2.5rem;
  margin: 3.5rem 0 1.75rem;
  ${withAnchor};
`

const H2Anchor = styled.h2`
  font-size: 2.2rem;
  margin: 3.2rem 0 1.5rem;
  &::before {
    content: "#";
    margin-right: 5px;
    color: ${lightPostLinkColor};
  }
  ${withAnchor};
`

const H3Anchor = styled.h3`
  font-size: 1.8rem;
  margin: 2.8rem 0 1.25rem;
  &::before {
    content: "|";
    margin-right: 5px;
    color: ${lightPostLinkColor};
  }
  ${withAnchor};
`

const H4Anchor = styled.h4`
  font-size: 1.5rem;
  margin: 2.4rem 0 1rem;
  ${withAnchor};
`

const H5 = styled.h5`
  font-size: 1.2rem;
  margin: 2rem 0 0.8rem;
`

const H6 = styled.h6`
  font-size: 1rem;
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
