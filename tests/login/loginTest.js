var config = require("../../codecept.conf").config
const {
	I,
	loginPage
} = inject();
Feature('Login');
Scenario('Logs in with the correct credentials @Important', (I) => {
	loginPage.login(config.auth.username, config.auth.password);
});
Scenario('Attempts to log in with wrong credentials @NegativeTest', (I) => {
	loginPage.attemptToLogin('asd', 'asd');
	I.waitForText('Invalid username or password!', 10);
});