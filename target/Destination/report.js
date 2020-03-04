$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/pricesort.feature");
formatter.feature({
  "name": "User should be able to see products sorted in price descending order",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to see products sorted in price descending order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pricesort"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the desktops page",
  "keyword": "Given "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.userIsInTheDesktopsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects price high to low",
  "keyword": "When "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.userSelectsPriceHighToLow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see products sorted in price descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.userShouldBeAbleToSeeProductsSortedInPriceDescendingOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});