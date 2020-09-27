var config = require("../codecept.conf").config
const {
  I
} = inject();
module.exports = {
  fields: {
    email: 'Username',
    password: 'Password',
    login: 'Login'
  },
  common(Username, Password) {
    I.amOnPage('/');
    I.fillField(this.fields.email, Username);
    I.fillField(this.fields.password, Password);
    I.click(this.fields.login);
  },
  login(Username = config.auth.username, Password = config.auth.password) {
    this.common(Username, Password);
  },
  attemptToLogin(Username = config.oath.username, Password = config.oath.password) {
    this.common(Username, Password);
    I.seeCurrentUrlEquals(config.helpers.Puppeteer.url, 10);
  }
}