## meet

# Feature 1: Filter Events by City

As a user, I should be able to filter the events by city

Scenario 1:

    Show all events when no city is selected
    Given the user has not selected a city
    When the user views the events page
    Then the user should see a list of upcoming events from all cities

Scenario 2:

    Show city suggestions when searching for a city
    Given the user is on the events page
    When the user starts typing a city name in the search field
    Then the user should see a list of suggested cities matching the input

Scenario 3:

    Given user was typing “Berlin” in the city textbox
    And the list of suggested cities is showing;
    When the user selects a city (e.g., “Berlin, Germany”) from the list;
    Then their city should be changed to that city (i.e., “Berlin, Germany”)
    And the user should receive a list of upcoming events in that city.

# Feature 2: Show / Hide Event Details:

As a user, I should be able to click on show/hide button So that I can view or hide event details

Scenario 1:

    Given the user is on the events page
    And an event with details is listed
    When the user clicks on the "Show" button for an event
    Then the event details should be displayed

Scenario 2:

    	Given the event details are currently displayed
    When the user clicks on the "Hide" button for the event
    Then the event details should be hidden

# Feature 3: Specify Number of Events

As a user, I shold be able to see the number of event on-going in that specific place

Scenario:

    Given the user has typed a city name in the search field
    When the user selects a city from the suggestions
    Then the user should see the number of ongoing events in the selected city

# Feature 4: Use the App When Offline

As a user, I should be able to use the App even if not online

Scenario:

    Given the user has previously accessed the app while online
    And the user is now offline
    When the user opens the app
    Then the user should be able to access the app and information previously loaded without an internet connection

# Feature 5: Add an App Shortcut to device Home Screen

As a user, I should be able to use the App via a shortcut on my phone or desktop

Scenario 1:

    Given the user has a shortcut to the app on their mobile device’s home screen
    When the user taps the shortcut
    Then the app should open directly on the mobile device

Scenario 2:

    Given the user has a shortcut to the app on their desktop
    When the user double-clicks the shortcut
    Then the app should open directly on the desktop

# Feature 6: Display Charts Visualizing Event Details

As a user, I should be able to see the numbers of upcoming event displayed visually on a chart

Scenario:

    Given the user is on the events page
    When the user views the visual representation of upcoming events
    Then the user should see a chart displaying the number of upcoming events
