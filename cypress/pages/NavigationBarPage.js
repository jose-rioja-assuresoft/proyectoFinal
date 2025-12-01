import BasePage from "./BasePage";

export class NavigationBarPage extends BasePage {
    homeOption = '//a[contains(text(), "Home")]';
    contactOption = '//a[contains(text(), "Contact")]';
    aboutUsOption = '//a[contains(text(), "About us")]';
    cartOption = '//a[contains(text(), "Cart")]';
    loginOption = '//a[contains(text(), "Log in")]';
    signUpOption = '//a[contains(text(), "Sign up")]';
    logoutOption = '//a[contains(text(), "Log out")]';
    productStoreText = '//a[contains(text(), "PRODUCT STORE")]';
    welcomeUsernameText = '#nameofuser';

    ClickHomeOption() {
        this.clickElementByXpath(this.homeOption);
    }

    clickContactOption() {
        this.clickElementByXpath(this.contactOption);
    }

    clickAboutUsOption() {
        this.clickElementByXpath(this.contactOption);
    }

    clickCartOption() {
        this.clickElementByXpath(this.cartOption);
    }

    clickLoginOption() {
        this.clickElementByXpath(this.loginOption);
    }

    clickSignUpOption() {
        this.clickElementByXpath(this.signUpOption);
    }

    clickLogoutOption() {
        this.clickElementByXpath(this.logoutOption);
    }

    productStoreTextVisible() {
        this.assertContainsTextByXpath(this.productStoreText, 'PRODUCT STORE');
    }

    welcomeUsernameTextVisible(username) {
        this.assertContainsText(this.welcomeUsernameText, username);
//        this.assertContainsTextByXpath(this.welcomeUsernameText, 'Welcome '+ username);
    }
}