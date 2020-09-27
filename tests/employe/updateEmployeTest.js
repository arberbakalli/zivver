var config = require("../../codecept.conf").config
const {
	I,
	loginPage,
	employePage
} = inject();
Feature('Update Employe');
const employeData = {
	firstName: 'arber',
	lastName: 'bakalli',
	startDate: '2018-02-02',
	email: 'random@email.com'
};
Before((loginPage) => {
	loginPage.login();
});
Scenario('Update a single employe ', async () => {
	const updateData = {
		startDate: '2020-02-02',
		email: 'random@gmail.com'
	};
	employePage.updateEmploye('Mike', 'John', updateData);
	await employePage.assertUpdatedEmploye('Mike', 'John', updateData);
});