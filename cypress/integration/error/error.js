import { Given,When,Then } from "cypress-cucumber-preprocessor/steps"
const errorMessagesObj = require("../../fixtures/error_testData");
const errorPageObj = require("../../pages/error/error-page");
const homePageObj = require("../../pages/home/home_objects");
const homeData = require("../../fixtures/home_testData");

// EQ-UI-01 - get title for Form page
Given ("I go to Form page", ()=> {
    const url= Cypress.config().baseUrl
    cy.visit(url)  
});

Then ("I should see title 'UI Testing Site'", ()=> {
  
    cy.title().should('eq', homeData.expectedHomeTitle)

} )


    //REQ-UI-07:

Given ("I am on Home page", ()=> {

    const url= Cypress.config().baseUrl
    cy.visit(url)  

    cy.get(homePageObj.home_Tab).should("be.visible")   
});

When ("I click on error button", ()=> {
    cy.get(errorPageObj.errorTab).should("be.visible")
    cy.get(errorPageObj.errorTab).click()

});

Then ("I should get a 404 HTTP response code", ()=> {
    cy.get(errorPageObj.errorText).should("be.visible")
    cy.get("h1").should("have.text",errorMessagesObj.errorPageError)
    cy.request('http://localhost:8082/error.html')

});