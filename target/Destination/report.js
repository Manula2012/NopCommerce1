<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/subcategory.feature");
formatter.feature({
  "name": "Subcategories",
  "description": "",
  "keyword": "Feature"
});
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/categories.feature");
formatter.feature({
  "name": "Categories",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User can navigate to correct category page,",
  "description": "      So that he can use all products features from categories",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@category"
    }
  ]
});
formatter.step({
  "name": "user clicks on \"\u003ccategory\u003e\" link from top menu",
  "keyword": "When "
});
formatter.step({
  "name": "user should able to navigate to \"\u003crelated category page\u003e\" successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "category",
        "related category page"
      ]
    },
    {
      "cells": [
        "Computers",
        "https://demo.nopcommerce.com/computers"
      ]
    },
    {
      "cells": [
        "Electronics",
        "https://demo.nopcommerce.com/electronics"
      ]
    },
    {
      "cells": [
        "Apparel",
        "https://demo.nopcommerce.com/apparel"
      ]
    },
    {
      "cells": [
        "Digital downloads",
        "https://demo.nopcommerce.com/digital-downloads"
      ]
    }
  ]
});
>>>>>>> origin/master
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
<<<<<<< HEAD
=======
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
  "name": "User can navigate to correct category page,",
  "description": "      So that he can use all products features from categories",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@category"
    }
  ]
>>>>>>> origin/master
});
formatter.step({
  "name": "user clicks on \"Computers\" link from top menu",
  "keyword": "When "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.user_clicks_om_link_from_top_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to navigate to \"https://demo.nopcommerce.com/computers\" successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.user_should_able_to_navigate_to_successfully(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
<<<<<<< HEAD
  "name": "User should be able to navigate to subcategory page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@subcategory"
=======
  "name": "User can navigate to correct category page,",
  "description": "      So that he can use all products features from categories",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@category"
>>>>>>> origin/master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user hovers on \"category\" and click on \"subcategory\"",
  "keyword": "When "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.userHoversOnAndClickOn(java.lang.String,java.lang.String)"
=======
  "name": "user clicks on \"Electronics\" link from top menu",
  "keyword": "When "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.user_clicks_om_link_from_top_menu(java.lang.String)"
>>>>>>> origin/master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user should be able to navigate to \"subcategory\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.userShouldBeAbleToNavigateToPage(java.lang.String)"
=======
  "name": "user should able to navigate to \"https://demo.nopcommerce.com/electronics\" successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NopComWebTest2.MyStepdefs.user_should_able_to_navigate_to_successfully(java.lang.String)"
>>>>>>> origin/master
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
