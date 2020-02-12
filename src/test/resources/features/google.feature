@regression @smoke
Feature: Google feature verifications

  Agile Story: User stories, acceptance criteria
  Basically we can pass here any additional information related ti this feature file
  # comments

  @smokeTest
  Scenario: Google title verification
    When User is on google homepage
    Then User should see title contains Google

    @miniRegression @smoke
  Scenario:  Google title verification after searching a term
    When User is on google homepage
    And User types wooden spoon into the search box
    And User clicks to search button
    Then User should see wooden spoon in the title
