Feature: Ghost — Nuevo Miembro [Exitoso]

@user1 @web
Scenario: [0 — Member] — Como usuario administrador ingreso sesión y creo un nuembro correctamente (agregando email y nombre) y posteriormente ver el usuario creado en el listado de usuarios.
  Given I navigate to page "<test_page>"
  And I wait for 1 seconds
  And I take a screenshot for members create module on folder "step1-create-self" with name "step1-1-login_page"
  When I enter email "<test_login_email>"
  And I wait for 1 seconds
  And I enter password "<test_login_password>"
  And I wait for 1 seconds
  And I take a screenshot for members create module on folder "step1-create-self" with name "step1-2-login_info_complete"
  And I click signin
  And I wait for 7 seconds
  And I take a screenshot for members create module on folder "step1-create-self" with name "step1-3-dashboard"
  Given I navigate to page "<test_page_members>"
  And I wait for 2 seconds
  And I take a screenshot for members create module on folder "step1-create-self" with name "step1-4-member-page"
  And I click owner-new-member
  And I wait for 1 seconds
  Given I navigate to page "<test_page_members>"
  And I wait for 1 seconds
  And I check the user "<test_login_email>" appears on the list
  And I take a screenshot for members create module on folder "step1-create-self" with name "step1-5-member-page-with-new-member"
  And I wait for 5 seconds
  And I click members-open-first
  And I wait for 1 seconds
  And I click members-open-first-configButton
  And I wait for 1 seconds
  And I click members-open-first-configButton_delete
  And I wait for 1 seconds
  And I click members-open-first-configButton_delete_delete
  And I wait for 1 seconds
  Given I navigate to page "<test_page_members>"