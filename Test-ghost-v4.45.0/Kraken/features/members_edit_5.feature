Feature: Ghost members

@user1 @web
Scenario: Editar el correo de un usuario, nota muy larga
    Given I navigate to page "<test_page>"
    And I wait for 1 seconds
    And I save screenshot "1-login_page" on "members-edit/long-note"
    When I enter "<test_login_email>" on "identification" field
    And I enter "<test_login_password>" on "password" field
    And I click on button "Sign in"
    Then I wait for 2 seconds
    And I save screenshot "2-dashboard" on "members-edit/long-note"
    
    Given I click on menu "Members"
    And I wait for 2 seconds
    And I save screenshot "3-members_list" on "members-edit/long-note"
    When I click on option "New member"
    And I save screenshot "4-new_member" on "members-edit/long-note"
    And I enter "$name_1" on "name" field
    And I enter "$email_1" on "email" field
    And I enter "$string_1" on "note" textArea
    And I wait for 1 seconds
    And I click on button "Save"
    And I save screenshot "5-member_saved" on "members-edit/long-note"
    And I wait for 2 seconds
    And I click on menu "Members"
    And I save screenshot "6-members_list" on "members-edit/long-note"
    Then I check if member "$$email_1" exists

    Given I click on member "$$email_1"
    And I wait for 1 seconds
    And I save screenshot "7-member_detail" on "members-edit/long-note"
    When I enter "$string_2" 51 times on "note" textArea
    And I click on button "Save"
    And I save screenshot "8-member_save_error" on "members-edit/long-note"
    And I wait for 2 seconds
    Then I check the error message "Note is too long." on "note" textArea
    And I wait for 1 seconds   
    And I click on menu "Members"
    And I wait for 1 seconds
    And I save screenshot "9-member_edit_cancel" on "members-edit/long-note"
    And I click on button "Leave" on modal
    And I wait for 2 seconds
    And I save screenshot "10-members_list" on "members-edit/long-note"
    And I check if member "$$email_1" exists

    Given I click on member "$$email_1"
    And I save screenshot "11-member_detail" on "members-edit/long-note"
    When I click on button "Actions"
    And I wait for 1 seconds
    And I save screenshot "12-member_actions" on "members-edit/long-note"
    And I click on button "Delete member"
    And I wait for 1 seconds
    And I save screenshot "13-member_delete_confirmation" on "members-edit/long-note"
    And I click on button "Delete member" on modal
    And I wait for 2 seconds
    And I save screenshot "14-members_list" on "members-edit/long-note"
    Then I check if member "$$email_1" doesn't exists
    And I wait for 1 seconds
