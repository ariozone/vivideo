import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  createKey(item, column) {
    return item._id + (column.path || column.key);
  }
  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {column.path ? _.get(item, column.path) : column.content(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
