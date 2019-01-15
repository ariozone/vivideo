import React from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";

export default function Table(props) {
  const { columns, sortColumn, onSort, items } = props;
  return (
    <table className="table m-2">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

      <TableBody items={items} columns={columns} />
    </table>
  );
}
