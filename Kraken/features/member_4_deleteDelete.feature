Feature: Ghost — Nuevo Miembro [Exitoso]

@user4 @web
Scenario: Como usuario administrador, deseo poder eliminar un usuario de la base de datos. 
  Given I navigate to page "<test_page>"
  And I wait for 1 seconds
  When I enter email "<test_login_email>"
  And I wait for 1 seconds
  And I enter password "<test_login_password>"
  And I wait for 30 seconds
  And I click signin
  And I wait for 7 seconds
  Given I navigate to page "<test_page_members>"
  And I wait for 2 seconds
  Given I navigate to page "<test_page_members_new>"
  And I wait for 3 seconds
  And I enter new member name "<test_member_name>"
  And I wait for 1 seconds
  And I enter new member email "<test_member_email>"
  And I wait for 1 seconds
  And I click members-new-save
  And I wait for 1 seconds
  Given I navigate to page "<test_page_members>"
  And I wait for 2 seconds
  And I click members-open-first
  And I wait for 1 seconds
  And I click members-open-first-configButton
  And I wait for 1 seconds
  And I click members-open-first-configButton_delete
  And I wait for 1 seconds
  And I click members-open-first-configButton_delete_delete
  And I wait for 1 seconds
  Given I navigate to page "<test_page_members>"