Feature: Password walidation

    @English
    Scenario: User enters different passwords
        Given User is on Homepage
        When User select first item to cart
        And User click to cart
        And User proceeds with Checkout
        And User clicks to register account
        And User fills the form with different passwords
        Then message "Passwords does not match appears"