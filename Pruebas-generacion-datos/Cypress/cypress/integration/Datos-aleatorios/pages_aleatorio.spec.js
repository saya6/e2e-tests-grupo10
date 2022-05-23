const LONG_WAIT = 5000;
const MEDIUM_WAIT = 4000;
const SHORT_WAIT = 2000;
const {faker} = require('@faker-js/faker');

describe('Testing pages options', () => {
    
    beforeEach(() => {
        cy.fixture('configuration').then((configuration)  => {
            cy.visit(configuration.URL_GHOST_ADMIN)
            cy.wait(LONG_WAIT)

            var email = configuration.USERNAME
            var password = configuration.PASSWORD
            doLogin(cy, email, password)
        })
    })

    it('Pages 2.1: Add valid long title', () => {
        let title = faker.lorem.words(85).substring(0, 254) + 'a'

        newPage(cy)
        addTitle(cy, title)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 2.2: Add invalid long title', () => {
        let title = faker.lorem.words(85).substring(0, 256)

        newPage(cy)
        addTitle(cy, title)
        checkGeneralError(cy, 'Saving failed: Title cannot be longer than 255 characters.')
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })
    
    it('Pages 2.3: Add title and long content', () => {
        let title = faker.lorem.words(Math.ceil(Math.random()*5))
        let content1 = faker.lorem.paragraph(50)

        newPage(cy)
        addTitle(cy, title)
        addRegularSecction(cy, content1)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'p', content1)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 2.4: Add title and multiple contents', () => {
        let title = faker.lorem.words(Math.ceil(Math.random()*5))
        let contents = faker.lorem.paragraphs(25, '|').split("|")

        newPage(cy)
        addTitle(cy, title)
        for(let content of contents){
            addRegularSecction(cy, content)
        }
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        for(let content of contents){
            checkIfExists(cy, 'p', content)
        }
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })
    
    it('Pages 2.5: Add title, contet and long button', () => {
        let title = faker.lorem.words(Math.ceil(Math.random()*5))
        let content1 = faker.lorem.words(Math.ceil(Math.random()*20))
        let info = faker.lorem.words(50)
        let url = 'https://www.google.com/search?q=' + faker.name.firstName()

        newPage(cy)
        addTitle(cy, title)
        addRegularSecction(cy, content1)
        addButton(cy, info, url)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'p', content1)
        checkIfExists(cy, 'a', info)
        checkIfLinkExists(cy, url)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 2.6: Add title, contet and button whitout text', () => {
        let title = faker.lorem.words(Math.ceil(Math.random()*5))
        let content1 = faker.lorem.words(Math.ceil(Math.random()*20))
        let url = 'https://www.google.com/search?q=' + faker.name.firstName()

        newPage(cy)
        addTitle(cy, title)
        addRegularSecction(cy, content1)
        addButton(cy, '', url)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'p', content1)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 2.7: Add title, contet and button whitout url', () => {
        let title = faker.lorem.words(Math.ceil(Math.random()*5))
        let content1 = faker.lorem.words(Math.ceil(Math.random()*20))
        let info = faker.lorem.words(Math.ceil(Math.random()*3))

        newPage(cy)
        addTitle(cy, title)
        addRegularSecction(cy, content1)
        addButton(cy, info, '')
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'p', content1)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 2.8: Add title, content and long callout', () => {
        let title = faker.lorem.words(Math.ceil(Math.random()*5))
        let content1 = faker.lorem.words(Math.ceil(Math.random()*20))
        let info = faker.lorem.words(50)

        newPage(cy)
        addTitle(cy, title)
        addRegularSecction(cy, content1)
        addCallout(cy, info)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'p', content1)
        checkIfExists(cy, 'div', info)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 2.9: Add title, content and long header', () => {
        let title = faker.lorem.words(Math.ceil(Math.random()*5))
        let content1 = faker.lorem.words(Math.ceil(Math.random()*20))
        let info = faker.lorem.words(50)

        newPage(cy)
        addTitle(cy, title)
        addRegularSecction(cy, content1)
        addHeader(cy, info, '')
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'p', content1)
        checkIfExists(cy, 'h2', info)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })
    
    it('Pages 2.10: Add multiple long elements', () => {
        let title = faker.lorem.words(Math.ceil(Math.random()*5))
        let content1 = faker.lorem.words(Math.ceil(Math.random()*25) + 25)
        let content2 = faker.lorem.words(Math.ceil(Math.random()*25) + 25)
        let headerInfo = faker.lorem.words(50)
        let calloutInfo = faker.lorem.words(50)
        let buttonInfo = faker.lorem.words(50)
        let url = 'https://www.google.com/search?q=' + faker.name.firstName()
        
        newPage(cy)
        addTitle(cy, title)
        addRegularSecction(cy, content1)
        addHeader(cy, headerInfo, "")
        addDivider(cy)
        addRegularSecction(cy, content2)
        addCallout(cy, calloutInfo)
        addButton(cy, buttonInfo, url)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'p', content1)
        checkIfExists(cy, 'h2', headerInfo)
        checkIfExists(cy, 'hr')
        checkIfExists(cy, 'p', content2)
        checkIfExists(cy, 'div', calloutInfo)
        checkIfExists(cy, 'a', buttonInfo)
        checkIfLinkExists(cy, url)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

})

