import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faFolder } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import PropTypes from "prop-types"
import { css } from "linaria"
import { Link } from "gatsby"

export default function Header({ postTitle, author, categories, date }) {
  console.log(categories)
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
      />
    </header>
  )
}

const PostMeta = ({ author, categories, date }) => {
  const style = css`
    color: #757575;
    margin: 0 auto;
    font-size: 1rem;
    .fa-folder {
      vertical-align: -0.25em;
      margin: 0 2px 0 0;
    }
  `
  return (
    <p className={style}>
      Written by {<Link to="/about">{author}</Link>} with{" "}
      <FontAwesomeIcon icon={faHeart} color="red" size="sm" />
      {date ? ` on ${date}` : ``}
      {categories
        ? <> in <Link to={`/categories/${categories}`}>
        <FontAwesomeIcon icon={faFolder} />{categories}</Link></>
        : ``}
    </p>
  )
}

Header.propTypes = {
  postTitle: PropTypes.string,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string || null,
  date: PropTypes.string || null,
}

Header.defaultProps = {
  postTitle: ``,
  author: ``,
  categories: null,
  date: null,
}

PostMeta.propTypes = {
  author: PropTypes.string.isRequired,
  categories: PropTypes.string || null,
  date: PropTypes.string || null,
}

PostMeta.defaultProps = {
  author: ``,
  categories: null,
  date: null,
}
