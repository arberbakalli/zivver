var config = require("../../codecept.conf").config
const {
	I,
	loginPage,
	employePage
} = inject();
Feature('Update Employe');
const employeData = {
	firstName: 'Mike',
	lastName: 'John',
	startDate: '2020-09-25',
	email: 'mikejohn@gmail.com'
};
Before((loginPage) => {
	loginPage.login();
});
Scenario('Update a single employe ', async () => {
	const updateData = {
		startDate: '2020-02-02',
		email: 'random@gmail.com'
	};
	employePage.updateEmploye(employeData.firstName, employeData.lastName, updateData);
	await employePage.assertUpdatedEmploye(employeData.firstName, employeData.lastName, updateData);
});