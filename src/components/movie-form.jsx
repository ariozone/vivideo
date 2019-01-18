import React, { Component } from "react";
export default class MovieForm extends Component {
  render() {
    const { match } = this.props;
    return <h1>{match.params.id}</h1>;
  }
}
