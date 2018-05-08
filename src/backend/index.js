import express from 'express'; // backend framework
import bodyParser from 'body-parser';
import { dispatcher } from './dispatcher';
import { connectToSQL } from './handlers/mysql-handler';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', 1);

const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_ERROR = 500;
const PORT = 3000;
const API_PREFIX_V1 = '/rest/api/v1';

// REST services

app.get(`${API_PREFIX_V1}/employees`, (req, resp) => {
  var searchText = req.query.query;
  // console.log(searchText);
  if (searchText === null || searchText === undefined || searchText === '') {
    dispatcher.listEmployees((error, data) => {
      if (error) {
        // console.log(error);
        resp.statusCode = HTTP_ERROR;
        resp.send({ displayMessage: 'Something went wrong', error: error });
        return;
      }
      resp.statusCode = HTTP_OK;
      resp.send(data);
    });
  } else {
    // console.log({searchText});
    dispatcher.listEmployeesWithSearch(searchText, (error, data) => {
      if (error) {
        // console.log(error);
        resp.statusCode = HTTP_ERROR;
        resp.send({ displayMessage: 'Something went wrong', error: error });
        return;
      }
      resp.statusCode = HTTP_OK;
      resp.send(data);
    });
  }
});

app.post(`${API_PREFIX_V1}/employee-get`, (req, resp) => {
  dispatcher.getEmployeeInfo(req.body, (error, data) => {
    if (error) {
      resp.statusCode = HTTP_ERROR;
      resp.send({ displayMessage: 'Something went wrong', error: error });
      return;
    }
    resp.statusCode = HTTP_OK;
    resp.send(data);
  });
});

app.post(`${API_PREFIX_V1}/employees`, (req, resp) => {
  dispatcher.insertEmployee(req.body, (error, ignored) => {
    if (error) {
      resp.statusCode = HTTP_ERROR;
      resp.send({ displayMessage: 'Something went wrong', error: error });
      return;
    }
    dispatcher.getEmployeeByEmail({ email: req.body.email }, (error, data) => {
      resp.statusCode = HTTP_CREATED;
      resp.send(data);
    });
  });
});

app.put(`${API_PREFIX_V1}/employees`, (req, resp) => {
  dispatcher.updateEmployee(req.body, (error, ignored) => {
    if (error) {
      resp.statusCode = HTTP_ERROR;
      resp.send({ displayMessage: 'Something went wrong', error: error });
      return;
    }
    dispatcher.getEmployeeByEmail({ email: req.body.email }, (error, data) => {
      resp.statusCode = HTTP_OK;
      resp.send(data);
    });
  });
});

app.post(`${API_PREFIX_V1}/employee-delete`, (req, resp) => {
  dispatcher.deleteEmployee(req.body, (error, ignored) => {
    if (error) {
      resp.statusCode = HTTP_ERROR;
      resp.send({ displayMessage: 'Something went wrong', error: error });
      return;
    }
    resp.statusCode = HTTP_OK;
    resp.send(ignored);
  });
});

connectToSQL(error => {
  if (error) {
    throw error;
  }
  app.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}`);
  });
});
