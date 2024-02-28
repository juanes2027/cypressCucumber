Feature: Test the page saucedemo.com

 
   Scenario: Validate each product
       Given I visit the login page
       When I submit valid login credentials
       Then I validate the products information

   Scenario: Sort the products by price from high to low
       Given I visit the login page
       When I submit valid login credentials
       Then I validate the products sorted

    Scenario: Submit an order for the Sauce Labs Fleece Jacket item
       Given I visit the login page
       When I submit valid login credentials
       Then I should see failure2
       |username       |last            |postal       |
       |Juan           |Osorio          |059008       |




