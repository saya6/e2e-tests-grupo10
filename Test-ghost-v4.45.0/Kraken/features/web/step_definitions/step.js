const { Given, When, Then } = require('@cucumber/cucumber');
var {expect} = require('chai');

When('I click next', async function() {
    let element = await this.driver.$('#ember11');
    return await element.click();
})

When('I go to tags section', async function() {
    let element = await this.driver.$('#ember29');
    return await element.click();
})

When('I click on "New Tag" button', async function() {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
})

When('I enter the new tag name {string}', async function (tagName) {
    let element = await this.driver.$('input[name="name"]');
    return await element.setValue(tagName);
});

When('I enter the new tag slug {string}', async function (tagSlug) {
    let element = await this.driver.$('input[name="slug"]');
    return await element.setValue(tagSlug);
});

When('I enter the new tag description {string}', async function (tagDescription) {
    let element = await this.driver.$('textarea[name="description"]');
    return await element.setValue(tagDescription);
});

When('I click on "Save" button', async function() {
    let element = await this.driver.$("//button[contains(@class, 'gh-btn-primary')]");
    return await element.click();
});

When('I check the created tag {string} appears on the list', async function(tagName) {
    let element = await this.driver.$("//ol/li[last()]/a[1]/h3").getText();
    expect(element).to.include(tagName);
});

When('I click on the created tag {string}', async function(lastTag) {
    let element = await this.driver.$("//ol/li[last()]/a[1]");
    return await element.click();
});

When('I click on the "Delete" button', async function() {
    let element = await this.driver.$("//button[contains(@class, 'gh-btn-red')]");
    return await element.click();
});

When('I click on the confirm "Delete" button', async function() {
    let element = await this.driver.$("//button[contains(@class, 'gh-btn-red') and contains(@class, 'ember')]");
    return await element.click();
});

When('I check the error message {string} is displayed', async function(errMsg) {
    let element = await this.driver.$("//span[@class='error']//p[1]").getText();
    expect(element).to.include(errMsg);
});

When('I take a screenshot for tags module with name {kraken-string} on folder {kraken-string}', async function(imageName, folderName) {
    await this.driver.saveScreenshot('images/tags/'+ folderName  +'/'+ imageName +'.png');
});
