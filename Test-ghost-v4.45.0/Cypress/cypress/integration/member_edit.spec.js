/// <reference types="cypress" />

var ss = 0
var test = ''

describe('Testing member editing options', () => {
    
    beforeEach(() => {
    })

    it('Editar miembro satisfactoriamente', () => {
      
        cy.fixture('configuration').then((configuration)  => {
            test='success'
            ss=1

            cy.visit(configuration.URL_GHOST_ADMIN)
            cy.wait(5000)
    
            var email = configuration.USERNAME
            var password = configuration.PASSWORD
            
            let name1 = "Test Member 1"
            let email1 =  "member1@example.com"
            let note1 = "asdt eds ff"
            let email2 =  "member1new@example.com"

            doLogin(cy, email, password)
            createMember(cy, name1, email1, note1)
            checkIfMemberExists(cy, email1)
            updateMember(cy, email1, {email: email2})
            checkIfMemberNotExists(cy, email1)
            checkIfMemberExists(cy, email2)
            deleteMember(cy, email2)
            checkIfMemberNotExists(cy, email2) 
            cy.wait(3000)
        })

    })

    
    it('Editar el correo de un miembro, correo vacio', () => {
        
        cy.fixture('configuration').then((configuration)  => {
            test = 'empty-email'
            ss = 1
            
            cy.visit(configuration.URL_GHOST_ADMIN)
            cy.wait(5000)
            
            var email = configuration.USERNAME
            var password = configuration.PASSWORD
            
            let name1 = "Test Member 1"
            let email1 =  "member1@example.com"
            let note1 = "asdt eds ff"
            
            doLogin(cy, email, password)
            createMember(cy, name1, email1, note1)
            checkIfMemberExists(cy, email1)
            updateMember(cy, email1, {email: ""})
            checkIfEmptyMailError(cy)
            cancelEdit(cy)
            checkIfMemberExists(cy, email1)
            deleteMember(cy, email1)
            checkIfMemberNotExists(cy, email1)
            cy.wait(3000)
        })

    })


    it('Editar el correo de un miembro, correo incorrecto', () => {
        
        cy.fixture('configuration').then((configuration)  => {
            test = 'invalid-email'
            ss = 1
            
            cy.visit(configuration.URL_GHOST_ADMIN)
            cy.wait(5000)
            
            var email = configuration.USERNAME
            var password = configuration.PASSWORD
            
            let name1 = "Test Member 1"
            let email1 =  "member1@example.com"
            let note1 = "asdt eds ff"
            let email2 =  "member1new@example"
            
            doLogin(cy, email, password)
            createMember(cy, name1, email1, note1)
            checkIfMemberExists(cy, email1)
            updateMember(cy, email1, {email: email2})
            checkIfWrongMailError(cy)
            cancelEdit(cy)
            checkIfMemberExists(cy, email1)
            deleteMember(cy, email1)
            checkIfMemberNotExists(cy, email1)
            cy.wait(3000)
        })

    })

    it('Editar el correo de un miembro, correo ya existe', () => {
        
        cy.fixture('configuration').then((configuration)  => {
            test = 'duplicated-email'
            ss = 1
            
            cy.visit(configuration.URL_GHOST_ADMIN)
            cy.wait(5000)
            
            var email = configuration.USERNAME
            var password = configuration.PASSWORD
            
            let name1 = "Test Member 1"
            let name2 = "Test Member 2"
            let email1 =  "member1@example.com"
            let email2 = "member2@example.com"
            let note1 = "asdt eds ff"
            let note2 = "dfs sfdsd fsfd"

            doLogin(cy, email, password)
            createMember(cy, name1, email1, note1)
            checkIfMemberExists(cy, email1)
            createMember(cy, name2, email2, note2)
            checkIfMemberExists(cy, email2)
            updateMember(cy, email1, {email: email2})
            checkIfEmailRepetedError(cy)
            cancelEdit(cy)
            checkIfMemberExists(cy, email1)
            deleteMember(cy, email1)
            checkIfMemberNotExists(cy, email1)
            checkIfMemberExists(cy, email2)
            deleteMember(cy, email2)
            checkIfMemberNotExists(cy, email2)
            cy.wait(3000)
        })

    })



    it('Editar la nota de un miembro, nota muy extensa', () => {
        
        cy.fixture('configuration').then((configuration)  => {
            test = 'long-note'
            ss = 1
                        
            cy.visit(configuration.URL_GHOST_ADMIN)
            cy.wait(5000)
            
            var email = configuration.USERNAME
            var password = configuration.PASSWORD
            
            let name1 = "Test Member 1"
            let email1 =  "member1@example.com"
            let note1 = "asdt eds ff"
            let note2 = "1234567890".repeat(51)

            doLogin(cy, email, password)
            createMember(cy, name1, email1, note1)
            checkIfMemberExists(cy, email1)
            updateMember(cy, email1, {note: note2})
            checkIfLongNoteError(cy)
            cancelEdit(cy)
            checkIfMemberExists(cy, email1)
            deleteMember(cy, email1)
            checkIfMemberNotExists(cy, email1)
            cy.wait(3000)
        })

    })


})

