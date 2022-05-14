Feature: Ghost tags

@user1 @web
Scenario: Como usuario inicio sesion, creo un tag de manera correcta y luego lo actualizo de manera correcta
    Given I navigate to page "<test_page>"
    And I wait for 5 seconds
    When I enter email "<test_login_email>"
    And I wait for 1 seconds
    And I enter password "<test_login_password>"
    And I wait for 1 seconds
    And I click next
    And I wait for 7 seconds
    And I go to tags section
    And I take a screenshot for tags module with name "1.list-tags-view" on folder "actualizar-tag"
    And I wait for 2 seconds
    And I click on "New Tag" button
    And I take a screenshot for tags module with name "2.new-tags-view" on folder "actualizar-tag"
    And I wait for 2 seconds
    And I enter the new tag name "testTag-toUpdate"
    And I wait for 1 seconds
    And I enter the new tag slug "testTag-toUpdate"
    And I wait for 1 seconds
    And I take a screenshot for tags module with name "4.write-tag-info" on folder "actualizar-tag"
    And I click on "Save" button
    And I wait for 2 seconds
    And I go to tags section
    And I take a screenshot for tags module with name "5.check-list-tags-view" on folder "actualizar-tag"
    And I click on the created tag "testTag-toUpdate"
    And I wait for 5 seconds
    And I enter the new tag name "testTag-UPDATED"
    And I wait for 1 seconds
    And I enter the new tag slug "testTag-UPDATED"
    And I wait for 1 seconds
    And I click on "Save" button
    And I take a screenshot for tags module with name "6.update-tags" on folder "actualizar-tag"
    Then I go to tags section
    And I check the created tag "testTag-UPDATED" appears on the list
    And I take a screenshot for tags module with name "7.check-list-tags-view" on folder "actualizar-tag"
    And I wait for 3 seconds