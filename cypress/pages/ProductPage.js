import BasePage from "./BasePage";

export class ProductPage extends BasePage { 
    addToCartLocator = '//a[contains(text(), "Add to cart")]';
    productNameLocator = 'div .name';
    productPriceLocator = 'div .price-container';
    productDescriptionLocator = 'div .description';

    clickAddToCartButton() {
        this.clickElementXpathByText(this.addToCartLocator);
    }

    assertProductName(text) {
        this.assertTextEqual(this.productNameLocator, text);
    }

    assertProductPrice(text) {
        this.assertTextEqual(this.productPriceLocator, text);
    }

    assertProductDescription(text) {
        this.assertTextEqual(this.productDescriptionLocator, text);
    }
}