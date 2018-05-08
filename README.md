# Employee Directory

Employee Directory is a small system that manages the company employees. The system has a simple user interface,
the home page display the employees registered in the company in an ordered table. As for functionalities,
the user can easily add, update or delete an employee from the system.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to install the software, the following prerequisites are required:

* IDE - Integrated Development Environment (WebStrom, Atom, Sublime, Visual Studio Code, ...)
* Web Browser - Google Chrome, Mozilla Firefox, Opera, Yandex, ...
* NodeJS - To download and install Node.js go to the following link https://nodejs.org/en/download/
* Babel - Install Babel dependencies by executing 'npm install' and the following babel-core, babel-loader, babel-preset-env, babel-preset-es2015, babel-preset-react, babel-preset-stage-2
  Note when installing dependencies, babel-cli must be installed globally 'npm install babel-cli --save--globally'.
* Node Package Manage - NPM is the default package manager for the JavaScript runtime environment Node.js
  Installed using a command line tool and executing 'npm install --save' in the project root direcctory.

### Installing

To install the software, follow the below steps:

* Open the project in the respective IDE.
* Create a database for the project on MySQL or import an existing one.
* Connect to MySQL by inputing the user, password and database in the msql-handler.js file (employee-directory/src/backend/handlers/msql-handler.js)
* Install node modules by executiing 'npm intall --save' on the command line inside the project root folder.
* Run the server by executing 'babel-node index.js' in the command line inside backend folder (employee-directory/src/backend)
* Start the application by executing 'npm start' in the command line.
* Open a web browser and enter 'http://localhost:8080'

The application should now be up and running successfully.

## Running the tests

The application is tested on several levels:

* Returning data successfully by displaying the employees and there corresponding info in the home page.
* When adding an employee the table must be updated in the home page.
* When updating a certain employee, the data changed must be updated in the home page.
* When deleting an employee, also the table in the home page must be updated and no longer display that record.
* When Searching for an employee, correct info must be displayed.

## Deployment

Deployment is not available at this moment.

## Built With

* [React](https://facebook.github.io/react/) - JavaScript library for building user interfaces.
* [NodeJS](https://nodejs.org/en/download/) - Platform for building fast and scalable network applications.
* [Express](https://expressjs.com/) - Web framework for Node.js
* [Webpack](https://webpack.js.org/) - Module bundler
* [Babel](https://babeljs.io/) - JavaScript compiler
* [MySQL](https://www.mysql.com/) - The open source database

## Versioning

The application current version is V1.0.0, for Versioning, [SemVer](http://semver.org/) is recommended.

## Authors

**Ralph E. El Jbeily** - _Initial work_

## License

This project is licensed under the ISC License.
