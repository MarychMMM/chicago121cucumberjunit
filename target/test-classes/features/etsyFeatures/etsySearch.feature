Feature: Etsy search functionality

  Background: User is already on Etsy home page
    Given User is on Etsy home page

  @etsy
  Scenario: Etsy search title verification

    When User searches for "wooden spoon"
    Then User should see "Wooden spoon" in  Etsy title
