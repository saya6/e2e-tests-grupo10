describe("Escenarios", () => {
  beforeEach(() => {});

  it("1. Crear tag valido - frontera inicial + 1 -  todos los campos", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(4000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let validTagName = makeFooString(1);
      let validTagSlug = makeFooString(1);
      let validTagDescription = makeFooString(1);
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(6000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("2. Crear tag valido - antes de frontera - todos los campos", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(2000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let validTagName = makeFooString(getTagLimits().name - 1);
      let validTagSlug = ""
      let validTagDescription = makeFooString(getTagLimits().description - 1);
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(5000);

      cy.get("a[href='#/tags/']").last().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("3. Crear tag valido - en frontera - todos los campos", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(4000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(2000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(2000);
      let validTagName = makeFooString(getTagLimits().name);
      let validTagSlug = "";
      let validTagDescription = makeFooString(getTagLimits().description);
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(7000);

      cy.get("a[href='#/tags/']").last().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("4. Crear tag invalido - en frontera + 1 - todos los campos", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(4000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let validTagName = makeFooString(getTagLimits().name + 1);
      let validTagSlug = "";
      let validTagDescription = makeFooString(getTagLimits().description + 1);
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(5000);

      validateErrorDescription(cy)
      cy.wait(3000);
    });
  });

  it("5. Crear tag valido - frontera final nombre - frontera inicial slug, description + 1", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(4000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let validTagName = makeFooString(getTagLimits().name);
      let validTagSlug = makeFooString(1);
      let validTagDescription = makeFooString(1);
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(5000);

      cy.get("a[href='#/tags/']").first().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("6. Crear tag valido - frontera final nombre, slug - frontera inicial description", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(4000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let validTagName = makeFooString(getTagLimits().name);
      let validTagSlug = makeFooString(getTagLimits().slug);
      let validTagDescription = makeFooString(1);
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(5000);

      cy.get("a[href='#/tags/']").last().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("7. Crear tag valido - frontera final description, slug - frontera inicial nombre", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(4000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let validTagName = makeFooString(1);
      let validTagSlug = makeFooString(getTagLimits().slug);
      let validTagDescription = makeFooString(getTagLimits().description);
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(5000);

      cy.get("a[href='#/tags/']").last().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("8. Crear tag valido - frontera final nombre, description - frontera inicial slug", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(4000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let validTagName = makeFooString(getTagLimits().name);
      let validTagSlug = makeFooString(1);
      let validTagDescription = makeFooString(getTagLimits().description);
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(5000);

      cy.get("a[href='#/tags/']").last().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });

  it("9. Crear tag invalido - antes de frontera inicial - todos los campos", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(4000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(4000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(4000);
      let validTagName = "";
      let validTagSlug = "";
      let validTagDescription = "";
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(5000);
      validateCreateDescription(cy)
      cy.wait(3000);
    });
  });


  it("10. Crear tag valido - en rango valido - todos los campos", () => {
    cy.fixture("configuration").then((configuration) => {
      cy.visit(configuration.URL_GHOST_ADMIN);
      cy.wait(4000);

      var email = configuration.USERNAME;
      var password = configuration.PASSWORD;

      doLogin(cy, email, password);
      cy.wait(6000);
      cy.get("a[href='#/tags/']").click();
      cy.wait(2000);
      cy.get('a[href="#/tags/new/"]').click();
      cy.wait(2000);
      let validTagName = makeFooString(100);
      let validTagSlug = makeFooString(100);
      let validTagDescription = makeFooString(100);
      writeTag(cy, validTagName, validTagSlug, validTagDescription);
      cy.wait(7000);

      cy.get("a[href='#/tags/']").last().click();
      validateTag(cy, validTagName);
      cy.wait(3000);
    });
  });
});

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

function validateErrorDescription(cy) {
  cy.get('p[class="response"]').last().contains('Description cannot be longer than 500 characters.')
  cy.wait(1000);
}


function validateCreateDescription(cy) {
  cy.get('p[class="response"]').first().contains('You must specify a name for the tag.')
  cy.wait(1000);
}

function makeFooString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getTagLimits() {
  return {
    name: 191,
    slug: 191,
    description: 500, // the real limit on the database is 123456789
  };
}
