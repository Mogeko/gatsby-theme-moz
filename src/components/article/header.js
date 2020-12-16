import React from "react"
import PropTypes from "prop-types"
import { css } from "linaria"

export default function Header({ postTitle }) {
  const style = css``
  return (
    <header className={style}>
      <h1>{postTitle}</h1>
    </header>
  )
}

Header.propTypes = {
  postTitle: PropTypes.string,
}

Header.defaultProps = {
  postTitle: ``,
}
