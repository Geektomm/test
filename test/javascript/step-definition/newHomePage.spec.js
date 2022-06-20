const { Given, When, Then } = require('@cucumber/cucumber');
const newhomeobject = require('../pageobjects/NewHome.page');


Given(/^User is on Homepage$/,()=>{
    var title = browser.getTitle();
    //console.log(title);
    newhomeobject.open(); 
    //homeobject.adminLogin();
    //homeobject.verifyCurrentPage();
});

When(/^User select first item to cart$/,()=>{
    homeobject.addFirstItemToCart();
});

Then(/^User moves to home page$/,()=>{
    homeobject.verifyHomePage();
})