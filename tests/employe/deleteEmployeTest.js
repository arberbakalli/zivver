var config = require("../../codecept.conf").config
const {
  I,
  loginPage,
  employePage
} = inject();
Feature('Delete Employe');
const employeData = {
  firstName: 'arber',
  lastName: 'bakalli',
  startDate: '2018-02-02',
  email: 'random@email.com'
};
Before((loginPage) => {
  loginPage.login();
  employePage.createEmploye(employeData.firstName, employeData.lastName, employeData.startDate, employeData.email);
});
Scenario('Delete a single employe ', () => {
  employePage.deleteEmployeByName(employeData.firstName, employeData.lastName);
});