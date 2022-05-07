Feature: Ghost posts

@user1 @web
Scenario: Crear post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click login
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