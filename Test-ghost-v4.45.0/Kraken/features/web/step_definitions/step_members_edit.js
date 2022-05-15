const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I click on button {kraken-string}', async function (name) {
    let element = await this.driver.$('button*=' + name);
    return await element.click();
});

When('I click on button {kraken-string} on modal', async function (name) {
    let element = await this.driver.$('.modal-content').$('button*=' + name);
    return await element.click();
});


When('I click on menu {kraken-string}', async function (name) {
    let element = await this.driver.$('a*=' + name);
    return await element.click();
});

When('I click on option {kraken-string}', async function (name) {
    let element = await this.driver.$('a*=' + name);
    return await element.click();
});

When('I enter {kraken-string} on {kraken-string} field', async function (value, field){
    let element = await this.driver.$('input[name="' + field + '"]')
    return await element.setValue(value);
});

When('I clear the {kraken-string} field', async function (field){
    let element = await this.driver.$('input[name="' + field + '"]')
    return await element.setValue("");
});""

When('I enter {kraken-string} {int} times on {kraken-string} textArea', async function (value, times, field){
    let element = await this.driver.$('textArea[name="' + field + '"]')
    return await element.setValue(value.repeat(times));
});

When('I enter {kraken-string} on {kraken-string} textArea', async function (value, field){
    let element = await this.driver.$('textArea[name="' + field + '"]')
    return await element.setValue(value);
});

When('I click on member {kraken-string}', async function (member){
    let element = await this.driver.$('a*=' + member)
    return await element.click()
});

When('I check if member {kraken-string} exists', async function(member){
    let elements = await this.driver.$$('a*=' + member)
    expect(elements.length).to.equal(1)
});

When('I check if member {kraken-string} doesn\'t exists', async function(member){
    let elements = await this.driver.$$('a*=' + member)
    expect(elements.length).to.equal(0)
});

When('I check the error message {kraken-string} on {kraken-string} field', async function(error_msg, field) {
    let element = await this.driver.$('input[name="' + field + '"]')
    let error = await element.parentElement().$('p').getText()
    expect(error).to.equal(error_msg)
});

When('I check the error message {kraken-string} on {kraken-string} textArea', async function(error_msg, field) {
    let element = await this.driver.$('textArea[name="' + field + '"]')
    let error = await element.parentElement().$('p').getText()
    expect(error).to.equal(error_msg)
});

When('I check the error message {kraken-string}', async function(error_msg) {
    let elements = await this.driver.$$('article*=' + error_msg)
    expect(elements.length).to.equal(1)
});

When('I save screenshot {kraken-string} on {kraken-string}', async function(imageName, folderName) {
    await this.driver.saveScreenshot('images/'+ folderName + "/" + imageName +'.png');
});