function doLogin(cy, email, password ){
    cy.screenshot(test + "/" + ss++ +'-login_page')
    cy.get('input[name="identification"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button:contains("Sign in")').click()
    cy.wait(4000)
    cy.screenshot(test + "/" + ss++ +'-dashboard')
}

function createMember(cy, name, email, note) {
    clickOn(cy, 'a', 'Members')
    cy.screenshot(test + "/" + ss++ +'-members_list')
    clickOn(cy, 'a', 'New member')
    cy.screenshot(test + "/" + ss++ +'-new_member')
    fillField(cy, 'input', 'name', name)
    fillField(cy, 'input', 'email', email)
    fillField(cy, 'textArea', 'note', note)
    clickOn(cy, 'button', 'Save')
    cy.screenshot(test + "/" + ss++ +'-member_saved')
    cy.wait(2000)
}

function updateMember(cy, email, newData) {
    cy.screenshot(test + "/" + ss++ +'-members_list')
    goToMember(cy, email)
    cy.screenshot(test + "/" + ss++ +'-member_detail')
    if ('name' in newData){
        fillField(cy, 'input', 'name', newData.name)
    }
    if ('email' in newData){
        fillField(cy, 'input', 'email', newData.email)
    }
    if('note' in newData){
        fillField(cy, 'textArea', 'note', newData.note)
    }
    clickOn(cy, 'button', 'Save')
    cy.screenshot(test + "/" + ss++ +'-member_saved')
    cy.wait(2000)
}

function deleteMember(cy, email) {
    cy.screenshot(test + "/" + ss++ +'-members_list')
    goToMember(cy, email)
    cy.screenshot(test + "/" + ss++ +'-member_detail')
    clickOn(cy, 'button', 'Actions')
    cy.screenshot(test + "/" + ss++ +'-member_actions')
    clickOn(cy, 'button', 'Delete member')
    cy.screenshot(test + "/" + ss++ +'-member_delete_confirmation')
    clickOnInModal(cy, 'button', 'Delete member')
    cy.screenshot(test + "/" + ss++ +'-members_list')
}

function goToMember(cy, email) {
    clickOn(cy, 'a', 'Members')
    clickOn(cy, 'a', email)
}

function checkIfMemberExists(cy, email) {
    clickOn(cy, 'a', 'Members')
    cy.get('a:contains("' + email + '")').should('have.length', 1)
    cy.wait(1000)
}

function checkIfMemberNotExists(cy, email) {
    clickOn(cy, 'a', 'Members')
    cy.get('a').each((value)=>{
        cy.wrap(value).should('not.contains.text', email)
    })
    cy.wait(1000)
}

function checkIfEmptyMailError(cy) {
    cy.screenshot(test + "/" + ss++ +'-member_save_error')
    checkErrorInField(cy, 'input', 'email', 'Please enter an email.')
    cy.wait(1000)
}

function checkIfWrongMailError(cy) {
    cy.screenshot(test + "/" + ss++ +'-member_save_error')
    checkErrorInField(cy, 'input', 'email', 'Invalid Email.')
    cy.wait(1000)
}

function checkIfLongNoteError(cy) {
    cy.screenshot(test + "/" + ss++ +'-member_save_error')
    checkErrorInField(cy, 'textArea', 'note', 'Note is too long.')
    cy.wait(1000)
}

function checkIfEmailRepetedError(cy) {
    cy.screenshot(test + "/" + ss++ +'-member_save_error')
    checkGeneralError(cy, 'Validation error, cannot edit member. Member already exists. Attempting to edit member with existing email address')
    cy.wait(1000)
}

function checkErrorInField(cy, type, field, errorMsg) {
    cy.get(type + '[name="'  + field + '"]').siblings('p').first().should('contains.text', errorMsg)
}

function checkGeneralError(cy, errorMsg) {
    cy.get('article:contains("' + errorMsg +'")').should('have.length', 1)
}

function cancelEdit(cy){
    clickOn(cy, 'a', 'Members')
    cy.screenshot(test + "/" + ss++ +'-member_edit_cancel')
    clickOnInModal(cy, 'button', 'Leave')
    cy.wait(4000)
}

function clickOn(cy, type, name) {
    cy.get(type + ':contains("' + name + '")').first().click(); 
    cy.wait(4000)
}

function clickOnInModal(cy, type, name){
    cy.get('.modal-content').find(type+':contains("' + name + '")').click()
    cy.wait(4000)
}

function fillField(cy, type, name, value){
    cy.get(type + '[name="' + name + '"]').clear( { force: true })
    if(value) {
        cy.get(type + '[name="' + name + '"]').type(value, { force: true })
    }
    cy.wait(1000)
}