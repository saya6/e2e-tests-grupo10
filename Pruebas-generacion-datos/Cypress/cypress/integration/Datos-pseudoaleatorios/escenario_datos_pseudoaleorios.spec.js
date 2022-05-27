var data = [];
var i = 0;

describe('Escenarios datos pseudoaleatorios', () => {
  before(() => {

    cy.request("GET", "https://my.api.mockaroo.com/test_pseudo_aleatorio.json?key=309d1a50", {}).then((dataFromApi) => {
      data = dataFromApi.body;
    });

    cy.request("http://estudiantesmiso.space:8000/reset-db-4-45-0")
 })
  
  it('Crear post # 1', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
  it('Crear post # 2', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
  it('Crear post # 3', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
  it('Crear post # 4', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
  it('Crear post # 5', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
  it('Crear post # 6', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
  it('Crear post # 7', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
  it('Crear post # 8', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
  it('Crear post # 9', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
  it('Crear post # 10', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.wait(6000);;
      cy.visit(configuration.URL_GHOST_ADMIN)
      cy.wait(3000)

      var email = configuration.USERNAME
      var password = configuration.PASSWORD

      doLogin(cy, email, password);
      cy.wait(3000);

      enterPostOptions(cy);
      cy.wait(3000);

      let title = data[i++].title;
      
      writePost(cy, title);
      cy.wait(3000);

      publishPost(cy);
      cy.wait(5000);

      validatePost(cy);
      cy.wait(3000);
    })
   
  })
 
 
 
});

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



function publishPost(cy){
cy.get('div[class="gh-publishmenu ember-view"] > div').first().click();
cy.wait(2000)
cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click();
cy.wait(2000)
cy.get('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]').click();
}


function validatePost(cy){
cy.get('div[class="gh-editor-post-status"] > span > div').should('include.text', "Published");
}


