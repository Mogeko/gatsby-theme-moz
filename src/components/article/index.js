import React from "react"
import PropTypes from "prop-types"
import { css } from "linaria"
import { containerXsMax } from "../../styles/variables"
import { Footer } from "./footer"

export default function Article({ children }) {
  const style = css`
    max-width: ${containerXsMax};
    margin: inherit;
  `
  return (
    <article className={style}>
      {children}
      <Footer />
    </article>
  )
}

Article.propTypes = {
  children: PropTypes.node.isRequired,
}
