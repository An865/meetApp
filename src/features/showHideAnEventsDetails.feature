Feature: Show/hide event details

Scenario: An event element is collapsed by default. 
Given a list of events is being displayed 
When the user doesn't have a specific event selected 
Then the event elements should remain collapsed

Scenario: User can expand an event to see its details. 
Given a list of events is being displayed 
When the user selects a specific event 
Then the selected event element should display

Scenario: User can collapse an event to hide its details. 
Given a list of events is being displayed 
And an event's details are open
When the user deselects an event 
Then the event will collapse and hide its details