import React, { Component } from "react"
import { Link } from "react-router-dom"
import http from "../services/httpServices"

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

  async componentDidMount() {
    const { data: customers } = await http.get("/customers")
    this.setState({ customers })
  }

  render() {
    const numberOfCustomers = this.state.customers.length
    console.log(this.state.customers)
    return (
      <React.Fragment>
        {numberOfCustomers ? (
          <h3 className="my-5">
            There are {numberOfCustomers} customers in the data base.
          </h3>
        ) : (
          <h3>No customers in data base.</h3>
        )}
      </React.Fragment>
    )
  }
}
