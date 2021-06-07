# Team-04-Collabrative_Project_1

## Overview: 
The purpose of <insert site name> is to provide the user with an activity to do based on the weather. If the user is bored or looking for something to do, they should be able to enter their location into the site. Upon submitting the location, the site will check the weather to determine the weather then provide an activity to do based on the weather details. This site will utilize both <insert weather API> and www.boredapi.com APIs to achieve this response. 

## User Stories
As a user, I want to be provided with an activity or activities that I can do based on the weather, so that I can have something to do when I am bored.

## Acceptance Criteria

GIVEN I looking for something to do
WHEN I access <the site>
THEN the site name, description of the site, location text box, and "number of people" drop down are displayed

GIVEN I am on <the site>
WHEN I click in the location text box
THEN I can enter my city and state

GIVEN I am on <the site>
WHEN I click the "number of people" drop down box
THEN then the options <1-10> are displayed

GIVEN the "number of people" drop down box is expanded
WHEN I click on an option
THEN the number that was selected is displayed in the box

GIVEN I have entered my location and number of people
WHEN I click submit
THEN the weather (in my location) and an activity are displayed

''''''''''''''''''''''''''''''''''''''''''''''''''''''
GIVEN I have entered my location, and not the number of people
WHEN I click submit
THEN I am provided a message that says "Please include the number of people"

GIVEN I have entered the number of people, and not my location
WHEN I click submit
THEN I am provided a message that says "Please select your location"
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

GIVEN I have entered my location, and not the number of people
WHEN I click submit
THEN a pop up message displays with the option to continue without considering the number of people

GIVEN a pop up message displays with the option to continue without considering the number of people
WHEN I click continue
THEN the weather in my location and an activity are displayed
WHEN I click cancel
THEN I start over

GIVEN I have entered the number of people, and not my location
WHEN I click submit
THEN I am provided a message that says "Please select your location"

## APIs
The following APIs are used in this site:
www.boredapi.com
