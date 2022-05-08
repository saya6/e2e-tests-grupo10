Feature: Ghost — Nuevo Miembro [Exitoso]

@user1 @web
Scenario: Como usuario administrador ingreso sesión y creo un nuembro correctamente (agregando email y nombre) y posteriormente ver el usuario creado en el listado de usuarios.
  Given I navigate to page "<test_page>"
  And I wait for 1 seconds
  When I enter email "<test_login_email>"
  And I wait for 1 seconds
  And I enter password "<test_login_password>"
  And I wait for 1 seconds
  And I click signin
  And I wait for 7 seconds
  Given I navigate to page "<test_page_members>"
  And I wait for 2 seconds
  And I click owner-new-member
  And I wait for 1 seconds
  Given I navigate to page "<test_page_members>"
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