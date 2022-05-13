const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert') 
//const expect = require('chai').expect;

When('I click post option', async function() {
    let element = await this.driver.$('#ember26');
    return await element.click();
})

When('I click new post', async function() {
    let element = await this.driver.$('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]');
    return await element.click();
})

When('I enter post title {kraken-string}', async function (text) {
    let element = await this.driver.$('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]');
    return await element.setValue(text);
});

When('I enter post body {kraken-string}', async function (text) {
    let element = await this.driver.$('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"] > p');
    return await element.setValue(text);
});

When('I click configuration button', async function() {
    let element = await this.driver.$('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]');
    return await element.click();
})

When('I click publish', async function() {
    let element = await this.driver.$('div[class="gh-publishmenu ember-view"] > div');
    return await element.click();
})

When('I click publish button', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]');
    return await element.click();
})

When('I click confirmation publish button', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]');
    return await element.click();
})

When('I go back to list posts', async function() {
    let element = await this.driver.$('a[class="ember-view gh-editor-back-button"]');
    return await element.click();
})

Then('I go to see my post in list {kraken-string}', async function(title) {
    let element = await this.driver.$$('h3='+title+'');
    assert.ok(element);
    
})

Then('I go to see my post', async function() {
    let element = await this.driver.$('span[class="gh-notification-actions"] > a');
    return await element.click();
    
})

Then('I switch tab to see my post {kraken-string} {kraken-string}', async function(page, title) {
    return await this.driver.url(page + title); 
})


// segundo escenario
When('I clean post title', async function () {
    let element = await this.driver.$('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]');
    return await element.setValue("");
});


// tercer escanerio

When('I delete my post', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    return await element.click();
});

When('I confirm to delete my post', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
});

//quinto escenario
When('I see a preview of my post', async function () {
    let element = await this.driver.$('button[class="gh-btn gh-editor-preview-trigger"]');
     return await element.click();
});

Then('I validate my preview post', async function () {
    let frameElement = await this.driver.$$('div[class="gh-post-preview-browser-container"]');
    
    assert.ok(frameElement);

});
