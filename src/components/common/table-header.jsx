import React, { Component } from "react";

export default class TableHeader extends Component {
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

  render() {
    return <h1>This is tabla header</h1>;
  }
}
