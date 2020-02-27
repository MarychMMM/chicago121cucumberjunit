$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/SmartbearFeatures/orderProcess.feature");
formatter.feature({
  "name": "Smartbear order placing feature",
  "description": "  Agile story: When user is on the Order page, user should be able to place order after filling out the form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects \"\u003cproduct\u003e\" from product dropdown",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cquantity\u003e\" to quantity",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccustomer name\u003e\" to costumer name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstreet\u003e\" to street",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccity\u003e\" to city",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstate\u003e\"to state",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003czip\u003e\" to zip",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003ccardType\u003e\" as card type",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccard number\u003e\" to card number",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cexpiration date\u003e\" to expiration date",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies \"\u003cexpectedName\u003e\" is in the list",
  "keyword": "Then "
});
formatter.examples({
  "name": "User fills out the form as followed from the table below",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "customer name",
        "street",
        "city",
        "state",
        "zip",
        "cardType",
        "card number",
        "expiration date",
        "expectedName"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "1",
        "Ken Adams",
        "Kinzie st",
        "Chicago",
        "IL",
        "60004",
        "Visa",
        "313313133315",
        "12/22",
        "Ken Adams"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "4",
        "Joey Tribbiani",
        "State st",
        "Chicago",
        "IL",
        "60656",
        "Visa",
        "123433533336",
        "11/22",
        "Joey Tribbiani"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "5",
        "Rachel Green",
        "Michigan st",
        "Chicago",
        "IL",
        "60656",
        "Visa",
        "335333333337",
        "10/22",
        "Rachel Green"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "5",
        "Chandler Bing",
        "Erie st",
        "Chicago",
        "IL",
        "60666",
        "Visa",
        "433353333338",
        "10/22",
        "Chandler Bing"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "9",
        "Dr DrakeRamoray",
        "Dale st",
        "Arl Hgths",
        "IL",
        "60452",
        "Visa",
        "532333335334",
        "10/22",
        "Dr DrakeRamoray"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "10",
        "Monica Geller",
        "Euclid ave",
        "Arl Hgths",
        "IL",
        "60312",
        "Visa",
        "733533333333",
        "11/22",
        "Monica Geller"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "3",
        "Ross Geller",
        "River rd",
        "Des Plaines",
        "IL",
        "60666",
        "Visa",
        "833435363732",
        "10/22",
        "Ross Geller"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "1",
        "Ken Adams",
        "Kinzie st",
        "Chicago",
        "IL",
        "60312",
        "Visa",
        "933533333531",
        "12/22",
        "Ken Adams"
      ]
    }
  ]
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ken Adams\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Kinzie st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60004\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"313313133315\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"12/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Ken Adams\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"FamilyAlbum\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"4\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Joey Tribbiani\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"State st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60656\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"123433533336\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"11/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Joey Tribbiani\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"ScreenSaver\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Rachel Green\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Michigan st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60656\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"335333333337\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Rachel Green\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chandler Bing\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Erie st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60666\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"433353333338\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Chandler Bing\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"FamilyAlbum\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"9\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Dr DrakeRamoray\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Dale st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Arl Hgths\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60452\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"532333335334\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Dr DrakeRamoray\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"ScreenSaver\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Monica Geller\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Euclid ave\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Arl Hgths\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60312\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"733533333333\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"11/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Monica Geller\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"3\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ross Geller\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"River rd\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Des Plaines\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60666\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"833435363732\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Ross Geller\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "SmartBear order process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrderStepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ken Adams\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Kinzie st\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IL\"to state",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60312\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"933533333531\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"12/22\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "OrderStepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Ken Adams\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderStepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});