/// <reference types="cypress" />

describe('Escenarios', () => {
  beforeEach(() => {
  })
  
  it('Crear tag valido', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(3000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(3000);

      let tag = "PruebaTag" + getRandomInt(1, 10000);
      writeTag(cy, tag);
      cy.wait(5000);
      
      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, tag);
      cy.wait(3000);
    })
   
  })

  it('Crear tag no valido(vacio)', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(3000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(3000);

      let tag = '';
      writeTag(cy, tag);
      cy.wait(5000);
      
      cy.get("span > svg[class='retry_svg__retry-animated']").should('have.length', 1);
      cy.wait(3000);
    })
   
  })
 
  it('Eliminar tag valido', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(3000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(3000);

      let tag = "PruebaTag" + getRandomInt(1, 10000);
      writeTag(cy, tag);
      cy.wait(5000);
      
      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, tag);

      cy.get('ol > li').find('a:contains("' + tag + '")').click();

      cy.get("button[class='gh-btn gh-btn-red gh-btn-icon']").click()
      cy.wait(1000);
      cy.get("button[class='gh-btn gh-btn-red gh-btn-icon ember-view']").click()
      cy.wait(4000);
      cy.get("a[href='#/tags/']").first().click();
      cy.wait(2000);
      validateDeletedTag(cy, tag)
      cy.wait(3000);
    })
   
  })

  it('Actualizar tag valido', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(3000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(3000);

      let tag = "PruebaTag" + getRandomInt(1, 10000);
      writeTag(cy, tag);
      cy.wait(5000);
      
      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, tag);

      cy.get('ol > li').find('a:contains("' + tag + '")').click();

      let tagActualizado = "PruebaTagActualizado" + getRandomInt(1, 10000);
      writeTag(cy, tagActualizado);
      cy.wait(5000);
      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, tagActualizado);
      cy.wait(3000);
    })
   
  })

  it('Actualizar tag no valido(vacio)', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(3000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(3000);

      let tag = "PruebaTag" + getRandomInt(1, 10000);
      writeTag(cy, tag);
      cy.wait(5000);
      
      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, tag);

      cy.get('ol > li').find('a:contains("' + tag + '")').click();

      let tagActualizado = "";
      writeTag(cy, tagActualizado);
      cy.wait(5000);
      cy.get("span > svg[class='retry_svg__retry-animated']").should('have.length', 1);
      cy.wait(1000);
    })
   
  })
});

function getRandomInt(min, max) {
  if(max < 0){
    max = 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function doLogin(cy, email, password ){
  cy.get('input[class="email ember-text-field gh-input ember-view"]').type(email)
  cy.get('input[class="password ember-text-field gh-input ember-view"]').type(password)
  cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
}

function enterTagOptions(cy){
  cy.get("a[href='#/tags/']").click();
  cy.wait(2000)
}

function writeTag(cy, text) {
let selector = 'input[name="name"]';

if(text === ''){
  cy.get(selector).clear();
} else{
  cy.get(selector).type(text);
}

cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
}

function validateTag(cy, tagName){
  cy.get('ol > li').find('a:contains("' + tagName + '")').should('have.length', 1);
}

function validateDeletedTag(cy, title ){
cy.get('ol > li').find('a:contains("' + title + '")').should('have.length', 0);

}

