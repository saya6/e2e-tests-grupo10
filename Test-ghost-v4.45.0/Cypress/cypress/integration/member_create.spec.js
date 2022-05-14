/// <reference types="cypress" />

describe('Testing user login + member creation options', () => {
    beforeEach(()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://estudiantesmiso.space:2368/ghost')
        cy.wait(7000)
    })
    it('Add myself as Member', ()=>{
        cy.screenshot('step1-1-login_page')
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
        })
        cy.screenshot('step1-2-login_info_complete')
        cy.get("#ember11").click()
        cy.wait(5000)
        cy.screenshot('step1-3-dashboard')
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(1000)
        cy.screenshot('step1-4-member-page')
        cy.get('button[class="gh-btn gh-btn-green"]').click();
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.screenshot('step1-5-member-page-with-new-member')
        // Delete member to restore the DB.
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(1000)
        cy.get('a[class="ember-view gh-list-data"]').eq(0).click()
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
        cy.wait(1000)
        cy.get('ul[class="dropdown gh-member-actions-menu dropdown-menu dropdown-triangle-top-right open fade-in-scale open ember-view"] li').eq(1).click();
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(1000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
    })
    it('Create New Member', ()=>{
        cy.screenshot('step2-1-login_page')
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
        })
        cy.screenshot('step2-2-login_info_complete')
        cy.get("#ember11").click()
        cy.wait(5000)
        cy.screenshot('step2-3-dashboard')
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(1000)
        cy.screenshot('step2-4-member-page')
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members/new') 
        cy.wait(1000)
        cy.screenshot('step2-5-new-member-page')
        cy.get('#member-name').type('Andres Ramirez', { force: true })
        cy.get('#member-email').type('aramirezr2@uniandes.edu.co', { force: true })
        cy.wait(1000)
        cy.screenshot('step2-6-new-member-page-complete')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(3000)
        cy.screenshot('step2-7-new-member-stored')
        // Delete member to restore the DB.
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(5000)
        cy.screenshot('step2-7-error')
        cy.get('a[class="ember-view gh-list-data"]').eq(0).click()
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
        cy.get('ul[class="dropdown gh-member-actions-menu dropdown-menu dropdown-triangle-top-right open fade-in-scale open ember-view"] li').eq(1).click();
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(1000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
    })
    it('Create New Member with Excess Charaters', ()=>{
        cy.screenshot('step3-1-login_page')
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
        })
        cy.screenshot('step3-2-login_info_complete')
        cy.get("#ember11").click()
        cy.wait(5000)
        cy.screenshot('step3-3-dashboard')
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(1000)
        cy.screenshot('step3-4-member-page')
        //
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members/new') 
        cy.wait(1000)
        cy.screenshot('step3-5-new-member-page')
        cy.get('#member-name').type('Andres Ramirez', { force: true })
        cy.get('#member-email').type('aramirezr2@uniandes.edu.co', { force: true })
        cy.get('#member-note').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ornare metus, at feugiat tortor rutrum sed. Nam pharetra rutrum quam, quis fringilla eros tincidunt ac. Vivamus pulvinar et nisi id feugiat. Sed vitae hendrerit sem, eget mollis urna. Ut eu efficitur eros. Quisque non nisl ut nulla feugiat semper in id lectus. Nam auctor justo eget justo eleifend, id varius augue venenatis. Sed cursus nisi at est vehicula imperdiet. Duis vitae dolor et mi rutrum sagittis. Sed at ex in turpis sollicitudin sollicitudin at at eros. Nunc vulputate tellus ut turpis finibus suscipit. Ut ac eleifend magna. Sed auctor elementum tempor. Nunc ultricies orci lacus, in consequat nisi pulvinar placerat. Cras tristique felis sit amet elit mattis rutrum. Sed eget felis purus.', { force: true })
        cy.wait(6000)
        cy.get('.word-count').should('have.css', 'color', 'rgb(226, 84, 64)')
        cy.screenshot('step3-6-new-member-excess-character-error')
        cy.wait(2000)
        cy.get('#member-note').clear()
        cy.get('#member-note').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ornare metus, at feugiat tortor rutrum sed. Nam pharetra rutrum quam, quis fringilla eros tincidunt ac. Vivamus pulvinar et nisi id feugiat.', { force: true })
        cy.wait(6000)
        cy.get('.word-count').should('have.css', 'color', 'rgb(48, 207, 67)')
        cy.screenshot('step3-7-new-member-excess-character-fixed')
        cy.wait(2000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.screenshot('step3-8-new-member-stored')
        cy.wait(3000)
        cy.get('a[class="ember-view gh-list-data"]').eq(0).click()
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
        cy.wait(1000)
        cy.get('ul[class="dropdown gh-member-actions-menu dropdown-menu dropdown-triangle-top-right open fade-in-scale open ember-view"] li').eq(1).click();
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(1000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
    })
    it('Edit Member', ()=>{
        cy.screenshot('step4-1-login_page')
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
        })
        cy.screenshot('step4-2-login_info_complete')
        cy.get("#ember11").click()
        cy.wait(5000)
        cy.screenshot('step4-3-dashboard')
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(1000)
        // Create member for testing.
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members/new') 
        cy.wait(1000)
        cy.get('#member-name').type('Andres Ramirez', { force: true })
        cy.get('#member-email').type('aramirezr2@uniandes.edu.co', { force: true })
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(3000)
        cy.screenshot('step4-4-member-page')
        // Open member created
        cy.get('a[class="ember-view gh-list-data"]').eq(0).click()
        cy.wait(1000)
        cy.screenshot('step4-5-old-member-view')
        cy.get('#member-name').clear()
        cy.get('#member-name').type('Andres Ramirez Restrepo', { force: true }) 
        cy.wait(1000)
        cy.screenshot('step4-6-old-member-edit-complete')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.screenshot('step4-7-old-member-changes-stored')
        // Delete member to restore the DB.
        cy.wait(1000)
        cy.get('a[class="ember-view gh-list-data"]').eq(0).click()
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
        cy.wait(1000)
        cy.get('ul[class="dropdown gh-member-actions-menu dropdown-menu dropdown-triangle-top-right open fade-in-scale open ember-view"] li').eq(1).click();
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(1000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
    })
    it('Delete Member', ()=>{
        cy.screenshot('step5-1-login_page')
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
        })
        cy.screenshot('step5-2-login_info_complete')
        cy.get("#ember11").click()
        cy.wait(5000)
        cy.screenshot('step5-3-dashboard')
        // Create member for testing
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members/new') 
        cy.wait(1000)
        cy.get('#member-name').type('Andres Ramirez', { force: true })
        cy.get('#member-email').type('aramirezr2@uniandes.edu.co', { force: true })
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(3000)
        cy.screenshot('step5-4-member-page')
        //
        cy.get('a[class="ember-view gh-list-data"]').eq(0).click()
        cy.wait(1000)
        cy.screenshot('step5-5-delete-button')
        cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
        cy.get('ul[class="dropdown gh-member-actions-menu dropdown-menu dropdown-triangle-top-right open fade-in-scale open ember-view"] li').eq(1).click();
        cy.wait(1000)
        cy.screenshot('step5-6-delete-modal')
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(1000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.screenshot('step5-7-delete-confirm')
    })
    
  })