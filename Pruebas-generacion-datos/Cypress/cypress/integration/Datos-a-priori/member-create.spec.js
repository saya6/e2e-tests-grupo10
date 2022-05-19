import 'cypress-each'
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
let member_configuration = {
    "USERNAME": "grupo10@uniandes.edu.co",
    "PASSWORD": "mMCDL6mWRAWyKUC",
    "URL_GHOST" : "http://estudiantesmiso.space:2368/",
    "URL_GHOST_ADMIN" : "http://estudiantesmiso.space:2368/ghost/"
}
let member_apriori = {
    scenario_1: [
        {
            id: 1,
            Name:"Tomasina Sopper",
            Email:"tsopper0@sbwire.com"
        },
        {
            id: 2,
            Name:"Udell Blackadder",
            Email:"ublackadder1@slate.com"
        },
        {
            id: 3,
            Name:"Tawsha Pilmore",
            Email:"tpilmore2@dyndns.org"
        },
        {
            id: 4,
            Name:"Modestia Silverwood",
            Email:"msilverwood3@adobe.com"
        },
        {
            id: 5,
            Name:"Bard Baser",
            Email:"bbaser4@ted.com"
        }
    ],
    scenario_2: [
        {
            id: 1,
            Name:"Aile Arlidge",
            Email:"aarlidge0@slashdot.org",
            LongCharacters:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ornare metus, at feugiat tortor rutrum sed. Nam pharetra rutrum quam, quis fringilla eros tincidunt ac. Vivamus pulvinar et nisi id feugiat. Sed vitae hendrerit sem, eget mollis urna. Ut eu efficitur eros. Quisque non nisl ut nulla feugiat semper in id lectus. Nam auctor justo eget justo eleifend, id varius augue venenatis. Sed cursus nisi at est vehicula imperdiet. Duis vitae dolor et mi rutrum sagittis. Sed at ex in turpis sollicitudin sollicitudin at at eros. Nunc vulputate tellus ut turpis finibus suscipit. Ut ac eleifend magna. Sed auctor elementum tempor. Nunc ultricies orci lacus, in consequat nisi pulvinar placerat. Cras tristique felis sit amet elit mattis rutrum. Sed eget felis purus.",
            ShortCharacters:"Unspecified fracture of right femur, sequela"
        },
        {
            id: 2,
            Name:"Danie Trye",
            Email:"dtrye1@nbcnews.com",
            LongCharacters:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ornare metus, at feugiat tortor rutrum sed. Nam pharetra rutrum quam, quis fringilla eros tincidunt ac. Vivamus pulvinar et nisi id feugiat. Sed vitae hendrerit sem, eget mollis urna. Ut eu efficitur eros. Quisque non nisl ut nulla feugiat semper in id lectus. Nam auctor justo eget justo eleifend, id varius augue venenatis. Sed cursus nisi at est vehicula imperdiet. Duis vitae dolor et mi rutrum sagittis. Sed at ex in turpis sollicitudin sollicitudin at at eros. Nunc vulputate tellus ut turpis finibus suscipit. Ut ac eleifend magna. Sed auctor elementum tempor. Nunc ultricies orci lacus, in consequat nisi pulvinar placerat. Cras tristique felis sit amet elit mattis rutrum. Sed eget felis purus.",
            ShortCharacters:"Oth physl fx lower end of r femur, subs for fx w routn heal"
        },
        {
            id: 3,
            Name:"Ema Dake",
            Email:"edake2@telegraph.co.uk",
            LongCharacters:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ornare metus, at feugiat tortor rutrum sed. Nam pharetra rutrum quam, quis fringilla eros tincidunt ac. Vivamus pulvinar et nisi id feugiat. Sed vitae hendrerit sem, eget mollis urna. Ut eu efficitur eros. Quisque non nisl ut nulla feugiat semper in id lectus. Nam auctor justo eget justo eleifend, id varius augue venenatis. Sed cursus nisi at est vehicula imperdiet. Duis vitae dolor et mi rutrum sagittis. Sed at ex in turpis sollicitudin sollicitudin at at eros. Nunc vulputate tellus ut turpis finibus suscipit. Ut ac eleifend magna. Sed auctor elementum tempor. Nunc ultricies orci lacus, in consequat nisi pulvinar placerat. Cras tristique felis sit amet elit mattis rutrum. Sed eget felis purus.",
            ShortCharacters:"Oth accident on gliding-type pedestrian conveyance, init"
        },
        {
            id: 4,
            Name:"Idalina Shoemark",
            Email:"ishoemark3@ed.gov",
            LongCharacters:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ornare metus, at feugiat tortor rutrum sed. Nam pharetra rutrum quam, quis fringilla eros tincidunt ac. Vivamus pulvinar et nisi id feugiat. Sed vitae hendrerit sem, eget mollis urna. Ut eu efficitur eros. Quisque non nisl ut nulla feugiat semper in id lectus. Nam auctor justo eget justo eleifend, id varius augue venenatis. Sed cursus nisi at est vehicula imperdiet. Duis vitae dolor et mi rutrum sagittis. Sed at ex in turpis sollicitudin sollicitudin at at eros. Nunc vulputate tellus ut turpis finibus suscipit. Ut ac eleifend magna. Sed auctor elementum tempor. Nunc ultricies orci lacus, in consequat nisi pulvinar placerat. Cras tristique felis sit amet elit mattis rutrum. Sed eget felis purus.",
            ShortCharacters:"Displ bicondylar fx l tibia, 7thF"
        },
        {
            id: 5,
            Name:"Pammy Berntssen",
            Email:"pberntssen4@histats.com",
            LongCharacters:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ornare metus, at feugiat tortor rutrum sed. Nam pharetra rutrum quam, quis fringilla eros tincidunt ac. Vivamus pulvinar et nisi id feugiat. Sed vitae hendrerit sem, eget mollis urna. Ut eu efficitur eros. Quisque non nisl ut nulla feugiat semper in id lectus. Nam auctor justo eget justo eleifend, id varius augue venenatis. Sed cursus nisi at est vehicula imperdiet. Duis vitae dolor et mi rutrum sagittis. Sed at ex in turpis sollicitudin sollicitudin at at eros. Nunc vulputate tellus ut turpis finibus suscipit. Ut ac eleifend magna. Sed auctor elementum tempor. Nunc ultricies orci lacus, in consequat nisi pulvinar placerat. Cras tristique felis sit amet elit mattis rutrum. Sed eget felis purus.",
            ShortCharacters:"Food in oth parts of respiratory tract causing other injury"
        }
    ]
}

//Scenario 1. Create new member just with name and email.
member_apriori.scenario_1.forEach((scenarioData) => {
    describe('Scenario 1. Create New Member just with name and email.', () => {
        beforeEach(()=>{
            cy.viewport(1920, 1080)
            cy.fixture('configuration').then((member_configuration)  => {
                cy.visit(member_configuration.URL_GHOST_ADMIN)
                cy.wait(3000)
            })
            cy.wait(7000)
        })
        it('Scenario 1.'+ scenarioData.id +'', ()=>{
            cy.fixture('configuration').then((member_configuration)  => {
                var email = member_configuration.USERNAME
                var password = member_configuration.PASSWORD
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
            cy.fixture('configuration').then((member_configuration)  => {
                cy.visit(member_configuration.URL_GHOST_ADMIN)
                cy.wait(3000)
            })
            cy.wait(7000)
        })
        it('Scenario 2.'+ scenarioData.id +'', ()=>{
            cy.fixture('configuration').then((member_configuration)  => {
                var email = member_configuration.USERNAME
                var password = member_configuration.PASSWORD
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