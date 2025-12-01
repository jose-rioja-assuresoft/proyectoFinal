import BasePage from "./BasePage";

export class LoginPage extends BasePage {
    usernameLocator = '#loginusername';
    passwordLocator = '#loginpassword';
    loginButtonLocator = '#logInModal .btn-primary';
    closeButtonLocator = '#logInModal .btn-secondary';
    xbuttonLocator = '#logInModal .close';

    typeUsername(username) {
        this.clickElement(this.usernameLocator);
        this.typeText(this.usernameLocator, username);
    }

    typePassword(password) {
        this.clickElement(this.passwordLocator);
        this.typeText(this.passwordLocator, password);
    }

    clickLoginButton() {
        this.clickElement(this.loginButtonLocator);
    }

    errorMessageOnWindowsDialog() {

    }

}