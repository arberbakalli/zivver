const {
    I,
    loginPage,
    employePage
} = inject();
const assert = require('assert');
Feature('Create Employe');
const employeData = {
    firstName: 'arber',
    lastName: 'bakalli',
    startDate: '2018-02-02',
    email: 'random@email.com'
};
Before((loginPage) => {
    loginPage.login();
    employePage.deleteEmployeByName(employeData.firstName, employeData.lastName);
});
Scenario('Create a single employe ', () => {
    employePage.createEmploye(employeData.firstName, employeData.lastName, employeData.startDate, employeData.email);
});
Scenario('Attempt to create a single employe with wrong date format ', () => {
    const negativeData = {
        startDate: 'xxxxxx'
    };
    employePage.attemptsToCreateEmploye(employeData.firstName, employeData.lastName, negativeData.startDate, employeData.email);
    const selectorStartDate = locate('[ng-model="selectedEmployee.startDate"].ng-invalid');
    if (!selectorStartDate) {
        assert.fail("Test failed");
    }
});
Scenario('Attempt to create a single employe with empty fields ', () => {
    employePage.attemptsToCreateEmploye('', '', '', '');
    const selectorFirstName = locate('[ng-model="selectedEmployee.firstName"].ng-invalid');
    const selectorLastName = locate('[ng-model="selectedEmployee.lastName"].ng-invalid');
    const selectorStartDate = locate('[ng-model="selectedEmployee.startDate"].ng-invalid');
    const selectorEmail = locate('[ng-model="selectedEmployee.email"].ng-invalid');
    if (!selectorFirstName || !selectorLastName || !selectorStartDate || !selectorEmail) {
        assert.fail("Test failed");
    }
});