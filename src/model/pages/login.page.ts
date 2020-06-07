class LoginPg {
    public get loginURL()  { return browser.element("/html/body/app-root/div/div[1]/app-rz-header/header/div/div[1]/div[3]/div[1]/p/a") }
    public get userName()  { return browser.element("#auth_email")}
    public get passWord()  { return browser.element("#auth_pass")}
    public get loginButton()  { return browser.element("/html/body/app-root/single-modal-window/div[2]/div[2]/user-identification/auth/div/form/div[2]/button") }
    public get profileName()  { return browser.element("/html/body/app-root/div/div[1]/app-rz-header/header/div/div[1]/div[3]/div[1]/p/a") }
    public open(): void {
        browser.url('/')
    }
}
const LoginPage = new LoginPg();
export default LoginPage