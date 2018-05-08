const SELECT_EMPLOYEE_QUERY = `SELECT * FROM ed_employee`;
const INSERT_EMPLOYEE_QUERY = `INSERT INTO ed_employee (employee_name, employee_email, employee_department, employee_title, employee_location) VALUES (?,?,?,?,?)`;
const UPDATE_EMPLOYEE_QUERY = `UPDATE ed_employee SET employee_name = ?, employee_email = ?, employee_department = ?, employee_title = ?, employee_location = ? WHERE employee_id = ?`;
const DELETE_EMPLOYEE_QUERY = `DELETE FROM ed_employee WHERE employee_id = ?`;
const SELECT_EMPLOYEE_FROM_ID_QUERY = `SELECT * FROM ed_employee WHERE employee_id = ?`;
const SELECT_EMPLOYEE_FROM_EMAIL_QUERY = `SELECT * FROM ed_employee WHERE employee_email = ?`;
const SELECT_EMPLOYEES_MATCHING_SEARCH_QUERY = `SELECT * FROM ed_employee WHERE lower(employee_email) like lower(CONCAT('%',?,'%')) or lower(employee_name) like lower(CONCAT('%',?,'%')) or lower(employee_title) like lower(CONCAT('%',?,'%')) or lower(employee_department) like lower(CONCAT('%',?,'%')) or lower(employee_location) like lower(CONCAT('%',?,'%'))`;
export {
  SELECT_EMPLOYEE_QUERY,
  INSERT_EMPLOYEE_QUERY,
  UPDATE_EMPLOYEE_QUERY,
  DELETE_EMPLOYEE_QUERY,
  SELECT_EMPLOYEE_FROM_ID_QUERY,
  SELECT_EMPLOYEE_FROM_EMAIL_QUERY,
  SELECT_EMPLOYEES_MATCHING_SEARCH_QUERY,
};
