Feature: Ghost — Nuevo Miembro [Exitoso]

@user1 @web
Scenario: [1 — Member] — Como usuario administrador ingreso sesión y creo un nuembro correctamente (agregando email y nombre) y posteriormente ver el usuario creado en el listado de usuarios.
  Given I navigate to page "<test_page>"
  And I wait for 1 seconds
  And I take a screenshot for members create module on folder "step2-create-new" with name "step2-1-login_page"
  When I enter email "<test_login_email>"
  And I wait for 1 seconds
  And I enter password "<test_login_password>"
  And I wait for 1 seconds
  And I take a screenshot for members create module on folder "step2-create-new" with name "step2-2-login_info_complete"
  And I click signin
  And I wait for 7 seconds
  And I take a screenshot for members create module on folder "step2-create-new" with name "step2-3-dashboard"
  Given I navigate to page "<test_page_members>"
  And I wait for 2 seconds
  And I take a screenshot for members create module on folder "step2-create-new" with name "step2-4-member-page"
  Given I navigate to page "<test_page_members_new>"
  And I wait for 3 seconds
  And I take a screenshot for members create module on folder "step2-create-new" with name "step2-5-new-member-page"
  And I enter new member name "<test_member_name>"
  And I wait for 1 seconds
  And I enter new member email "<test_login_email>"
  And I wait for 1 seconds
  And I take a screenshot for members create module on folder "step2-create-new" with name "step2-6-new-member-page-complete"
  And I click members-new-save
  And I wait for 1 seconds
  Given I navigate to page "<test_page_members>"
  And I wait for 1 seconds
  And I take a screenshot for members create module on folder "step2-create-new" with name "step2-7-new-member-stored"
  And I check the user "<test_login_email>" appears on the list
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
  