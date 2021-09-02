Feature: Visit Form page

    Scenario: EQ-UI-01 - get title for Form page
    Given I go to Form page
    Then I should see title 'UI Testing Site'

    Scenario: REQ-UI-05
    
        Given I click on form button
        Then I should navigate to the form page

    Scenario: REQ-UI-06
        Given I click on Form  button
        Then Form button should be in active state

    Scenario: REQ-UI-11
        Given I visit form page
        Then I should see one input text field and one submit button

  Scenario:  REQ-UI-12
        Given I visit form page
        When I enter text "Zubair" in the input field and submit the form
        Then I should be redirected to Home page
        Then I should be able to see the results as "Hello Zubair!"
        | <value> |
        | Zubair |
        


    
