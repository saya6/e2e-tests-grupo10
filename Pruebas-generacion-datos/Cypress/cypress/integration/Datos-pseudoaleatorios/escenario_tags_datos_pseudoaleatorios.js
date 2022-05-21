var data = [];
var i = 0;

describe("Escenarios", () => {
  before(() => {
    cy.request(
      "GET",
      "https://my.api.mockaroo.com/tags_schema.json?key=42f7ab10",
      {}
    ).then((dataFromApi) => {
      data = dataFromApi.body;
    });
  });

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
  if (max < 0) {
    max = 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function doLogin(cy, email, password) {
  cy.get('input[class="email ember-text-field gh-input ember-view"]').type(
    email
  );
  cy.get('input[class="password ember-text-field gh-input ember-view"]').type(
    password
  );
  cy.wait(1000);
  cy.get(
    'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]'
  ).click();
}

function enterTagOptions(cy) {
  cy.get("a[href='#/tags/']").click();
  cy.wait(2000);
}

function writeTag(cy, name, slug, description) {
  if (name != "") {
    writeTagName(cy, name);
  }
  cy.wait(1000);
  if (slug != "") {
    writeTagSlug(cy, slug);
  }
  cy.wait(1000);
  if (description != "") {
    writeTagDescription(cy, description);
  }
  cy.wait(1000);
  cy.get(
    'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
  ).click();
  cy.wait(4000);
}

function writeTagName(cy, text) {
  let selector = 'input[name="name"]';
  cy.get(selector).type(text);
}

function writeTagSlug(cy, text) {
  let selector = 'input[name="slug"]';
  cy.get(selector).clear().type(text, {force: true});
}

function writeTagDescription(cy, text) {
  let selector = 'textarea[name="description"]';
  cy.get(selector).type(text);
}

function validateTag(cy, tagName) {
  cy.get("ol > li")
    .find('a:contains("' + tagName + '")')
    .should("have.length", 1);
  cy.wait(1000);
}

function validateDeletedTag(cy, title) {
  cy.get("ol > li")
    .find('a:contains("' + title + '")')
    .should("have.length", 0);
  cy.wait(1000);
}