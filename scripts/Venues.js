/*
    Import getter functions (venues and bands) from database
    Invoke functions assigning it to a variables, venues + bands
    Iterate the array with for loop inside function, venuesList
    Return an HTML string that lists the names of the venues
    Create an Event Listener that, when clicked, displays
        a window alert that shows all the bands playing at the venue
    Create a function that iterates the bookings to match the band with the venues
        that it is playing
    Invoke the function in the event listener
    Export function to main.js
*/

import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const venuesList = () => {
    let venuesHTML = `<ul>`

    for (const venue of venues) {
        venuesHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    venuesHTML += `</ul>`
    return venuesHTML
}

const bandBookedAtVenue = (venue) => {
    let bandBooked = ``

    for (const booking of bookings) {
        if (booking.venueId === venue.id) {
            for (const band of bands) {
                if (booking.bandId === band.id) {
                    bandBooked += `${band.name} \n`
                }
            }
        }
    }
    return bandBooked
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {
            const [, venueId] = itemClicked.id.split("--")

            let matchingVenue = null
            for (const venue of venues) {
                if (parseInt(venueId) === venue.id) {
                    matchingVenue = venue
                }
            }

            const bandBooked = bandBookedAtVenue(matchingVenue)
            window.alert(`${bandBooked}`)
        }
    }
)