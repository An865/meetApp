Feature: Specify Number of events

Scenario: When user hasn’t specified a number, 32 is the default number. 
Given a list of events is being displayed 
When the user hasn't entered a specific number of events to display 
Then 32 events will be displayed

Scenario: User can change the number of events they want to see. 
Given a list of events is being displayed 
When a user enters a number of events to display 
Then the entered number of events is displayed