import React from "react"
import { styled } from "linaria/react"
import {
  lightPostLinkColor,
  lightPostLinkHoverColor,
  screenSmMin,
} from "../../styles/variables"
import { css } from "linaria"

export const Content = styled.div`
  margin-top: 2rem;
  p {
    font-size: 1em;
    margin: 0.5em 0;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0.8em auto 0.3em;
  }
  h2::before {
    content: "#";
    margin-right: 5px;
    color: ${lightPostLinkColor};
  }
  h3::before {
    content: "|";
    margin-right: 5px;
    color: ${lightPostLinkColor};
  }
  ol,
  ul {
    padding-left: 1em;
  }
  & > ol,
  & > ul {
    padding-left: 2em;
  }
`

const Blockquote = styled.blockquote``

const Table = props => {
  const style = css`
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
    <div className={style}>
      <table {...props} />
    </div>
  )
}

const Emphasis = styled.em``

const Strong = styled.strong``

const Delete = styled.del``

const InlineCode = styled.code``

const Link = styled.a`
  color: ${lightPostLinkColor};
  &:hover {
    color: ${lightPostLinkHoverColor};
  }
`

const Image = styled.img``

const components = {
  blockquote: Blockquote,
  table: Table,
  em: Emphasis,
  strong: Strong,
  delete: Delete,
  inlineCode: InlineCode,
  a: Link,
  img: Image,
}

export default components
