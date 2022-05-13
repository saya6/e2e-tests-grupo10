const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

// Member Steps 
When(' s', async function() {
    let element = await this.driver.$('#ember77');
    return await element.click();
})
When('I click members-new-member', async function() {
    let element = await this.driver.$('#ember49');
    return await element.click();
})
When('I click owner-new-member', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/button');
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
When('I click members-open-first', async function() {
    let element = await this.driver.$('/html/body/div/div/main/section/section/div/table/tbody/tr/a');
    return await element.click();
})
When('I click members-open-first-configButton', async function() {
    let element = await this.driver.$('/html/body/div/div/main/section/div/header/section/span/button');
    return await element.click();
})
When('I click members-open-first-configButton_delete', async function() {
    let element = await this.driver.$('/html/body/div/div/main/section/div/header/section/span/ul/li[2]/button');
    return await element.click();
})
When('I click members-open-first-configButton_delete_cancel', async function() {
    let element = await this.driver.$('/html/body/div[5]/div/div/div/div/div[2]/section/div[2]/button');
    return await element.click();
})
When('I click members-open-first-configButton_delete_delete', async function() {
    let element = await this.driver.$('/html/body/div[5]/div/div/div/div/div[2]/section/div[2]/button[2]');
    return await element.click();
})
When('I check the user {kraken-string} appears on the list', async function(userEmail) {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/div/table/tbody/tr/a/div/div/p").getText();
    expect(element).to.equal(userEmail)
});