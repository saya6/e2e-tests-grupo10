Feature: Ghost — Nuevo Miembro [Exitoso]

@user3 @web
Scenario: [3 — Member] — Como usuario administrador, deseo poder eliminar un usuario de la base de datos. Vamos a hacer una validación de que al decidir eliminarlo primero cancelo y como administrador me arrepiento de la gestión.
  Given I navigate to page "<test_page>"
  And I wait for 1 seconds
  And I take a screenshot "step4-1-login_page"
  When I enter email "<test_login_email>"
  And I wait for 1 seconds
  And I enter password "<test_login_password>"
  And I wait for 1 seconds
  And I take a screenshot "step4-2-login_info_complete"
  And I click signin
  And I wait for 7 seconds
  And I take a screenshot "step4-3-dashboard"
  Given I navigate to page "<test_page_members>"
  And I wait for 2 seconds
  And I take a screenshot "step4-4-member-page"
  Given I navigate to page "<test_page_members_new>"
  And I wait for 3 seconds
  And I take a screenshot "step4-5-new-member-page"
  And I enter new member name "<test_member_name>"
  And I wait for 1 seconds
  And I enter new member email "<test_login_email>"
  And I wait for 1 seconds
  And I take a screenshot "step4-6-new-member-page-complete"
  And I click members-new-save
  And I wait for 1 seconds
  Given I navigate to page "<test_page_members>"
  And I wait for 1 seconds
  And I take a screenshot "step4-7-new-member-stored"
  And I click members-open-first
  And I wait for 1 seconds
  And I click members-open-first-configButton
  And I wait for 1 seconds
  And I click members-open-first-configButton_delete
  And I wait for 1 seconds
  And I take a screenshot "step4-8-delete-modal"
  And I click members-open-first-configButton_delete_cancel
  And I wait for 1 seconds
  And I take a screenshot "step4-9-members-still"
  And I click members-open-first-configButton
  And I wait for 1 seconds
  And I click members-open-first-configButton_delete
  And I wait for 1 seconds
  And I click members-open-first-configButton_delete_delete
  And I wait for 1 seconds
  Given I navigate to page "<test_page_members>"