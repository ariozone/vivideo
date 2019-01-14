import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map(item => (
          <tr>
            {columns.map(column => (
              <td>{_.get(item, column.path)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
