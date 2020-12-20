import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTags,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { css } from "linaria"

export const Footer = ({ author, tags, prev, next }) => {
  return (
    <footer>
      <Copyright author={author} />
      <PostTags tags={tags} />
      <Navigation prev={prev} next={next} />
    </footer>
  )
}

const Copyright = ({ author }) => {
  const localUrl = window.location.href
  const styles = css`
    margin-top: 5rem;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    p {
      margin: 5px 0;
      &.license {
        font-weight: 700;
      }
    }
  `

  return (
    <div className={styles}>
      <p>
        Author: <Link to="/about">{author}</Link>
      </p>
      <p>
        Link: <Link to={localUrl}>{localUrl}</Link>
      </p>
      <p className="license">
        <Link to={localUrl}>本文</Link>
        采用
        <Link
          to="http://creativecommons.org/licenses/by-nc/4.0/"
          rel="license"
          target="_blank"
        >
          知识共享署名 - 非商业性使用 4.0 国际许可协议
        </Link>
        进行许可
      </p>
    </div>
  )
}

const PostTags = ({ tags }) => {
  const style = css`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    section:first-child {
      span:not(:last-child)::after {
        content: " / ";
      }
    }
  `
  return (
    <div className={style}>
      <section>
        {Array.isArray(tags) && tags.length > 0 ? (
          <>
            <FontAwesomeIcon icon={faTags} size="xs" />
            {"Tag(s): "}
            {tags.map(tag => (
              <span>
                <Link to={`/tags/${tag}`}>{`#${tag}`}</Link>
              </span>
            ))}
          </>
        ) : null}
      </section>
      <section>
        <Link href="javascript: window.history.back();">back</Link>
        {" · "}
        <Link to="/">home</Link>
      </section>
    </div>
  )
}

const Navigation = ({ prev, next }) => {
  const style = css`
    width: 100%;
    a {
      font-weight: 600;
      font-size: 1rem;
      transition-property: transform;
      transition-timing-function: ease-out;
      transition-duration: 0.3s;
      &:first-child {
        float: left;
        &:hover {
          transform: translateX(-4px);
        }
      }
      &:last-child {
        float: right;
        &:hover {
          transform: translateX(4px);
        }
      }
    }
  `
  return (
    <div className={style}>
      {prev ? (
        <Link to={prev.slug}>
          <FontAwesomeIcon icon={faChevronLeft} /> {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={next.slug}>
          {next.title} <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      ) : (
        <span />
      )}
    </div>
  )
}

Footer.propTypes = {
  ...Copyright.propTypes,
  ...PostTags.propTypes,
  ...Navigation.propTypes,
}

Footer.defaultProps = {
  ...Copyright.defaultProps,
  ...PostTags.defaultProps,
  ...Navigation.defaultProps,
}

Copyright.propTypes = {
  author: PropTypes.string.isRequired,
}

Copyright.defaultProps = {
  author: ``,
}

PostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string) || null,
}

PostTags.defaultProps = {
  tags: null,
}

Navigation.propTypes = {
  prev:
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }) || null,
  next:
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }) || null,
}

Navigation.defaultProps = {
  prev: null,
  next: null,
}
