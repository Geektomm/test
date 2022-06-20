const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const catalogobject = require('../pageobjects/Catalog.page');
const checkoutobject = require('../pageobjects/Checkout.page');


When(/^User selects to create a new account$/,()=>{
    checkoutobject.clickContinueButtonOnFirstStep();
    browser.pause(1000);
});

/*When(/^User fills personal details$/,()=>{
    checkoutobject.fillPersonalDetails();
    browser.pause(1000);
});*/

When(/^User enters already used email$/,()=>{
    checkoutobject.fillEmailFieldWithAlreadyUsedEmail();
});

When(/^User enter not valid email$/,()=>{
    checkoutobject.fillEmailFieldNotValidEmail();
});

Then(/^message about existing email appears$/,()=>{
    checkoutobject.verifyEmailAlreadyUsedMessage();
});

Then(/^message about not valid email appears$/,()=>{
    checkoutobject.verifyNotValidEmailMessage();
});
