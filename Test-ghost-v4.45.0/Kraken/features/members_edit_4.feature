Feature: Ghost members

@user1 @web
Scenario: Editar el correo de un usuario, nota muy larga
    Given I navigate to page "<test_page>"
    And I wait for 1 seconds
    And I save screenshot "1-login_page" on "members-edit/duplicated-email"
    When I enter "<test_login_email>" on "identification" field
    And I enter "<test_login_password>" on "password" field
    And I click on button "Sign in"
    Then I wait for 2 seconds
    And I save screenshot "2-dashboard" on "members-edit/duplicated-email"

    Given I click on menu "Members"
    And I wait for 2 seconds
    And I save screenshot "3-members_list" on "members-edit/duplicated-email"
    When I click on option "New member"
    And I save screenshot "4-new_member" on "members-edit/duplicated-email"
    And I enter "$name_1" on "name" field
    And I enter "$email_1" on "email" field
    And I enter "$string_1" on "note" textArea
    And I wait for 1 seconds
    And I click on button "Save"
    And I save screenshot "5-member_saved" on "members-edit/duplicated-email"
    And I wait for 2 seconds
    And I click on menu "Members"
    And I save screenshot "6-members_list" on "members-edit/duplicated-email"
    Then I check if member "$$email_1" exists

    Given I wait for 2 seconds
    When I click on option "New member"
    And I save screenshot "7-new_member" on "members-edit/duplicated-email"
    And I enter "$name_2" on "name" field
    And I enter "$email_2" on "email" field
    And I enter "$string_2" on "note" textArea
    And I wait for 1 seconds
    And I click on button "Save"
    And I save screenshot "8-member_saved" on "members-edit/duplicated-email"
    And I wait for 2 seconds
    And I click on menu "Members"
    And I save screenshot "9-members_list" on "members-edit/duplicated-email"
    Then I check if member "$$email_2" exists

    Given I click on member "$$email_1"
    And I wait for 1 seconds
    And I save screenshot "10-member_detail" on "members-edit/duplicated-email"
    When I enter "$$email_2" on "email" field
    And I click on button "Save"
    And I wait for 2 seconds
    And I save screenshot "11-member_save_error" on "members-edit/duplicated-email"
    Then I check the error message "Validation error, cannot edit member. Member already exists. Attempting to edit member with existing email address"
    And I wait for 1 seconds    
    And I click on menu "Members"
    And I save screenshot "12-member_edit_cancel" on "members-edit/duplicated-email"
    And I click on button "Leave" on modal
    And I wait for 2 seconds
    And I save screenshot "13-members_list" on "members-edit/duplicated-email"
    And I check if member "$$email_1" exists
    And I check if member "$$email_2" exists

    Given I click on member "$$email_1"
    And I save screenshot "14-member_detail" on "members-edit/duplicated-email"
    When I click on button "Actions"
    And I wait for 1 seconds
    And I save screenshot "15-member_actions" on "members-edit/duplicated-email"
    And I click on button "Delete member"
    And I wait for 1 seconds
    And I save screenshot "16-member_delete_confirmation" on "members-edit/duplicated-email"
    And I click on button "Delete member" on modal
    And I wait for 2 seconds
    And I save screenshot "17-members_list" on "members-edit/duplicated-email"
    Then I check if member "$$email_1" doesn't exists
    And I wait for 1 seconds    

    Given I click on member "$$email_2"
    And I save screenshot "18-member_detail" on "members-edit/duplicated-email"
    When I click on button "Actions"
    And I wait for 1 seconds
    And I save screenshot "19-member_actions" on "members-edit/duplicated-email"
    And I click on button "Delete member"
    And I wait for 1 seconds
    And I save screenshot "20-member_delete_confirmation" on "members-edit/duplicated-email"
    And I click on button "Delete member" on modal
    And I wait for 2 seconds
    And I save screenshot "21-members_list" on "members-edit/duplicated-email"
    Then I check if member "$$email_2" doesn't exists
    And I wait for 1 seconds

