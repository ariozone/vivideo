import React from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";

export default function Table(props) {
  return (
    <div>
      <TableHeader
        columns={this.props.columns}
        sortColumn={props.sortColumn}
        onSort={props.onSort}
      />

      <TableBody items={props.items} columns={this.columns} />
    </div>
  );
}
