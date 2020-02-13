$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/vytrackFeatures/CreateCalendarEventsPage.feature");
formatter.feature({
  "name": "Activities Module: Create Calendar Events Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CCEP"
    }
  ]
});
formatter.scenario({
  "name": "Verify Repeat Checkbox Options for Create Calendar Events Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CCEP"
    },
    {
      "name": "@repeatOptions"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is signed in as a sale manager",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.the_user_is_signed_in_as_a_sale_manager()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the All Calendar Events page under the Activities tab",
  "keyword": "When "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.the_user_is_on_the_All_Calendar_Events_page_under_the_Activities_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user is taken to the Create Calendar Events page after clicking the Create Calendar Event button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCalendarEventsPageSteps.the_user_is_taken_to_the_Create_Calendar_Events_page_after_clicking_the_Create_Calendar_Event_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on the Repeat checkbox",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user sees the Repeats select field with the following options: Daily, Weekly, Monthly, Yearly",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});