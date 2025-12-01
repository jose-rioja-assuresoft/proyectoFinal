import { CartPage } from "../../pages/cartPage";
import { HomePage } from "../../pages/HomePage";
import { NavigationBarPage } from "../../pages/NavigationBarPage";
import { ProductPage } from "../../pages/ProductPage";

let homePage = new HomePage();
let navigationBarPage = new NavigationBarPage();
let productPage = new ProductPage();
let cartPage = new CartPage();

describe('Home Page Test Suite', () => {
    
    beforeEach(() => {
        homePage.goToPage('https://www.demoblaze.com/');
    });

    it('Home page is loaded successfully', () => {
        navigationBarPage.ClickHomeOption();
        navigationBarPage.productStoreTextVisible();
        homePage.categoriesTextVisible();
    });

    it('Add a monitor to the cart', () => {
        const productName = 'Apple monitor 24'
        navigationBarPage.ClickHomeOption();
        homePage.clickMonitorsCategory();
        homePage.addProductToCart(productName);
        homePage.asssertUrlContains("/prod.html?");
        productPage.clickAddToCartButton();
        productPage.assertWindowAlertMessage('Product added');
        navigationBarPage.clickCartOption();
        cartPage.assertProductIsListedInTheCart(productName);
    });

    it('Add a monitor to the cart with contract test', () => {
        const productName = 'Apple monitor 24'
        navigationBarPage.ClickHomeOption();
        homePage.intersectProduct();
    });
});