import React from "react"
import PropTypes from "prop-types"
import { styled } from "linaria/react"
import { css } from "linaria"
import { containerXsMax } from "../../styles/variables"
import { Footer } from "./footer"
import Header from "./header"

export { default as TopProgress } from "./top-progress"

export default function Article({ children, title }) {
  const style = css`
    max-width: ${containerXsMax};
    margin: inherit;
  `
  return (
    <article className={style}>
      <Header postTitle={title} />
      <Content>{children}</Content>
      <Footer />
    </article>
  )
}

const Content = styled.div``

Article.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Article.defaultProps = {
  title: ``,
}
