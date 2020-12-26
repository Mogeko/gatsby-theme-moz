import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faFolder } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import PropTypes from "prop-types"
import { css } from "linaria"
import { Link } from "gatsby"
import {
  lightPostLinkColor,
  lightPostLinkHoverColor,
} from "../../styles/variables"

export default function Header({ postTitle, author, categories, date, wordCount }) {
  const style = css`
    h1 {
      line-height: 2.2rem;
      margin: 6rem auto 0;
      font-size: 2em;
    }
  `
  return (
    <header className={style}>
      <h1>{postTitle}</h1>
      <PostMeta
        author={author}
        categories={categories}
        date={date}
        wordCount={wordCount}
      />
    </header>
  )
}

export const PostMeta = ({ author, categories, date, wordCount }) => {
  const style = css`
    color: #757575;
    margin: 0 auto;
    font-size: 1rem;
    a {
      color: ${lightPostLinkColor};
      &:hover {
        color: ${lightPostLinkHoverColor};
      }
    }
    .fa-folder {
      vertical-align: -0.25em;
      margin: 0 2px 0 0;
    }
  `
  return (
    <p className={style}>
      Written
      {author ? (
        <>
          {" "}
          by <Link to="/about">{author}</Link>{" "}
          with <FontAwesomeIcon icon={faHeart} color="red" size="sm" />
        </>
      ) : null}
      {date ? <> on <strong>{date}</strong></> : null}
      {categories ? (
        <>
          {" "}
          in{" "}
          <Link to={`/categories/${categories}`}>
            <FontAwesomeIcon icon={faFolder} />
            {categories}
          </Link>
        </>
      ) : null}
      { wordCount ? (<>, {wordCount} words</>) : null}
      {"."}
    </p>
  )
}

Header.propTypes = {
  ...PostMeta.propTypes,
  postTitle: PropTypes.string,
}

Header.defaultProps = {
  ...PostMeta.defaultProps,
  postTitle: ``,
}

PostMeta.propTypes = {
  author: PropTypes.string.isRequired,
  categories: PropTypes.string || null,
  date: PropTypes.string || null,
  wordCount: PropTypes.number.isRequired,
}

PostMeta.defaultProps = {
  author: ``,
  categories: null,
  date: null,
  wordCount: 0,
}
