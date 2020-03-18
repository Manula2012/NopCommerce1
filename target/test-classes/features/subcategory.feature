Feature: Subcategories

  Background:
    Given user is in the home page
    @subcategory
    Scenario: User should be able to navigate to subcategory page
      When user hovers on "category" and click on "subcategory"
      Then user should be able to navigate to "subcategory" page
