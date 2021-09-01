Feature: Visit Home page
    
    # Feature I want to Visit Home page
    Scenario: Home button exists
        Given I am on home page
        Then I should see Home link "Zubair"


    Scenario: EQ-UI-01
        Given I go to Home page
        Then I should see title 'UI Testing Site'

    Scenario: REQ-UI-02
        Given I go to Home page 
        Then I should be able to see Company Logo

    Scenario: REQ-UI-03
        Given I click on Home button
        Then I should get navigated to the Home page

    Scenario: REQ-UI-04
        Given I click on Home button
        Then Home button should be in active state

    Scenario: REQ-UI-08
        Given I click on UI Testing button
        Then I should get navigated to the Home page

    Scenario: REQ-UI-09
        Given I viist Home Page
        Then I should see text in h1 tag: 'Welcome to Pixelmatic QA department'
        
    Scenario: REQ-UI-10
        Given I viist Home Page
        Then I should see text in p tag: 'This site is dedicated to perform some exercises and demonstrate automated web testing'