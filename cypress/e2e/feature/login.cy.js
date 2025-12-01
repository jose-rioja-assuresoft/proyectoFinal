import { HomePage } from "../../pages/HomePage";
import { NavigationBarPage } from "../../pages/NavigationBarPage";
import { LoginPage } from "../../pages/LoginPage";
import user from '../../fixtures/user.json';


let homePage = new HomePage();
let navigationBarPage = new NavigationBarPage();
let loginPage = new LoginPage();

describe('Login Test Suite', () => {
    
    beforeEach(() => {
        homePage.goToPage('https://www.demoblaze.com/');
    });

    it(`Login with an existing user successfully: ${user.user.username}`, () => {
        navigationBarPage.clickLoginOption();
        loginPage.typeUsername(user.user.username);
        loginPage.typePassword(user.user.password);
        loginPage.clickLoginButton();
        navigationBarPage.welcomeUsernameTextVisible(user.user.username);
        navigationBarPage.clickLogoutOption();
    });

    it('Login using a user with wrong password', () => {
        navigationBarPage.clickLoginOption();
        loginPage.typeUsername(user.wrongPassword.username);
        loginPage.typePassword(user.wrongPassword.password);
        loginPage.clickLoginButton();
        loginPage.assertWindowAlertMessage('Wrong password.');
    })
});