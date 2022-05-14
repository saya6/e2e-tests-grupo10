const { Given, When, Then, Before } = require('@cucumber/cucumber');
const expect = require('chai').expect;

var i = 0;
let name = ""

Before((scenario)=>{
    name = scenario.gherkinDocument.feature.name.replace(/ /g, "_");
    i = 1;
});

// Login Steps.
When('I enter email {kraken-string}', async function (email) {
    await this.driver.saveScreenshot("images/post/"+name+"/"+ i++ +".png");
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});
When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});
When('I click signin', async function() {
    let element = await this.driver.$('#ember12');
    return await element.click();
})