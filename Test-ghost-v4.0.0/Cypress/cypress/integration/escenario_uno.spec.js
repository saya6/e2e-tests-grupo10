/// <reference types="cypress" />

describe('Escenarios', () => {
  beforeEach(() => {
  })
  
  it('Crear post', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let page = "PruebaTitulo" + getRandomInt(1, 10000);
      writePost(cy, page);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(3000);

      validatePost(cy,configuration.URL_GHOST + page, page );
      cy.wait(10000);
    })
   
  })
 
  it('Crear post con datos vacios', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let page = "PruebaTitulo" + getRandomInt(1, 10000);
      writePost(cy, page);
      cy.wait(3000);

      writePost(cy, "");
      cy.wait(3000);

      publishPost(cy);
      cy.wait(3000);

      validatePost(cy,configuration.URL_GHOST + page, "(Untitled)" );
      cy.wait(10000);
    })
   
  })

  it('Eliminar un post publicado', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let page = "PruebaTitulo" + getRandomInt(1, 10000);
      writePost(cy, page);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(3000);

      deletePost(cy);
      cy.wait(3000);

      validateDeletedPost(cy, page);
      cy.wait(10000);
    });
   
  });



it('Eliminar un post no publicado', () => {
    
  cy.fixture('configuration').then((configuration)  => {
    cy.visit(configuration.URL_GHOST_ADMIN)
    cy.wait(3000)

    var email = configuration.USERNAME
    var password = configuration.PASSWORD

    doLogin(cy, email, password);
    cy.wait(3000);

    enterPostOptions(cy);
    cy.wait(3000);

    let page = "PruebaTitulo" + getRandomInt(1, 10000);
    writePost(cy, page);
    cy.wait(5000);

    deletePost(cy);
    cy.wait(3000);

    validateDeletedPost(cy, page);
    cy.wait(10000);
  });
 
});


it('Ver el previo de un post', () => {
    
  cy.fixture('configuration').then((configuration)  => {
    cy.visit(configuration.URL_GHOST_ADMIN)
    cy.wait(3000)

    var email = configuration.USERNAME
    var password = configuration.PASSWORD

    doLogin(cy, email, password);
    cy.wait(3000);

    enterPostOptions(cy);
    cy.wait(3000);

    let page = "PruebaTitulo" + getRandomInt(1, 10000);
    writePost(cy, page);
    cy.wait(3000);

    seePreviewPost(cy);
    cy.wait(3000);

    validatePreviewPost(cy);

  });


  });
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

function enterPostOptions(cy){
  cy.get('#ember26').click();
  cy.wait(2000)
  cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').click();
}

function writePost(cy, text) {
let selector = 'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]';

if(text === ''){
  cy.get(selector).clear();
} else{
  cy.get(selector).type(text);
}

cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();
cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();
}

function deletePost(cy) {
cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();
cy.wait(2000)
cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click();
cy.wait(2000)
cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();

}


function publishPost(cy){
cy.get('div[class="gh-publishmenu ember-view"] > div').first().click();
cy.wait(2000)
cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
cy.wait(2000)
cy.get('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]').click();
}

function seePreviewPost(cy){
cy.get('button[class="gh-btn gh-editor-preview-trigger"]').click();
cy.wait(2000);
}

function validatePost(cy, page, title){
cy.visit(page)
cy.get('h1[class="article-title"]').should('have.text', title)
}

function validatePreviewPost(cy, title){
  cy.get('frame').should('not.be.undefined')
}

function validateDeletedPost(cy, title ){
cy.get('ol > li').find('a:contains("' + title + '")').should('have.length', 0);

}

