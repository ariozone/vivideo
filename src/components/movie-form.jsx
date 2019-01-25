import React from "react";
import Form from "./common/form";

export default class MovieForm extends Form {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave() {
    this.props.history.push("/");
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1 className="m-2">The Movie Id is: {match.params.id}</h1>
        <button className="btn btn-secondary m-2" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}
