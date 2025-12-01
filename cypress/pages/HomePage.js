import BasePage from "./BasePage";

export class HomePage extends BasePage {
    categoriesText = '//a[contains(text(), "CATEGORIES")]';
    phonesCategoryLocator = '//a[contains(text(), "Phones")]';
    laptopsCategoryLocator = '//a[contains(text(), "Laptops")]';
    monitorsCategoryLocator = '//a[contains(text(), "Monitors")]';
    products = '#tbodyid .col-lg-4';
    productNameLocator = 'a';
        
    categoriesTextVisible() {
        this.assertContainsTextByXpath(this.categoriesText, 'CATEGORIES');
    }

    clickPhonesCategory() {
        this.clickElementByXpath(this.phonesCategoryLocator);
    }

    clickLaptopsCategory() {
        this.clickElementByXpath(this.laptopsCategoryLocator);
    }

    clickMonitorsCategory() {
        this.clickElementByXpath(this.monitorsCategoryLocator);
    }

    addProductToCart(productName) {
        this.clickElementByContains(this.productNameLocator, productName);
    }
}