@wiki
Feature: Search functionality

  Background: Home page
    Given User is onWikipedia home page

  Scenario Outline: Wikipedia Search Functionality Title Verification
    When User types "<name>" in the wiki search box
    And User clicks wiki search button
    Then User sees "<name>" is in the wiki title
    Examples:
      | name |
      |Steve Jobs|

  Scenario Outline: Wikipedia Search Functionality Header Verification
    When User types "<name>" in the wiki search box
    And User clicks wiki search button
    Then User sees "<name>" is in the main header
    Examples:
      | name |
      |Steve Jobs|

  Scenario Outline: Wikipedia Search Functionality Image Header Verification
    When User types "<name>" in the wiki search box
    And User clicks wiki search button
    Then User sees "<name>" is in the image header
    Examples:
      | name |
      |Steve Jobs|
      |Bill Gates|


