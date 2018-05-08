import React from 'react';
import { Link, browserHistory } from 'react-router';
import { get, post, getWithQuery } from '../requests';

var idx = null; // to store the id of the employee on click remove button

export class Home extends React.Component {
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
      searchText: '',
    };
    this.searchForEmployees = this.searchForEmployees.bind(this);
    this.sendEmployeeId = this.sendEmployeeId.bind(this);
    this.removeEmployee = this.removeEmployee.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onDeleteDialogOk = this.onDeleteDialogOk.bind(this);
    this.onHandleSearchChange = this.onHandleSearchChange.bind(this);
  }

  onHandleSearchChange(event) {
    this.setState({ searchText: event.target.value });
    this.searchForEmployees(event.target.value);
  }

  sendEmployeeId(data, event) {
    //console.log(data);
    browserHistory.push(`/EditEmployee/${data}`);
  }

  onDelete(id, event) {
    idx = id;
    //console.log(idx);
  }

  onDeleteDialogOk() {
    this.removeEmployee({ id: idx });
  }

  render() {
    return (
      <div>
        <div className="btn-group btn-group-justified">
          <div className="btn-group">
            <Link to={'/AddEmployee'}>
              <button type="button" className="btn btn-success">
                Add
              </button>
            </Link>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-default"
              onClick={this.listEmployees.bind(this)}
            >
              Refresh
            </button>
          </div>
        </div>
        <hr />
        <div>
          <div style={{ width: '100%' }}>
            <input
              type="text"
              className="form-control"
              id="searchText"
              name="searchText"
              placeholder="Search for anything"
              value={this.state.searchText}
              onChange={this.onHandleSearchChange}
            />
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Title</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee, arr) => {
                //console.log(employee);
                return (
                  <tr key={arr} data-id={employee.employee_id}>
                    <td>{employee.employee_name}</td>
                    <td>{employee.employee_email}</td>
                    <td>{employee.employee_department}</td>
                    <td>{employee.employee_title}</td>
                    <td>{employee.employee_location}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={this.sendEmployeeId.bind(
                          this,
                          employee.employee_id,
                        )}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        data-toggle="modal"
                        data-target="#myModal"
                        onClick={this.onDelete.bind(this, employee.employee_id)}
                      >
                        Remove
                      </button>
                      <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                              >
                                &times;
                              </button>
                              <h4 className="modal-title">
                                <b>Delete Employee</b>
                              </h4>
                            </div>
                            <div className="modal-body">
                              <p>
                                Are you sure you want to delete this employee?
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={this.onDeleteDialogOk}
                              >
                                Delete
                              </button>
                              <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.listEmployees();
  }

  listEmployees() {
    this.setState({ searchText: '' });
    get('employees')
      .then(data => {
        //console.log(data);
        this.setState({ employees: data });
      })
      .catch(err => {
        console.log('Error in listEmployees', err);
      });
  }

  searchForEmployees(text) {
    getWithQuery('employees', { query: text })
      .then(data => {
        this.setState({ employees: data });
      })
      .catch(err => {
        console.log('Error in search for employees', err);
      });
  }

  removeEmployee(data) {
    //console.log(data);
    post('employee-delete', data)
      .then(data => {
        /*var employees = this.state.employees;
                 employees.push(data);
                 this.setState({employees});*/
        this.listEmployees();
      })
      .catch(err => {
        console.log('Error in addEmployee', err);
      });
  }
}
