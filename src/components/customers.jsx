import React, { Component } from "react"
import { Link } from "react-router-dom"
import Table from "./common/table"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward } from "@fortawesome/free-solid-svg-icons"
import { getCurrentUser } from "../services/authenticationService"
import { getCustomers, deleteCustomer } from "../services/customerService"

export default class Customers extends Component {
  state = { customers: [], sortColumn: { path: "name", order: "asc" } }
  user = getCurrentUser()
  deleteButton =
    this.user && this.user.isAdmin
      ? {
          key: "delete",
          content: customer => (
            <button
              className="btn btn-sm btn-danger"
              onClick={() => this.handleDelete(customer)}
            >
              Delete
            </button>
          )
        }
      : { key: "delete" }

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
    },
    this.deleteButton
  ]

  async componentDidMount() {
    const { data: customers } = await getCustomers()
    this.setState({ customers })
  }

  async handleDelete(customer) {
    const customersBeforeDelete = [...this.state.customers]
    const customers = customersBeforeDelete.filter(c => c !== customer)
    this.setState({ customers })
    await deleteCustomer(customer._id)
  }

  render() {
    const { customers, sortColumn } = this.state
    return (
      <React.Fragment>
        {customers.length ? (
          <h3 className="my-5">
            There are {customers.length} customers in the data base.
          </h3>
        ) : (
          <h3 className="my-5">No customers in data base.</h3>
        )}
        <Table
          items={customers}
          columns={this.columns}
          sortColumn={sortColumn}
        />{" "}
        {getCurrentUser() && (
          <Link
            className="btn btn-outline-secondary btn-block"
            to="customers/new"
          >
            Add New
          </Link>
        )}
      </React.Fragment>
    )
  }
}
