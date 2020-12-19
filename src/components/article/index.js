import React from "react"
import PropTypes from "prop-types"
import { css } from "linaria"
import { containerXsMax } from "../../styles/variables"
import { Content } from "../mdx/components"
import { Footer } from "./footer"
import Header from "./header"

export { default as TopProgress } from "./top-progress"

export default function Article({
  children,
  title,
  author,
  date,
  categories,
  wordCount,
  tags,
}) {
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
        wordCount={wordCount}
      />
      <Content>{children}</Content>
      <Footer  author={author} tags={tags} />
    </article>
  )
}

Article.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string || null,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string || null,
  date: PropTypes.string || null,
  wordCount: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string) || null,
}

Article.defaultProps = {
  title: ``,
  author: ``,
  categories: null,
  date: null,
  wordCount: 0,
  tags: null,
}
