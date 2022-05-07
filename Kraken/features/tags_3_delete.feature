Feature: Ghost tags

@user1 @web
Scenario: Como usuario inicio sesion, creo un tag y lo elimino
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
    And I enter the new tag name "testTag-delete"
    And I wait for 1 seconds
    And I enter the new tag slug "testTag"
    And I wait for 1 seconds
    And I enter the new tag description "asdasdad"
    And I wait for 2 seconds
    And I click on "Save" button
    And I wait for 2 seconds
    And I go to tags section
    And I click on the created tag "testTag-delete"
    And I wait for 5 seconds
    Then I click on the "Delete" button
    And I wait for 5 seconds
    And I click on the confirm "Delete" button
    And I wait for 5 seconds