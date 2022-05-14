Feature: Ghost tags

@user1 @web
Scenario: Como usuario inicio sesion y intento crear un tag vacio
    Given I navigate to page "<test_page>"
    And I wait for 5 seconds
    When I enter email "<test_login_email>"
    And I wait for 1 seconds
    And I enter password "<test_login_password>"
    And I wait for 1 seconds
    And I click next
    And I wait for 7 seconds
    And I go to tags section
    And I take a screenshot for tags module with name "1.list-tags-view" on folder "crear-tag-invalido"
    And I wait for 2 seconds
    And I click on "New Tag" button
    And I take a screenshot for tags module with name "2.create-tags-view" on folder "crear-tag-invalido"
    And I wait for 2 seconds
    Then I click on "Save" button
    And I wait for 2 seconds
    And I take a screenshot for tags module with name "3.save-wrong-tag" on folder "crear-tag-invalido"
    And I check the error message "You must specify a name for the tag." is displayed
    And I wait for 3 seconds
