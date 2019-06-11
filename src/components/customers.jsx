import React, { Component } from "react"
import { Link } from "react-router-dom"
import http from "../services/httpServices"
import Table from "./common/table"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward } from "@fortawesome/free-solid-svg-icons"

export default class Customers extends Component {
  state = { customers: [], sortColumn: { path: "name", order: "asc" } }
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
      path: "isPrime",
      label: "Prime Member",
      content: customer =>
        customer.isPrime && (
          <FontAwesomeIcon icon={faAward} size="2x" color="gray" />
        )
    }
  ]

  async componentDidMount() {
    const { data: customers } = await http.get("/customers")
    this.setState({ customers })
  }

  render() {
    const { customers, sortColumn } = this.state

    console.log(this.state.customers)
    return (
      <React.Fragment>
        {customers.length ? (
          <h3 className="my-5">
            There are {customers.length} customers in the data base.
          </h3>
        ) : (
          <h3>No customers in data base.</h3>
        )}
      </React.Fragment>
    )
  }
}
