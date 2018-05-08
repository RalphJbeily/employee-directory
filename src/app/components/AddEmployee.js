import React from 'react';
import { post } from '../requests';
import { Link } from 'react-router';

export class AddEmployee extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      loading: false,
      fullName: '',
      email: '',
      department: '',
      title: '',
      location: '',
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <h4>
          <b>Add Employee</b>
        </h4>
        <br />
        <div className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2">Name:</label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="fullName"
                placeholder="Enter name"
                value={this.state.fullName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Email:</label>
            <div className="col-sm-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Department:</label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                placeholder="Enter department"
                value={this.state.department}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Title:</label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Location:</label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                placeholder="Enter location"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <Link to={'/Home'}>
                <button
                  onClick={this.addEmployee}
                  type="submit"
                  className="btn btn-primary"
                >
                  Add
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  addEmployee() {
    let newEmployee = {
      fullName: this.state.fullName,
      email: this.state.email,
      department: this.state.department,
      title: this.state.title,
      location: this.state.location,
    };

    post('employees', newEmployee)
      .then(data => {
        var employees = this.state.employees;
        employees.push(data);
        this.setState({ employees });
      })
      .catch(err => {
        console.log('Error in addEmployee', err);
      });
  }
}
