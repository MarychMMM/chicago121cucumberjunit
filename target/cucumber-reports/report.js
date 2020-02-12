$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google feature verifications",
  "description": "  Agile Story: User stories, acceptance criteria\n  Basically we can pass here any additional information related ti this feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Google title verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on google homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Google_StepDefs.user_is_on_google_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see title contains Google",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_StepDefs.user_should_see_title_contains_Google()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Google title verification after searching a term",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on google homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Google_StepDefs.user_is_on_google_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types wooden spoon into the search box",
  "keyword": "And "
});
formatter.match({
  "location": "Google_StepDefs.user_types_wooden_spoon_into_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to search button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should see wooden spoon in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_StepDefs.user_should_see_wooden_spoon_in_the_title()"
});
formatter.result({
  "status": "skipped"
});
});