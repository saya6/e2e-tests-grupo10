const data = require("./MOCK_DATA_TAGS.json");
var i = 0;

describe('Escenarios', () => {
  beforeEach(() => {
  })
  
  it("1. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("2. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("3. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("4. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });
  
  it("5. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });
  
  it("6. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });
  
  it("7. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });
  
  it("8. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });
  
  it("9. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });
  
  it("10. Crear tag", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(6000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let index = i++;
      let validTagName = data[index].name;
      let validTagSlug = data[index].slug;
      let validTagDescription = data[index].description;
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
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