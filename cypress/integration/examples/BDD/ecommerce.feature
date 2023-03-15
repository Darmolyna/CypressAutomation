Feature: End to end Ecommerce validation

    Application regression

    @regression
    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add items to cart
    When I validate the total prices
    Then Select the country submit and verify thank you

    @smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
        |name     | gender |
        |Darmolyn | Female |

    Then I validate the form behavior
    Then I select the shop page