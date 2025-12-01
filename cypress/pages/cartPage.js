import BasePage from "./BasePage";

export class CartPage extends BasePage { 
    productTableLocator = '#tbodyid tr';
 
    assertProductIsListedInTheCart(productName) {
        this.assertFindTextInTable(this.productTableLocator, productName);
    }
}