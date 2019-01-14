import React, { Component } from "react";

export default class TableBody extends Component {
  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map(item => (
          <tr>
            {columns.map(column => (
              <td>{item[column.path]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
