let expect = require('chai').expect;
import LoginPage from '../model/pages/login.page';

var module: any;
module.exports = function search() {

    this.Given(
        /^I attempt to log in with valid phone number and password/,
        function () {
            LoginPage.open();
            LoginPage.loginURL.click();
            LoginPage.userName.setValue('0980000000');
            LoginPage.passWord.setValue('Pass123_0');
            LoginPage.loginButton.click();
        } );

    this.Then(
        /^I have logged in and have access to my profile/,
        function () {
            expect(LoginPage.profileName.getText())
                .to.contain('testloginname')
        } );

 
};