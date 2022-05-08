Feature: Ghost posts

@user1 @web
Scenario: Ver preview de post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  And I wait for 5 seconds
  When I enter email "<test_login_email>"
  And I wait for 1 seconds
  And I enter password "<test_login_password>"
  And I wait for 1 seconds
  And I click login
  And I wait for 4 seconds
  And I click post option
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I enter post title "$name_1"
  And I wait for 2 seconds
  And I click configuration button
  And I wait for 5 seconds
  And I see a preview of my post
  And I wait for 5 seconds
  Then I validate my preview post
  And I wait for 15 seconds