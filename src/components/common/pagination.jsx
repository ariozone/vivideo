import React from "react";
import _ from "lodash";

export default function Pagination(props) {
  const { items, pageSize, onPageChanges } = props;
  const numberOfPages = items / pageSize;
  const pages = _.range(1, numberOfPages + 1);
  if (numberOfPages <= 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
