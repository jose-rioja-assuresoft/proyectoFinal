require('cypress-xpath');

export default class BasePage {

    goToPage(url) {
        cy.visit(url);
    }

    typeText(selector, text) {
        cy.get(selector).type(text);
    }

    clickElement(selector) {
        cy.get(selector).click();
    }

    asssertUrlContains(expectedUrlPart) {
        cy.url().should('include', expectedUrlPart);
    }

    assertContainsText(selector, text) {
        cy.get(selector).should('contain', text);
    }

    assertContainsTextByXpath(selector, text) {
        cy.xpath(selector).should('contain', text);
    }

    assertTextEqual(selector, text) {
        cy.get(selector).should('equal', text);
    }

    clickElementByXpath(selector) {
        cy.xpath(selector).click();
    }

    typeTextByXpath(selector, text) {
        cy.xpath(selector).type(text);
    }

    clickElementXpathByText(selector) {        
        cy.xpath(selector).click();
    }

    assertVisibleLocatorXpath(selector) {
        cy.xpath(selector).should('be.visible');
    }

    clickElementByContains(selector, text) {
        cy.contains(selector, text).click();
    }

    assertWindowAlertMessage(message) {
        cy.on('window:alert', (text) => {
            expect(text).to.contains(message);
        })
    }

    intersectProduct() {
        cy.intercept({
            method: 'POST',
            url: 'https://api.demoblaze.com/bycat'
        }).as('products');

        cy.get("a[onclick*='monitor']").click();
        cy.wait('@products').then((interception) => {
            const items = interception.response.body.Items;
            items.forEach((item, index) => {
                cy.get('.card-title  a').eq(index).should('have.text', item.title);
                cy.get('.card-title+h5').eq(index).should('have.text', '$' + item.price);
            });
        });
    }

    assertFindTextInTable(locator, productName) {
        cy.get(locator).each(($row) => {
            const name = $row.find('td').eq(1).text().trim();
            expect(name).to.equal(productName);
        })
    }
}