import React from "react"
import Form from "./common/form"

export default class CustomerForm extends Form {
  state = {
    data: { name: "", contact: "", isPrim: false },
    error: {}
  }

  render() {
    return (
      <div>
        <h1 className="my-5">Customer Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Customer Name", "text")}
          {this.renderInput("contact", "Contact", "text")}
          {this.renderSelect(
            "isPrime",
            "Prime Member",
            this.state.data.isPrime
          )}
          {this.renderButton("Save")}
        </form>
      </div>
    )
  }
}
