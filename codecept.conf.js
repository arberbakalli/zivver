const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
	tests: './tests/*/*.js',
	output: './output',
	helpers: {
		Puppeteer: {
			url: 'http://cafetownsend-angular-rails.herokuapp.com/login',
			show: true,
			windowSize: '1200x900',
			waitForNavigation: 'networkidle0',
		},
		MyHelper: {
			require: './tests/helper/employe_helper.js'
		  }
	},
	include: {
		I: './steps_file.js',
		loginPage: './pages/loginPage.js',
		employePage:'./pages/employePage.js'
	},
	oath:{
			username:'Luke',
			password:'Skywalker'
	},
	bootstrap: null,
	mocha: {},
	name: 'assignment',
	plugins: {
		retryFailedStep: {
			enabled: true,
		},
		screenshotOnFail: {
			enabled: true,
		},
		allure:{
			enabled: true
		},
	},
};
