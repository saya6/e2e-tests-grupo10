Feature: Ghost tags

@user1 @web
Scenario: Como usuario inicio sesion, creo un tag de manera correcta y luego lo actualizo de manera correcta
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 5 seconds
    When I enter email "<test_login_email>"
    And I wait for 1 seconds
    And I enter password "<test_login_password>"
    And I wait for 1 seconds
    And I click next
    And I wait for 7 seconds
    And I go to tags section
    And I wait for 2 seconds
    And I click on "New Tag" button
    And I wait for 2 seconds
    And I enter the new tag name "testTag-toUpdate"
    And I wait for 1 seconds
    And I enter the new tag slug "testTag-toUpdate"
    And I wait for 1 seconds
    And I enter the new tag description "description testTag-toUpdate"
    And I wait for 2 seconds
    And I click on "Save" button
    And I wait for 2 seconds
    And I go to tags section
    And I click on the created tag "testTag-toUpdate"
    And I wait for 5 seconds
    And I enter the new tag name "testTag-UPDATED"
    And I wait for 1 seconds
    And I enter the new tag slug "testTag-UPDATED"
    And I wait for 1 seconds
    And I click on "Save" button
    Then I go to tags section
    And I check the created tag "testTag-UPDATED" appears on the list