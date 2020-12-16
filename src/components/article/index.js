import React from "react"
import PropTypes from "prop-types"
import { styled } from "linaria/react"
import { css } from "linaria"
import { containerXsMax } from "../../styles/variables"
import { Footer } from "./footer"
import Header from "./header"

export { default as TopProgress } from "./top-progress"

export default function Article({ children, title, author, date, categories }) {
  const style = css`
    max-width: ${containerXsMax};
    margin: inherit;
  `
  return (
    <article className={style}>
      <Header
        postTitle={title}
        author={author}
        categories={categories}
        date={date}
      />
      <Content>{children}</Content>
      <Footer />
    </article>
  )
}

const Content = styled.div`
  margin-top: 2rem;
`

Article.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string || null,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string || null,
  date: PropTypes.string || null,
}

Article.defaultProps = {
  title: ``,
  author: ``,
  categories: null,
  date: null,
}
