Feature: Rozetka - Logging in

  Scenario: User can log in with valid phone number and password
    Given I attempt to log in with valid phone number and password
    Then I have logged in and have access to my profile    