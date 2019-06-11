import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Customers extends Component {
  state = { customers: [] }
  columns = [
    {
      path: "name",
      label: "Name",
      content: customer => (
        <Link className="text-dark" to={`/customers/${customer._id}`}>
          {customer.name}
        </Link>
      )
    },
    { path: "contact", label: "Contact" },
    {
      key: "prime",
      content: customer => (
        <i
          isPrime={customer.isPrime}
          onClick={() => this.props.handlePrime(customer)}
        />
      )
    }
  ]
  render() {
    return <h1 className="my-5">Customers</h1>
  }
}
