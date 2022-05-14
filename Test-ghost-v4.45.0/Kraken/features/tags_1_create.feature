Feature: Ghost tags

@user1 @web
Scenario: Como usuario inicio sesion y y creo un tag de manera correcta
    Given I navigate to page "<test_page>"
    And I wait for 5 seconds
    When I enter email "<test_login_email>"
    And I wait for 1 seconds
    And I enter password "<test_login_password>"
    And I wait for 1 seconds
    And I click next
    And I wait for 7 seconds
    And I go to tags section
    And I take a screenshot for tags module with name "1.list-tags-view" on folder "crear-tag-valido"
    And I wait for 2 seconds
    And I click on "New Tag" button
    And I take a screenshot for tags module with name "2.new-tag-view" on folder "crear-tag-valido"
    And I wait for 2 seconds
    And I enter the new tag name "testTag"
    And I wait for 1 seconds
    And I enter the new tag slug "testTag"
    And I wait for 2 seconds
    And I take a screenshot for tags module with name "3.write-tag-info" on folder "crear-tag-valido"
    And I click on "Save" button
    And I take a screenshot for tags module with name "4.check-write-tag-info" on folder "crear-tag-valido"
    And I wait for 2 seconds
    Then I go to tags section
    And I check the created tag "testTag" appears on the list
    And I take a screenshot for tags module with name "5.validate-tag" on folder "crear-tag-valido"
    And I wait for 2 seconds
