import { css } from "linaria"
import PropTypes from "prop-types"
import React from "react"
import {
  containerMdMax,
  lightBreadcrumbBackgroundColor,
  lightBreadcrumbColor,
  lightPostLinkColor,
  lightPostLinkHoverColor,
} from "../styles/variables"

export default function Breadcrumb({ children, yourPosition }) {
  const Breadcrumb = css`
    background-color: ${lightBreadcrumbBackgroundColor};
    color: ${lightBreadcrumbColor};
    max-width: ${containerMdMax};
    margin: 1rem 1rem 0;
    padding: 0.5rem;
    border-radius: 0.25rem;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ol {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      li {
        display: inline;
        font-size: 0.9rem;
        &:not(:first-child)::before {
          color: #728fcb;
          padding: 0.5rem;
          content: "/";
        }
        a {
          color: ${lightPostLinkColor};
          text-decoration: none;
          text-transform: capitalize;
          &:hover {
            color: ${lightPostLinkHoverColor};
            text-decoration: underline;
          }
        }
      }
    }
  `
  return (
    <nav className={Breadcrumb}>
      <ol>
        {children.map(node => (
          <li>{node}</li>
        ))}
        <li>{yourPosition}</li>
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  yourPosition: PropTypes.string.isRequired,
}
