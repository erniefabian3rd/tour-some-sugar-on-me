/*
GOAL:
    Create a website that lists:
    - Venues (accomodates 2 bands per night)
        > Name of venue
        > Address
        > Square footage
        > Max capacity
        > Format: List at bottom side by side with bands list
    - Bands (can play 1-2 sets per night)
        > Band name
        > # of members
        > Genre
        > Year formed as band
        > Format: List at bottom side by side with venues list
    - Bookings
        > Band name
        > Venue name
        > Date of booking
        > Format: List at top = "BAND is playing at VENUE on DATE"

ALGORTITHM:
    - Create an ERD that shows the relationship of venues/bands/bookings
    - Create necessary modules
        > database.js to store each array that must be created
        > Venues.js to iterate the venues array and put in HTML <ul>
        > Bands.js to iterate the bands array and put in HTML <ul>
        > Bookings.js to iterate the bookings array and put in HTML <ul>
            using string interpolation to meet required format above
        > main.js to compile all of the individual lists into HTML
            and target index.html container class/id using .querySelector and .innerHTML
        > index.html to create a basic HTML structure and set up a "catch point" container
            for previous step
        > main.css to style using flexbox to the necessary format requirement above
    - Make each module exportable by using .map function to create
        copies of each array and import to respective modules
    - Create Event Listeners for each module to display window alerts:
        > Venues: displays all bands that have booked venue
        > Bands: displays all venues the band is playing
        > Bookings: displays band name, genre, year formed, and # of members
    - Style website to meet criteria and STRETCH: make it cool
*/

import { venuesList } from "./Venues.js"
import { bandsList } from "./Bands.js"
import { bookingsList } from "./Bookings.js"

const mainContainer = document.querySelector("#container")

const websiteHTML = `
<h1>Upcoming Shows in Nashville, TN</h1>

<article class="bookings">
    <h2>Current Bookings</h2>
    <div class="bookings-list">${bookingsList()}</div>
</article>

<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        <div class="venues-list">${venuesList()}</div>
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        <div class="bands-list">${bandsList()}</div>
    </section>
</article>
`

mainContainer.innerHTML = websiteHTML