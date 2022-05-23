const LONG_WAIT = 5000;
const MEDIUM_WAIT = 4000;
const SHORT_WAIT = 2000;
const data = require("./MOCK_DATA_PAGES.json");
var test = 0;

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

    it('Pages 1.1: Add title only', () => {
        let title = data[test].title
        test++;

        newPage(cy)
        addTitle(cy, title)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })
    
    it('Pages 1.2: Add content only', () => {
        let content1 = data[test].content1
        test++;

        newPage(cy)
        addRegularSecction(cy, content1)
        previewPage(cy)
        checkIfExists(cy, 'h1', '(Untitled)')
        checkIfExists(cy, 'p', content1)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 1.3: Add title and content', () => {
        let title = data[test].title
        let content1 = data[test].content1
        test++;

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

    it('Pages 1.4: Add title and Markdown', () => {
        let title = data[test].title
        let info = data[test].info
        test++;

        newPage(cy)
        addTitle(cy, title)
        addMarkdown(cy, "### " + info)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'h3', info)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 1.5: Add title and html', () => {
        let title = data[test].title
        let info = data[test].info
        test++;

        newPage(cy)
        addTitle(cy, title)
        addHTML(cy, "<h3>" + info + "</h3>")
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'h3', info)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 1.6: Add title and divider', () => {
        let title = data[test].title
        test++;

        newPage(cy)
        addTitle(cy, title)
        addDivider(cy)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'hr')
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 1.7: Add title and bookmark', () => {
        let title = data[test].title
        let url = data[test].url
        test++;

        newPage(cy)
        addTitle(cy, title)
        addBookmark(cy, url)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfLinkExists(cy, url)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 1.8: Add title and button', () => {
        let title = data[test].title
        let info = data[test].info
        let url = data[test].url
        test++;

        newPage(cy)
        addTitle(cy, title)
        addButton(cy, info, url)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'a', info)
        checkIfLinkExists(cy, url)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 1.9: Add title and callout', () => {
        let title = data[test].title
        let info = data[test].info
        test++;

        newPage(cy)
        addTitle(cy, title)
        addCallout(cy, info)
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'div', info)
        closePreview(cy)
        deletePage(cy)
        cy.wait(MEDIUM_WAIT)
    })

    it('Pages 1.10: Add title and header', () => {
        let title = data[test].title
        let info = data[test].info
        test++;

        newPage(cy)
        addTitle(cy, title)
        addHeader(cy, info, '')
        previewPage(cy)
        checkIfExists(cy, 'h1', title)
        checkIfExists(cy, 'h2', info)
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

