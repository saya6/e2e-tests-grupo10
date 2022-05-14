/// <reference types="cypress" />

describe('Escenarios', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })
  
  it('Crear tag valido', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(4000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(4000);
      cy.get("a[href='#/tags/']").click();
      cy.screenshot("crear-tag-valido/1.list-tags-view")
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.screenshot("crear-tag-valido/2.new-tag-view")
      cy.wait(4000);
      let tag = "PruebaTag" + getRandomInt(1, 10000);
      writeTag(cy, tag, 3, "crear-tag-valido");
      cy.screenshot("crear-tag-valido/4.check-write-tag-info")
      cy.wait(5000);
      
      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, tag);
      cy.screenshot("crear-tag-valido/5.validate-tag")
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
      cy.screenshot("crear-tag-invalido/1.list-tags-view")
      cy.wait(3000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.screenshot("crear-tag-invalido/2.new-tag-view")
      cy.wait(3000);

      let tag = '';
      writeTag(cy, tag, 3, "crear-tag-invalido");
      cy.wait(5000);
      
      cy.get("span > svg[class='retry_svg__retry-animated']").should('have.length', 1);
      cy.screenshot("crear-tag-invalido/4.check-write-tag-error")
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
      cy.screenshot("eliminar-tag/1.list-tags-view")
      cy.wait(3000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.screenshot("eliminar-tag/2.new-tag-view")
      cy.wait(3000);

      let tag = "PruebaTag" + getRandomInt(1, 10000);
      writeTag(cy, tag, 3, "eliminar-tag");
      cy.wait(5000);
      
      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, tag);
      cy.screenshot("eliminar-tag/4.validate-new-tag-view")

      cy.get('ol > li').find('a:contains("' + tag + '")').click();

      cy.get("button[class='gh-btn gh-btn-red gh-btn-icon']").click()
      cy.screenshot("eliminar-tag/5.delete-new-tag")
      cy.wait(1000);
      cy.get("button[class='gh-btn gh-btn-red gh-btn-icon ember-view']").click()
      cy.screenshot("eliminar-tag/6.confirm-delete-new-tag")
      cy.wait(4000);
      cy.get("a[href='#/tags/']").first().click();
      cy.wait(2000);
      cy.screenshot("eliminar-tag/7.validate-delete-new-tag")
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
      cy.screenshot("actualizar-tag-valido/1.list-tags-view")
      cy.wait(3000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.screenshot("actualizar-tag-valido/2.new-tag-view")
      cy.wait(3000);

      let tag = "PruebaTag" + getRandomInt(1, 10000);
      writeTag(cy, tag, 3, "actualizar-tag-valido");
      cy.wait(5000);
      
      cy.get("a[href='#/tags/']").first().click();
      cy.screenshot("actualizar-tag-valido/4.validate-new-tag-view")
      validateTag(cy, tag);

      cy.get('ol > li').find('a:contains("' + tag + '")').click();

      let tagActualizado = "PruebaTagActualizado" + getRandomInt(1, 10000);
      writeTag(cy, tagActualizado, 5, "actualizar-tag-valido");
      cy.wait(5000);
      cy.get("a[href='#/tags/']").first().click();
      cy.screenshot("actualizar-tag-valido/6.validate-updated-tag-view")
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
      cy.screenshot("actualizar-tag-invalido/1.list-tags-view")
      cy.wait(3000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.screenshot("actualizar-tag-invalido/2.new-tag-view")
      cy.wait(3000);

      let tag = "PruebaTag" + getRandomInt(1, 10000);
      writeTag(cy, tag, 3, "actualizar-tag-invalido");
      cy.wait(5000);
      
      cy.get("a[href='#/tags/']").first().click();
      cy.wait(300)
      cy.screenshot("actualizar-tag-invalido/4.validate-new-tag-view")
      validateTag(cy, tag);

      cy.get('ol > li').find('a:contains("' + tag + '")').click();
      cy.wait(3000)
      let tagActualizado = "";
      writeTag(cy, tagActualizado, 5, "actualizar-tag-invalido");
      cy.wait(5000);
      cy.get("span > svg[class='retry_svg__retry-animated']").should('have.length', 1);
      cy.screenshot("actualizar-tag-invalido/6.validate-updated-tag-view")
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
  cy.wait(1000)
  cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
}

function enterTagOptions(cy){
  cy.get("a[href='#/tags/']").click();
  cy.wait(2000)
}

function writeTag(cy, text, stepNumber, imageFolder) {
let selector = 'input[name="name"]';

if(text === ''){
  cy.get(selector).clear();
} else{
  cy.get(selector).type(text);
}
cy.wait(1000)
cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
cy.screenshot(imageFolder+ "/" + stepNumber + ".write tag info")
cy.wait(4000)
}

function validateTag(cy, tagName){
  cy.get('ol > li').find('a:contains("' + tagName + '")').should('have.length', 1);
  cy.wait(1000)
}

function validateDeletedTag(cy, title ){
cy.get('ol > li').find('a:contains("' + title + '")').should('have.length', 0);
cy.wait(1000)
}