function doLogin(cy, email, password ){
    cy.get('input[name="identification"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button:contains("Sign in")').click()
    cy.wait(MEDIUM_WAIT)
}

function newPage(cy) {
    clickOn(cy, 'a', 'Pages')
    clickOn(cy, 'a', 'New page')
}

function addTitle(cy, title) {
    fillField(cy, 'textarea', 'Page title', title, 'placeholder')
    cy.get('div[data-placeholder="Begin writing your page..."]').find('p').last().click({force:true})
}

function addRegularSecction(cy, content) {
    cy.get('div[data-placeholder="Begin writing your page..."]').type(content +'\n', { force: true })
    cy.wait(SHORT_WAIT)
}

function addDivider(cy) {
    addElement(cy, 'Divider')
}

function addHeader(cy, header, subheader) {
    addElement(cy, 'Header')
    if (header){
        cy.get('div[data-placeholder="Enter heading text"]').type(header)
        cy.wait(MEDIUM_WAIT)
    }
    if (subheader){
        cy.get('div[data-placeholder="Enter subheading text"]').type(subheader)
        cy.wait(MEDIUM_WAIT)
    }
}

function addCallout(cy, content) {
    addElement(cy, 'Callout')
    if (content){
        cy.get('div[data-placeholder="Callout text..."]').type(content, { force: true })
        cy.wait(SHORT_WAIT)
    }
}

function addBookmark(cy, url) {
    addElement(cy, 'Bookmark')
    if (url){
        cy.get('input[placeholder="Paste URL to add bookmark content..."]').type(url, { force: true })
        cy.get('div[data-placeholder="Begin writing your page..."]').find('p').last().click({force: true})
        cy.wait(MEDIUM_WAIT)
    }
}

function addButton(cy, text, url) {
    addElement(cy, 'Button')
    if (text) {
        cy.get('input[name="button-text"]').type(text, { force: true })
    }
    if(url) {
        cy.get('input[name="selectSearchTerm"]').type(url, { force: true })
    }
    cy.get('div[data-placeholder="Begin writing your page..."]').find('p').last().click({force:true})
}

function addMarkdown(cy, content){
    addElement(cy, 'Markdown')
    if (content) {
        cy.get('div.CodeMirror-lines').type(content)
    }
}

function addHTML(cy, content){
    addElement(cy, 'HTML')
    if (content) {
        cy.get('div.CodeMirror-lines').type(content)
    }
}

function addElement(cy, element){
    cy.get('div[data-placeholder="Begin writing your page..."]').find('p').last().click({force: true})
    cy.wait(SHORT_WAIT)
    cy.get('button[aria-label="Add a card"]').click() 
    cy.wait(MEDIUM_WAIT)
    cy.get('div[title="'+element+'"]').click() 
    cy.wait(MEDIUM_WAIT)
}

function savePage(cy) {
    clickOn(cy, 'span', 'Publish')
    clickOn(cy, 'button', 'Publish')
    cy.wait(MEDIUM_WAIT)
}

function previewPage(cy) {
    clickOn(cy, 'span', 'Preview')
    cy.wait(LONG_WAIT)
}

function closePreview(cy) {
    clickOn(cy, 'span', 'Back')
}

function checkIfExists(cy, element, content='') {
    if (content) {
        cy.get('iframe').its('0.contentDocument.body').then(cy.wrap).find(
            element + ':contains("' + content + '")').should('exist')
    } else {
        cy.get('iframe').its('0.contentDocument.body').then(cy.wrap).find(
            element).should('exist')
    }
}

function checkIfLinkExists(cy, url) {
    cy.get('iframe').its('0.contentDocument.body').then(cy.wrap).find(
        'a[href="'+url+'"]').should('exist')
}


function deletePage(cy) {
    cy.get('button[title="Settings"]').click()
    cy.wait(SHORT_WAIT)
    clickOn(cy, 'span', 'Delete')
    clickOnInModal(cy, 'button', 'Delete')

}

function clickOn(cy, type, name) {
    cy.get(type + ':contains("' + name + '")').first().click(); 
    cy.wait(MEDIUM_WAIT)
}

function clickOnInModal(cy, type, name){
    cy.get('.modal-content').find(type+':contains("' + name + '")').click()
    cy.wait(MEDIUM_WAIT)
}

function fillField(cy, type, name, value, element='name'){
    cy.get(type + '[' + element + '="' + name + '"]').clear( { force: true })
    if(value) {
        cy.get(type + '[' + element + '="' + name + '"]').type(value, { force: true })
    }
    cy.wait(SHORT_WAIT)
}

function checkGeneralError(cy, errorMsg) {
    cy.get('article:contains("' + errorMsg +'")').should('have.length', 1)
}
