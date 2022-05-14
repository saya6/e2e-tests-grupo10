Feature: crear_post_con_exito

@user1 @web
Scenario: Crear post
  Given I navigate to page "<test_page>"
  And I wait for 5 seconds
  When I enter email "<test_login_email>"
  And I wait for 1 seconds
  And I enter password "<test_login_password>"
  And I wait for 1 seconds
  And I click signin
  And I wait for 4 seconds
  And I click post option
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I enter post title "$name_1"
  And I wait for 2 seconds
  And I click configuration button
  And I wait for 4 seconds
  And I click publish
  And I wait for 2 seconds
  And I click publish button
  And I wait for 3 seconds
  And I click confirmation publish button
  And I wait for 3 seconds
  And I go back to list posts
  And I wait for 3 seconds
  Then I go to see my post in list "$$name_1"
  And I wait for 15 seconds