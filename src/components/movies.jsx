import React, { Component } from "react";

export default class Movies extends Component {
  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Movie Title</td>
            <td>Comedy</td>
            <td>10</td>
            <td>9.8</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
