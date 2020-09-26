# QA assignment

The assignment involved Creating, Editing and Deleting employees from the list given in the [AssignmentHomePage](http://cafetownsend-angular-rails.herokuapp.com/login).

The project uses [codeceptjs](https://codecept.io/) as Javascript framework.

## Requirements
* Node.js
* Npm (or yarn)
* Puppeteer

## Project setup
To get all the required js libraries in, run
```
npm install codeceptjs puppeteer --save-dev
```

To run all your tests with a pretty print use the: 
```
npx codeceptjs run --debug
```
To run a specific test edit the codecept.conf.js file and its export.config tests for running a specific test file
```
exports.config = {
	tests: './tests/*/*.js'
}
```

### Printing an Allure report
To install allure use the command 
```
npm install -g allure-commandline --save-dev
```
Generating a report simply use the command:
```
allure serve output
```
