/// <reference types="cypress" />

describe('Testing user login + member creation options', () => {
    beforeEach(()=>{
        cy.visit('http://estudiantesmiso.space:2368/ghost')
        cy.wait(7000)
    })
    it('Add myself as Member', ()=>{
        // Llogin
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
            cy.get("#ember11").click()
        })
        cy.wait(5000)
        // Visit members, then create member, then create a new member with name and email page.
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-green"]').click();
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
    })
    it('Create New Member', ()=>{
        // Llogin
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
            cy.get("#ember11").click()
        })
        cy.wait(5000)
        // Visit members, then create member, then create a new member with name and email page.
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members/new') 
        cy.wait(1000)
        cy.get('#member-name').type('Andres Ramirez', { force: true })
        cy.get('#member-email').type('aramirezr2@uniandes.edu.co', { force: true })
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
    })
    it('Create New Member with Excess Charaters', ()=>{
        // Llogin
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
            cy.get("#ember11").click()
        })
        cy.wait(5000)
        // Visit members, then create member, then create a new member with name and email page.
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members/new') 
        cy.wait(1000)
        cy.get('#member-name').type('Andres Ramirez', { force: true })
        cy.get('#member-email').type('aramirezr2@uniandes.edu.co', { force: true })
        cy.get('#member-note').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ornare metus, at feugiat tortor rutrum sed. Nam pharetra rutrum quam, quis fringilla eros tincidunt ac. Vivamus pulvinar et nisi id feugiat. Sed vitae hendrerit sem, eget mollis urna. Ut eu efficitur eros. Quisque non nisl ut nulla feugiat semper in id lectus. Nam auctor justo eget justo eleifend, id varius augue venenatis. Sed cursus nisi at est vehicula imperdiet. Duis vitae dolor et mi rutrum sagittis. Sed at ex in turpis sollicitudin sollicitudin at at eros. Nunc vulputate tellus ut turpis finibus suscipit. Ut ac eleifend magna. Sed auctor elementum tempor. Nunc ultricies orci lacus, in consequat nisi pulvinar placerat. Cras tristique felis sit amet elit mattis rutrum. Sed eget felis purus.', { force: true })
        cy.wait(6000)
        cy.get('.word-count').should('have.css', 'color', 'rgb(226, 84, 64)')
        cy.wait(2000)
        cy.get('#member-note').clear()
        cy.get('#member-note').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ornare metus, at feugiat tortor rutrum sed. Nam pharetra rutrum quam, quis fringilla eros tincidunt ac. Vivamus pulvinar et nisi id feugiat.', { force: true })
        cy.wait(6000)
        cy.get('.word-count').should('have.css', 'color', 'rgb(48, 207, 67)')
        cy.wait(2000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
    })
    it('Edit Member', ()=>{
        // Llogin
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
            cy.get("#ember11").click()
        })
        cy.wait(5000)
        // Visit members, then create member, then create a new member with name and email page.
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.get('a[class="ember-view gh-list-data"]').eq(0).click()
        cy.wait(1000)
        cy.wait(1000)
        cy.get('#member-name').type('Andres Ramirez Restrepo', { force: true })
        cy.get('#member-email').type('aramirezr2@uniandes.edu.co', { force: true })
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
    })
    it('Delete Member', ()=>{
        // Llogin
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('grupo10@uniandes.edu.co')
            cy.get('input[name="password"]').type('mMCDL6mWRAWyKUC')
            cy.get("#ember11").click()
        })
        cy.wait(5000)
        // Visit members, then create member, then create a new member with name and email page.
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
        cy.get('a[class="ember-view gh-list-data"]').eq(0).click()
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
        cy.get('ul[class="dropdown gh-member-actions-menu dropdown-menu dropdown-triangle-top-right open fade-in-scale open ember-view"] li').eq(1).click();
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(1000)
        cy.visit('http://estudiantesmiso.space:2368/ghost/#/members')
    })
    
  })