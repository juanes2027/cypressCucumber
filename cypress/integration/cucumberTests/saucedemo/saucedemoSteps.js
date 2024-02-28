import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-xpath';


Given('I visit the login page', () => {
    cy.visit('https://www.saucedemo.com')
})

When('I submit valid login credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.contains('Login').click()

})

Then('I validate the products information', () => {
    
    cy.contains('Backpack').click()
    cy.contains('Backpack').should('exist');
    cy.go('back');
    cy.contains('Bike').click()
    cy.contains('Bike').should('exist');
    cy.go('back');
    cy.contains('Bolt').click()
    cy.contains('Bolt').should('exist');
    cy.go('back');
    cy.contains('Fleece').click()
    cy.contains('Fleece').should('exist');
    cy.go('back');
    cy.contains('Onesie').click()
    cy.contains('Onesie').should('exist');
    cy.go('back');
    cy.contains('Red').click()
    cy.contains('Red').should('exist');
    cy.screenshot({capture: 'fullPage'})
    cy.go('back');
  
  })


  Then('I validate the products sorted', () => {
    cy.xpath('//div[@id="header_container"]/div[2]/div/span/select/option[last()]').invoke('val').then((value) => {
    cy.xpath('//div[@id="header_container"]/div[2]/div/span/select').select(value);
    cy.screenshot({capture: 'fullPage'})
  });
})


Then('I should see failure', () => {
    cy.get('.flash.error').should('be.visible')
})

Then('I should see failure2', (table) => {
    table.hashes().forEach(row => {
        cy.log(row.username)
        cy.log(row.last)
        cy.log(row.postal)

    cy.contains('Fleece').click()
    cy.contains('Add to cart').click()
    cy.get('a.shopping_cart_link').click();
    cy.contains('Checkout').click()
    cy.get('#first-name').type(row.username)
    cy.get('#last-name').type(row.last)
    cy.get('#postal-code').type(row.postal)
    cy.contains('Continue').click()
    cy.contains('Finish').click()
    cy.screenshot({capture: 'fullPage'})

})

})
