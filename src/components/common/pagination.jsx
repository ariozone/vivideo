import React from "react";
import _ from "lodash";

export default function Pagination(props) {
  const { items, pageSize, onPageChanges } = props;
  const numberOfPages = items / pageSize;
  const pages = _.range(1, numberOfPages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link">1</a>
        </li>
        <li className="page-item">
          <a className="page-link">2</a>
        </li>
        <li className="page-item">
          <a className="page-link">3</a>
        </li>
      </ul>
    </nav>
  );
}
