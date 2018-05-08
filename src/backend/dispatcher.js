import {
  listEmployees,
  getEmployeeInfo,
  getEmployeeByEmail,
  insertEmployee,
  updateEmployee,
  deleteEmployee,
  listEmployeesWithSearch,
} from './handlers/mysql-handler';

const dispatcher = {};

dispatcher.listEmployees = callback => {
  listEmployees(callback);
};

dispatcher.getEmployeeInfo = (data, callback) => {
  getEmployeeInfo(data, callback);
};

dispatcher.getEmployeeByEmail = (data, callback) => {
  getEmployeeByEmail(data, callback);
};

dispatcher.insertEmployee = (data, callback) => {
  insertEmployee(data, callback);
};

dispatcher.updateEmployee = (data, callback) => {
  updateEmployee(data, callback);
};

dispatcher.deleteEmployee = (data, callback) => {
  deleteEmployee(data, callback);
};

dispatcher.listEmployeesWithSearch = (query, callback) => {
  listEmployeesWithSearch(query, callback);
};

export { dispatcher };
