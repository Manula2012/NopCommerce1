$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/subcategory.feature");
formatter.feature({
  "name": "Subcategories",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.userIsInTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to navigate to subcategory page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@subcategory"
    }
  ]
});
formatter.step({
  "name": "user hovers on \"category\" and click on \"subcategory\"",
  "keyword": "When "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.userHoversOnAndClickOn(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to navigate to \"subcategory\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.userShouldBeAbleToNavigateToPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});