# Team-04-Collaborative_Project_1

## Overview: 
The purpose of <insert site name> is to provide the user with an activity to do based on the weather. If the user is bored or looking for something to do, they should be able to enter their location into the site. Upon submitting the location, the site will check the weather to determine the weather then provide an activity to do based on the weather details. This site will utilize both https://openweathermap.org/api and www.boredapi.com APIs to achieve this response. 

## User Stories
As a user, I want to be provided with an activity or activities that I can do based on the weather, so that I can have something to do when I am bored.

## Acceptance Criteria

GIVEN I looking for something to do
WHEN I access <the site>
THEN the site name, description of the site, location text box, and "number of people" drop down are displayed

GIVEN I am on the Activity Selector
WHEN I click in the location text box
THEN I can enter my city and state

GIVEN I am on the Activity Selector
WHEN I click the "number of people" drop down box
THEN then the options <1-3> are displayed

GIVEN the "number of people" drop down box is expanded
WHEN I click on an option
THEN the number that was selected is displayed in the box

GIVEN I have entered my location and number of people
WHEN I click submit
THEN the weather (in my location) and an activity are displayed

GIVEN I enter a non valid location
WHEN I click submit
THEN I am provided a message that says "Please select your location"

## Usage
Once the page loads, type in your city and the number of individuals (up to three) that are looking for an activity to do. Click submit and you'll have your area's weather and an activity for you to try! Refresh the page to get another activity if you want to see another activity!


![activity_selector_gif](assets/images/demo.gif)
  
## Future Development
1. Add something like a “loading screen” like in video games
   - Case I:  API loads slower than the timer counting down, then we could display quotes, random facts, etc. for a second
     - Would need to check each second to see if the API had finished counting down, if it had then we would display 
   - Case II: the user has fast internet, so the timer is unnecessary
     - Can immediately display the results
2. If the user doesn’t like their randomly generated activity, add a “return to landing page” button, so they don’t have to refresh 
3. Identify random activity  based on participants (5 max limit allowed by BoredAPI ) , accessibility and user friendly choice of price to get optimized outcomes .
4. Enhance user experience by including audio and visual effects.
5. Allow user to specify which state they’re in (Columbus, OH vs Columbus, GA)


## APIs
The following APIs are used in this site:
www.boredapi.com https://openweathermap.org/api

