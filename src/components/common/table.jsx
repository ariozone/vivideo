import React from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";

export default function Table(props) {
  return (
    <div>
      <TableHeader
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />

      <TableBody items={movies} columns={this.columns} />
    </div>
  );
}
