const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

// Login Steps.
When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});
When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});
When('I click signin', async function() {
    let element = await this.driver.$('#ember11');
    return await element.click();
})