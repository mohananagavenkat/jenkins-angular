Feature: Server
    Server should be added to list of servers when we click on add server button
    Scenario: Add Server
      Given I visit server URL
      Given I type server name "server 1"
      And I click on add server button
      Then server with name "server 1" should be added to list
