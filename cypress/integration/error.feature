Feature: Visit Error page
    
    # Feature Verify Error page
    Scenario: EQ-UI-01 - get title for Error page
    Given I go to Form page
    Then I should see title 'UI Testing Site'

    Scenario: REQ-UI-07: Error button exists
        Given I am on Home page
        When I click on error button
        Then I should get a 404 HTTP response code


