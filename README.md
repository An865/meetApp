# Meet App

![alt text](https://github.com/An865/meetApp/blob/main/MeetApp.png?raw=true)


## Key Features
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

## User Stories

1. As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

## Scenarios
### FEATURE 1: FILTER EVENTS BY CITY
Scenario 1.1: When user hasn’t searched for a city, show upcoming events from all cities.  \
Given a user hasn't searched for a city yet  \
When the user first starts the app  \
Then the user will see a list of all upcoming events  

Scenario 1.2: User should see a list of suggestions when they search for a city.  \
Given the application is open  \
When the user begins to search for a particular city  \
Then the user will see a list of cities that match what they have begun to search

Scenario 1.3: User can select a city from the suggested list.  \
Given the app is displaying searches that match the users search input  \
When the user finds and selects their desired location  \
Then the app returns events associated with the user's desired city

### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
Scenario 2.1: An event element is collapsed by default.  \
Given a list of events is being displayed  \
When the user doesn't have a specific event selected  \
Then the event elements should remain collapsed

Scenario 2.2: User can expand an event to see its details.  \
Given a list of events is being displayed  \
When the user selects a specific event  \
Then the selected event element should display 

Scenario 2.3: User can collapse an event to hide its details.  \
Given a list of events is being displayed  \
When the user deselects an event  \
Then the event will collapse and hide its details

### FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 3.1: When user hasn’t specified a number, 32 is the default number.  \
Given a list of events is being displayed  \
When the user hasn't entered a specific number of events to display  \
Then 32 events will be displayed

Scenario 3.2: User can change the number of events they want to see.  \
Given a list of events is being displayed  \
When a user enters a number of events to display  \
Then the entered number of events is displayed  

### FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 4.1: Show cached data when there’s no internet connection.  \
Given the app is open and has previously cached data \
When there is no internet connection  \
Then cached data is displayed to the user

Scenario 4.2: Show error when user changes the settings (city, time range).  \
Given the the app is open with no internet connection  \
When the user attempts to change any of the settings  \
Then an error will be displayed

### FEATURE 5: DATA VISUALIZATION
Scenario 5.1: Show a chart with the number of upcoming events in each city.  \
Given a list of events is loaded  \
When the user selects 'event overview' in the menu  \
Then a chart with data related to upcoming events in each city will be displayed