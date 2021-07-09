Feature: Filter events by city

Scenario: When user hasn’t searched for a city, show upcoming events from all cities. 
Given a user hasn't searched for a city yet 
When the user first starts the app 
Then the user will see a list of all upcoming events

Scenario: User should see a list of suggestions when they search for a city. 
Given the application is open 
When the user begins to search for a particular city 
Then the user will see a list of cities that match what they have begun to search

Scenario: User can select a city from the suggested list. 
Given the app is displaying searches that match the users search input 
When the user finds and selects their desired location 
Then the app returns events associated with the user's desired city