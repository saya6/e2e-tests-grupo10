const { Given, When, Then } = require('@cucumber/cucumber');

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

// Member Steps 
When(' s', async function() {
    let element = await this.driver.$('#ember77');
    return await element.click();
})
When('I click members-new-member', async function() {
    let element = await this.driver.$('#ember49');
    return await element.click();
})
When('I enter new member name {kraken-string}', async function (email) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(email);
});
When('I enter new member email {kraken-string}', async function (email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
});
When('I click members-new-save', async function() {
    let element = await this.driver.$('/html/body/div/div/main/section/div/header/section/button');
    return await element.click();
})