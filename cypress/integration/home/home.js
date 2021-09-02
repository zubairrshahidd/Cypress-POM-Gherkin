import { Given,When,Then } from "cypress-cucumber-preprocessor/steps"
import home_objects from "../../pages/home/home_objects";
const homeData = require("../../fixtures/home_testData");
const homePageObj = require("../../pages/home/home_objects");

// WebElements decleration
const form = "#form"
const homeTab = "#home"
const homeTabActive = ".active"
const expectedHomeTitle = "UI Testing Site"
const homeTabText = "Home" 

Given ("I am on home page", ()=> {
    const url= Cypress.config().baseUrl
    cy.visit(url)  
});

Then ("I should see Home link {string}", (varName)=> {
    cy.get(homeTab).should("be.visible")
    cy.title().should('eq', expectedHomeTitle)
    cy.get(homeTabActive).should("have.text",homeTabText)
    cy.log("home active")
    cy.get("h1").should("have.text","Welcome to Pixelmatic QA department")

    cy.get(form).click()
    cy.get("#hello-input").type(varName)
    cy.get("#hello-submit").click()
    cy.get(".ui-test").invoke('text').should( name =>{
        expect(name.toLowerCase()).to.contain(varName.toLowerCase());
    } )

})

    // EQ-UI-01
    Given ("I go to Home page", ()=> {
        const url= Cypress.config().baseUrl
        cy.visit(url)  
    });
    
    Then ("I should see title 'UI Testing Site'", ()=> {
        cy.title().should('eq', homeData.expectedHomeTitle)

    } )

    // REQ-UI-02

    Given ("I go to Home page ", ()=> {
        cy.get(homePageObj.home_Tab).click()
    });
    
    Then ("I should be able to see Company Logo", ()=> {
    
        cy.get(homePageObj.companyLogo).should("be.visible")

    } )

    // REQ-UI-03

    Given ("I click on Home button", ()=> {
        cy.get(homePageObj.home_Tab).click()
    });
    
    Then ("I should get navigated to the Home page", ()=> {
        cy.get(homePageObj.home_Tab).should("be.visible")
        cy.url().should('eq', homeData.homeURL)
    
    } )

    // REQ-UI-04

    Given ("I click on Home button", ()=> {
        cy.get(homePageObj.home_Tab).click() 
    });
    
    Then ("Home button should be in active state", ()=> {
    
        cy.get(homePageObj.homeTabActive).should("have.text",homeData.homeTabText)

    } )

    // REQ-UI-08

    Given ("I click on UI Testing button", ()=> {
        cy.get(homePageObj.uiTetsingLink).click() 
    });
    
    Then ("I should get navigated to the Home page", ()=> {
    
        cy.url().should('eq', homeData.homeURL)
        cy.get(homePageObj.homeTabActive).should("have.text",homeData.homeTabText)

    } )

    // REQ-UI-09

    Given ("I viist Home Page", ()=> {
        cy.get(homePageObj.uiTetsingLink).click() 
    });
    
    Then ("I should see text in h1 tag: 'Welcome to Pixelmatic QA department'", ()=> {
        cy.get(homePageObj.welcomeMessage).should("have.text",homeData.homeWelcomeMessage)
       
    })

    // REQ-UI-10

    Given ("I viist Home Page ", ()=> {
        cy.get(homePageObj.uiTetsingLink).click()  
    });
    
    Then ("I should see text in p tag: 'This site is dedicated to perform some exercises and demonstrate automated web testing'", ()=> {
        cy.get(homePageObj.welcomeDescription).should("have.text",homeData.homePagePTagMessage)

    } )