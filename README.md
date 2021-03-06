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

To run all your tests use the: 
```
npx codeceptjs run
```
To run a specific test edit the codecept.conf.js file and its export.config tests for running a specific test file
```
exports.config = {
	tests: './tests/*/*.js'
}
```

## Printing an Allure report
To install allure use the command 
```
npm install -g allure-commandline --save-dev
```
Generating a report simply use the command:
```
allure serve output
```
    
## Page classes
Page classe contains data for different selectors example
```javascript
module.exports = {
    fields: {
        firstName: '[ng-model="selectedEmployee.firstName"]',
        lastName: '[ng-model="selectedEmployee.lastName"]'
}
```
Also it holds the methods which can be re-used
```javascript
createEmploye(firstName, lastName, startDate, email) {
        this.commonEmploye(firstName, lastName, startDate, email);
        I.dontSee(this.fields.add);
        this.assertThatEmployeExistByName(firstName, lastName);
    },
etc...
```
### Test classes
Test classes contain **Before** to set the conditions before a test is run and the scenarios execute afterwards
```javascript
Before((loginPage) => {
    loginPage.login();
    employePage.deleteEmployeByName(employeData.firstName, employeData.lastName);
});
Scenario('Create a single employe ', () => {
    employePage.createEmploye(employeData.firstName, employeData.lastName, employeData.startDate, employeData.email);
});
etc...
```

