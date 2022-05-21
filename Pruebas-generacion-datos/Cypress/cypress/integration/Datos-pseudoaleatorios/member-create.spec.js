// Instructions
/*
    1. Run tests
    cd Pruebas-generacion-datos/Cypress
    cypress run --spec cypress/integration/Datos-pseudoaleatorios/member-create.spec.js
*/

// Member Pages Configuration.
let member_pages = {
    member_main: 'http://estudiantesmiso.space:2368/ghost/#/members',
    member_new: 'http://estudiantesmiso.space:2368/ghost/#/members/new'

}

//Scenario 1. Create new member just with name and email.
describe('Scenario 1. Create New Member just with name and email.', () => {
    beforeEach(()=>{
        cy.viewport(1920, 1080)
        cy.fixture('configuration').then((configuration)  => {
            cy.visit(configuration.URL_GHOST_ADMIN)
            cy.wait(3000)
        })
        cy.wait(7000)
    })
    Cypress._.times(5, (k) => {
        it('Scenario 1.'+ (k + 1) +'', ()=>{
            cy.request("GET", "https://api.mockaroo.com/api/99fed660?count=1&key=9848bfa0", {
                
            }).then((data) => {
                cy.fixture('configuration').then((configuration)  => {
                    var email = configuration.USERNAME
                    var password = configuration.PASSWORD
                    member_create_login(cy, email, password);
                    cy.wait(1000)
                    // Generate 5 ramdom members from the member_apriori.scenario_1 variable
                    cy.visit(member_pages.member_new)
                    cy.wait(1000)
                    cy.get('#member-name').type(data.body[0].Name, { force: true })
                    cy.get('#member-email').type(data.body[0].Email, { force: true })
                    cy.wait(1000) 
                    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
                    cy.wait(2000)
                    cy.visit(member_pages.member_main)
                    cy.wait(3000)
                    // Delete member to restore the DB.
                    member_delete_one_member(cy)
                    cy.wait(1000) 
                });
            });
        })
    })
})

// Scenario 2. Create members with excess characters then fix them.
describe('Scenario 2. Create members with excess characters then fix them.', () => {
    beforeEach(()=>{
        cy.viewport(1920, 1080)
        cy.fixture('configuration').then((configuration)  => {
            cy.visit(configuration.URL_GHOST_ADMIN)
            cy.wait(3000)
        })
        cy.wait(7000)
    })
    Cypress._.times(5, (k) => {
      it('Scenario 2.'+ (k + 1) +'', ()=>{
        cy.request("GET", "https://api.mockaroo.com/api/99fed660?count=1&key=9848bfa0", {
                
        }).then((data) => {
            cy.fixture('configuration').then((configuration)  => {
                var email = configuration.USERNAME
                var password = configuration.PASSWORD
                member_create_login(cy, email, password);
                cy.wait(1000)
                // Generate 5 ramdom members from the member_apriori.scenario_1 variable
                cy.visit(member_pages.member_new)
                cy.wait(1000)
                cy.get('#member-name').type(data.body[0].Name, { force: true })
                cy.get('#member-email').type(data.body[0].Email, { force: true })
                Cypress._.times(20, (k) => {
                    cy.get('#member-note').type(data.body[0].LongDesc, { force: true })    
                });
                cy.wait(6000)
                cy.get('.word-count').should('have.css', 'color', 'rgb(226, 84, 64)')
                cy.wait(2000)
                cy.get('#member-note').clear()
                cy.get('#member-note').type(data.body[0].ShortDesc, { force: true })
                cy.wait(6000)
                cy.get('.word-count').should('have.css', 'color', 'rgb(48, 207, 67)')
                cy.wait(1000) 
                cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
                cy.wait(2000)
                cy.visit(member_pages.member_main)
                cy.wait(3000)
                // Delete member to restore the DB.
                member_delete_one_member(cy)
                cy.wait(1000)
            });
        });
      })
    })
  })

// Functions.
function member_create_login(cy, email, password) {
    cy.get('input[name="identification"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get("#ember11").click()
    cy.wait(5000)
    cy.visit(member_pages.member_main)
}
function member_delete_one_member(cy) {
    cy.visit(member_pages.member_main)
    cy.wait(1000)
    cy.get('a[class="ember-view gh-list-data"]').eq(0).click()
    cy.wait(1000)
    cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
    cy.wait(1000)
    cy.get('ul[class="dropdown gh-member-actions-menu dropdown-menu dropdown-triangle-top-right open fade-in-scale open ember-view"] li').eq(1).click();
    cy.wait(1000)
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    cy.wait(1000)
    cy.visit(member_pages.member_main)
}