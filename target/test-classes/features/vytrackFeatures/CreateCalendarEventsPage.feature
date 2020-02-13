@CCEP
Feature: Activities Module: Create Calendar Events Page
  @defaultFieldsCCEP
  Scenario: Verify Default Fields for Create Calendar Events Page
    Given the user is signed in as a sale manager
    When the user is on the All Calendar Events page under the Activities tab
    And the user is taken to the Create Calendar Events page after clicking the Create Calendar Event button
    And the user should see their name as the default value of of the owner field
    And the user should see the title field to be empty by default
    And the user should see the start date field with the default value of the current date
    And the user should see the start time field with the default value of the current time

    @repeatOptions
  Scenario: Verify Repeat Checkbox Options for Create Calendar Events Page
    Given the user is signed in as a sale manager
    When the user is on the All Calendar Events page under the Activities tab
    And the user is taken to the Create Calendar Events page after clicking the Create Calendar Event button
    When the user clicks on the Repeat checkbox
    Then the user sees the Repeats select field with the following options: Daily, Weekly, Monthly, Yearly