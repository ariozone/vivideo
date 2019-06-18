import React from "react"
import Form from "./common/form"
import Joi from "joi-browser"
import { saveCustomer, getCustomer } from "../services/customerService"
import { toast } from "react-toastify"

export default class CustomerForm extends Form {
  state = {
    data: { name: "", contact: "", isPrime: false },
    errors: {}
  }

  createViewModel(customer) {
    return {
      _id: customer._id,
      name: customer.name,
      contact: customer.contact,
      isPrime: customer.isPrime
    }
  }

  schema = {
    name: Joi.string()
      .required()
      .min(3)
      .max(25),
    contact: Joi.string()
      .required()
      .min(5)
      .max(100),
    isPrime: Joi.boolean()
  }

  async componentDidMount() {
    const selectedCustomer = this.props.match.params.id
    const { data: customer } = await getCustomer(selectedCustomer)
    this.setState({ data: this.createViewModel(customer) })
  }

  async doSubmit() {
    await saveCustomer(this.state.data)
    this.props.history.replace("/customers")
    toast.success("Customer added")
  }

  render() {
    return (
      <div>
        <h1 className="my-5">Customer Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Customer Name", "text")}
          {this.renderInput("contact", "Contact", "text")}
          {this.state.data.isPrime && (
            <div className="mx-auto">This Customer is a Prime Member</div>
          )}
          {this.renderButton("Save")}
        </form>
      </div>
    )
  }
}
