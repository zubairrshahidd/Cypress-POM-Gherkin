import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps"

const formData = require("../../fixtures/form_testData");
const formPageObj = require("../../pages/form/form_objects");
const homeData = require("../../fixtures/home_testData");

// const form = "#form"
// const formTabActive = ".active"
// const formTabText = "Form" 
// const formPageText = "Simple Form Submission"
// const inputField = "#hello-input"
// const submitButton = "#hello-submit"


// EQ-UI-01 - get title for Form page
Given ("I go to Form page", ()=> {
    const url= Cypress.config().baseUrl
    cy.visit(url)  
});

Then ("I should see title 'UI Testing Site'", ()=> {
    cy.title().should('eq', homeData.expectedHomeTitle)

} )


// REQ-UI-05
Given ("I click on form button", ()=> { 
    cy.get(formPageObj.formButton).click()
    cy.log("Form button clicked")
});

Then ("I should navigate to the form page", ()=> {
    cy.get("h1").should("have.text",formData.formPageText)
    cy.log("User navigated to the Form page")
});

// REQ-UI-06

Given ("I click on Form  button", ()=> { 
    cy.get(formPageObj.formButton).click()
});

Then ("Form button should be in active state", ()=> {
    cy.get(formPageObj.formButtonActive).should("have.text",formPageObj.formButtonText)
    cy.log("Form button is in active state")
    
});

// REQ-UI-11

Given ("I visit form page", ()=> { 
    cy.get(formPageObj.formButton).click()
});

Then ("I should see one input text field and one submit button", ()=> {

    cy.get(formPageObj.inputField).should("be.visible")
    cy.log("Input filed is visible")
    cy.get(formPageObj.submitButton).should("be.visible")
    cy.log("Submit button is visible")
    
});

// REQ-UI-12

Given ("I visit form page", ()=> { 
    cy.get(formPageObj.formButton).click()
});

When ("I enter text {string} in the input field and submit the form", (inputValue)=> {

    cy.get(formPageObj.inputField).type(inputValue)
    cy.get(formPageObj.submitButton).click()
    
    }
);

Then ("I should be redirected to Home page", ()=> {
    
    cy.url().should('eq', homeData.homeURL)
    
});

Then ("I should be able to see the results as {string}", (result)=> {
    
    cy.get(".ui-test").invoke('text').should( name =>{
        expect(name.toLowerCase()).to.contain(result.toLowerCase());
    
})});