/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import _ from "lodash"
import PropTypes from "prop-types"

export default function Pagination(props) {
  const { items, pageSize, onPageChanges, currentPage } = props
  const numberOfPages = items / pageSize
  const pages = _.range(1, numberOfPages + 1)
  if (numberOfPages <= 1) return null

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item "}
          >
            <a
              onClick={() => onPageChanges(page)}
              className="page-link bg-secondary text-white"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  items: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChanges: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}
