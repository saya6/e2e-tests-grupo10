Feature: Ghost tags

@user1 @web
Scenario: Como usuario inicio sesion y intento crear un tag vacio
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 5 seconds
    When I enter email 'test@test.com'
    And I wait for 2 seconds
    And I enter password 'lol1234567'
    And I wait for 2 seconds
    And I click next
    And I wait for 7 seconds
    And I go to tags section
    And I wait for 2 seconds
    And I click on "New Tag" button
    And I wait for 2 seconds
    Then I click on "Save" button
    And I wait for 2 seconds
    And I check the error message "You must specify a name for the tag." is displayed
    And I wait for 3 seconds
