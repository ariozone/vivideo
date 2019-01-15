import React, { Component } from "react";

export default class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.raiseSort = this.raiseSort.bind(this);
    this.renderSortIcon = this.renderSortIcon.bind(this);
  }
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }

  renderSortIcon(column) {
    if (
      column.path === this.props.sortColumn.path &&
      this.props.sortColumn.order === "asc"
    )
      return <i className="fa fa-sort-asc" />;
  }
  render() {
    return (
      <thead className="thead-dark">
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSortIcon(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
