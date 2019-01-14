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
              <td>
                {column.path ? _.get(item, column.path) : column.content(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
