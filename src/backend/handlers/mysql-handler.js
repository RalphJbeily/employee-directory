var mysql = require('mysql');

import {
  SELECT_EMPLOYEE_QUERY,
  INSERT_EMPLOYEE_QUERY,
  UPDATE_EMPLOYEE_QUERY,
  DELETE_EMPLOYEE_QUERY,
  SELECT_EMPLOYEE_FROM_ID_QUERY,
  SELECT_EMPLOYEE_FROM_EMAIL_QUERY,
  SELECT_EMPLOYEES_MATCHING_SEARCH_QUERY,
} from './mysql-queries';

// Create connection
const connection = mysql.createConnection({
  // properties...
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'employee-directory',
});

function connectToSQL(callback) {
  // Connect
  connection.connect(error => {
    console.log('Connected');
    callback(error);
  });
}

function listEmployees(callback) {
  connection.query(SELECT_EMPLOYEE_QUERY, [], (err, data) => {
    callback(err, data);
  });
}

function getEmployeeInfo(data, callback) {
  connection.query(SELECT_EMPLOYEE_FROM_ID_QUERY, data.id, (err, data) => {
    callback(err, data);
  });
}

function getEmployeeByEmail(data, callback) {
  var array = [data.email];
  connection.query(SELECT_EMPLOYEE_FROM_EMAIL_QUERY, array, (err, data) => {
    callback(err, data[0]);
  });
}

function insertEmployee(data, callback) {
  var array = [
    data.fullName,
    data.email,
    data.department,
    data.title,
    data.location,
  ];
  connection.query(INSERT_EMPLOYEE_QUERY, array, (err, data) => {
    callback(err, data);
  });
}

function updateEmployee(data, callback) {
  var array = [
    data.fullName,
    data.email,
    data.department,
    data.title,
    data.location,
    data.id,
  ];
  connection.query(UPDATE_EMPLOYEE_QUERY, array, (err, data) => {
    callback(err, data);
  });
}

function deleteEmployee(data, callback) {
  connection.query(DELETE_EMPLOYEE_QUERY, data.id, (err, data) => {
    callback(err, data);
  });
}

function listEmployeesWithSearch(query, callback) {
  connection.query(
    SELECT_EMPLOYEES_MATCHING_SEARCH_QUERY,
    [query, query, query, query, query],
    (err, data) => {
      callback(err, data);
    },
  );
}

export {
  connectToSQL,
  listEmployees,
  getEmployeeInfo,
  getEmployeeByEmail,
  insertEmployee,
  updateEmployee,
  deleteEmployee,
  listEmployeesWithSearch,
};
