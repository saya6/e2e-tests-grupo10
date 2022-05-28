/// <reference types="cypress" />

var i = 0;
let image_file_test_1 = 'crear_post_con_exito/';
let image_file_test_2 = 'crear_post_sin_datos/';
let image_file_test_5 = 'ver_previo_de_post/';

describe('Escenarios', () => {
  before(() => {
    cy.request("http://estudiantesmiso.space:8000/reset-db-4-45-0");
    cy.viewport(1920, 1080);
  })
  
  it('Crear post', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      i = 1;
      cy.wait(6000)
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password, image_file_test_1);
      cy.wait(3000);

      enterPostOptions(cy, image_file_test_1);
      cy.wait(3000);

      let page = "PruebaTitulo" + getRandomInt(1, 10000);
      writePost(cy, page, image_file_test_1);
      cy.wait(3000);

      publishPost(cy, image_file_test_1);
      cy.wait(3000);

      validatePost(cy,configuration.URL_GHOST + page, page, image_file_test_1 );
      cy.wait(10000);
    })
   
  })
 
  it('Crear post con datos vacios', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      
      i = 1;
      cy.wait(6000)
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password, image_file_test_2);
      cy.wait(3000);

      enterPostOptions(cy, image_file_test_2);
      cy.wait(3000);

      let page = "PruebaTitulo" + getRandomInt(1, 10000);
      writePost(cy, page, image_file_test_2);
      cy.wait(3000);

      writePost(cy, "", image_file_test_2);
      cy.wait(3000);

      publishPost(cy, image_file_test_2);
      cy.wait(3000);

      validatePost(cy,configuration.URL_GHOST + page, "(Untitled)" , image_file_test_2);
      cy.wait(10000);
    })
   
  })

it('Ver el previo de un post', () => {
    
  cy.fixture('configuration').then((configuration)  => {
    
    i = 1;
    cy.wait(6000)
    cy.visit(configuration.URL_GHOST_ADMIN)
    cy.wait(3000)

    var email = configuration.USERNAME
    var password = configuration.PASSWORD

    doLogin(cy, email, password, image_file_test_5);
    cy.wait(3000);

    enterPostOptions(cy, image_file_test_5);
    cy.wait(3000);

    let page = "PruebaTitulo" + getRandomInt(1, 10000);
    writePost(cy, page, image_file_test_5);
    cy.wait(3000);

    seePreviewPost(cy, image_file_test_5);
    cy.wait(3000);

    validatePreviewPost(cy, image_file_test_5);

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

function doLogin(cy, email, password, file_image ){
  cy.screenshot(file_image + i++);
  cy.get('input[class="email ember-text-field gh-input ember-view"]').type(email)
  cy.get('input[class="password ember-text-field gh-input ember-view"]').type(password)
  cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
}

function enterPostOptions(cy, file_image ){
  cy.screenshot(file_image + i++);
  cy.get('#ember26').click();
  cy.wait(2000)
  cy.screenshot(file_image + i++);
  cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').click();
}

function writePost(cy, text, file_image ) {
  cy.screenshot(file_image + i++);
  let selector = 'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]';

  if(text === ''){
    cy.get(selector).clear();
  } else{
    cy.get(selector).type(text);
  }

  cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();
  cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();
  cy.screenshot(file_image + i++);
}

function deletePost(cy, file_image ) {
  cy.get('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();
  cy.wait(2000)
  cy.screenshot(file_image + i++);
  cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click();
  cy.wait(2000)
  cy.screenshot(file_image + i++);
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
}


function publishPost(cy, file_image ){
  cy.get('div[class="gh-publishmenu ember-view"] > div').first().click();
  cy.wait(2000)
  cy.screenshot(file_image + i++);
  cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
  cy.screenshot(file_image + i++);
  cy.wait(2000)
  cy.get('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]').click();
}

function seePreviewPost(cy, file_image ){
  cy.get('button[class="gh-btn gh-editor-preview-trigger"]').click();
  cy.wait(2000);
  cy.screenshot(file_image + i++);
}

function validatePost(cy, page, title, file_image ){
  cy.visit(page)
  cy.get('h1[class="article-title"]').should('have.text', title)
  cy.screenshot(file_image + i++);
}

function validatePreviewPost(cy, title, file_image ){
  cy.get('frame').should('not.be.undefined')
  cy.screenshot(file_image + i++);
}

function validateDeletedPost(cy, title, file_image  ){
  cy.get('ol > li').find('a:contains("' + title + '")').should('have.length', 0);
  cy.screenshot(file_image + i++);
}

