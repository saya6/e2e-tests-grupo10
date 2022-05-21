import 'cypress-each'
import 'cypress-repeat'
// Instructions
/*
    1. Install 
    npm i -D cypress-each
    2. Run tests
    cd Pruebas-generacion-datos/Cypress
    cypress run --spec cypress/integration/Datos-a-priori/member-create.spec.js
*/

// Member Pages Configuration.
let member_pages = {
    member_main: 'http://estudiantesmiso.space:2368/ghost/#/members',
    member_new: 'http://estudiantesmiso.space:2368/ghost/#/members/new'

}
const member_apriori = require("./MOCK_DATA_MEMBERS.json");

//Scenario 1. Create new member just with name and email.
member_apriori.scenario_1.forEach((scenarioData) => {
    describe('Scenario 1. Create New Member just with name and email.', () => {
        beforeEach(()=>{
            cy.viewport(1920, 1080)
            cy.fixture('configuration').then((configuration)  => {
                cy.visit(configuration.URL_GHOST_ADMIN)
                cy.wait(3000)
            })
            cy.wait(7000)
        })
        it('Scenario 1.'+ scenarioData.id +'', ()=>{
            cy.fixture('configuration').then((configuration)  => {
                var email = configuration.USERNAME
                var password = configuration.PASSWORD
                member_create_login(cy, email, password);
                cy.wait(1000)
                // Generate 5 ramdom members from the member_apriori.scenario_1 variable
                cy.visit(member_pages.member_new)
                cy.wait(1000)
                cy.get('#member-name').type(scenarioData.Name, { force: true })
                cy.get('#member-email').type(scenarioData.Email, { force: true })
                cy.wait(1000) 
                cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
                cy.wait(2000)
                cy.visit(member_pages.member_main)
                cy.wait(3000)
                // Delete member to restore the DB.
                member_delete_one_member(cy)
                cy.wait(1000)
            });
        })
    })
});

// Scenario 2. Create members with excess characters then fix them.
member_apriori.scenario_2.forEach((scenarioData) => {
    describe('Scenario 2. Create members with excess characters then fix them.', () => {
        beforeEach(()=>{
            cy.viewport(1920, 1080)
            cy.fixture('configuration').then((configuration)  => {
                cy.visit(configuration.URL_GHOST_ADMIN)
                cy.wait(3000)
            })
            cy.wait(7000)
        })
        it('Scenario 2.'+ scenarioData.id +'', ()=>{
            cy.fixture('configuration').then((configuration)  => {
                var email = configuration.USERNAME
                var password = configuration.PASSWORD
                member_create_login(cy, email, password);
                cy.wait(1000)
                // Generate 5 ramdom members from the member_apriori.scenario_2 variable
                cy.visit(member_pages.member_new)
                cy.wait(1000)
                cy.get('#member-name').type(scenarioData.Name, { force: true })
                cy.get('#member-email').type(scenarioData.Email, { force: true })
                cy.get('#member-note').type(scenarioData.LongCharacters, { force: true })
                cy.wait(6000)
                cy.get('.word-count').should('have.css', 'color', 'rgb(226, 84, 64)')
                cy.wait(2000)
                cy.get('#member-note').clear()
                cy.get('#member-note').type(scenarioData.ShortCharacters, { force: true })
                cy.wait(6000)
                cy.get('.word-count').should('have.css', 'color', 'rgb(48, 207, 67)')
                cy.wait(2000)
                cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
                cy.wait(2000)
                cy.visit(member_pages.member_main)
                cy.wait(3000)
                // Delete member to restore the DB.
                member_delete_one_member(cy)
                cy.wait(1000)
            });
        })
    })
});

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