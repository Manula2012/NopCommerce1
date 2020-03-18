Feature: Categories

  Background:
    Given user is in the home page

    @category
    Scenario Outline: User can navigate to correct category page,
      So that he can use all products features from categories

      When user clicks on "<category>" link from top menu
      Then user should able to navigate to "<related category page>" successfully
      Examples:
        |category          | related category page                         |
        |Computers         |https://demo.nopcommerce.com/computers         |
        |Electronics       |https://demo.nopcommerce.com/electronics       |
        |Apparel           |https://demo.nopcommerce.com/apparel           |
        |Digital downloads | https://demo.nopcommerce.com/digital-downloads|


      Scenario:  User can navigate to facebook page

        When user clicks on "Facebook" link from top menu
        Then user should able to see Facebook page opened up in another window tab
