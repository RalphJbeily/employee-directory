import React from 'react';
import { post, put } from '../requests';
import { Link } from 'react-router';

export class EditEmployee extends React.Component {
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

    this.editEmployee = this.editEmployee.bind(this);
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
          <b>Edit Employee</b>
        </h4>
        <br />
        {this.state.employees.map((employee, arr) => {
          return (
            <div
              key={arr}
              data-id={employee.employee_id}
              className="form-horizontal"
            >
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
                      onClick={this.editEmployee.bind(
                        this,
                        employee.employee_id,
                      )}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getEmployeeInfo({ id: parseInt(this.props.params.obj, 10) });
  }

  getEmployeeInfo(data) {
    // that.setState({loading:true});
    // console.log(data);
    post('employee-get', data)
      .then(data => {
        this.setState({ employees: data /*,loading:false*/ });
        this.setState({
          fullName: data[0].employee_name,
          email: data[0].employee_email,
          department: data[0].employee_department,
          title: data[0].employee_title,
          location: data[0].employee_location,
        });
      })
      .catch(err => {
        console.log('Error in getEmployeeInfo', err);
      });
  }

  editEmployee(data, event) {
    // console.log(data);
    let employeeInfo = {
      fullName: this.state.fullName,
      email: this.state.email,
      department: this.state.department,
      title: this.state.title,
      location: this.state.location,
      id: data,
    };
    // console.log(employeeInfo);

    put('employees', employeeInfo)
      .then(data => {
        var employees = this.state.employees;
        employees.push(data);
        this.setState({ employees });
      })
      .catch(err => {
        console.log('Error in editEmployee', err);
      });
  }
}
