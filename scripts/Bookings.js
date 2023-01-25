/*
    Import getter functions (venues, bands, and bookings) from database
    Invoke functions assigning it to a variables, venues + bands + bookings
    Create a function to pair venues with assigned bookings (2 parameters - booking, allVenues)
    Create a function to pair bands with assigned bookings (2 parameters - booking, allBands)
    Iterate the array with for loop inside function, bookingsList
    Invoke the previous functions inside the for loop, assigning them to respective variables
    Return an HTML string that lists the names of the band
        playing at the name of the venue on the date assigned
    Create an Event Listener that, when clicked, displays
        a window alert that shows the band name, genre, year formed, and # of members
    Export function to main.js
*/

import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

const findVenue = (booking, allVenues) => {
    let assignVenue = null

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            assignVenue = venue
        }
    }
    return assignVenue
}

const findBand = (booking, allBands) => {
    let assignBand = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            assignBand = band
        }
    }
    return assignBand
}

export const bookingsList = () => {
    let bookingsHTML = `<ul>`

    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)
        bookingsHTML += `<li id="booking--${booking.id}">${band.name} are playing at ${venue.name} on ${booking.date}.`
    }

    bookingsHTML += `</ul>`
    return bookingsHTML
}

const bandInformation = (booking) => {
    let bandInfo = []

    for (const band of bands) {
        if (band.id === booking.bandId) {
                bandInfo.push(`${band.name} \n ${band.genre} \n Formed in ${band.yearFormed} \n ${band.memberCount} band members`)
        }
    }
    return bandInfo
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {
            const [, bookingId] = itemClicked.id.split("--")

            let matchingBooking = null
            for (const booking of bookings) {
                if (parseInt(bookingId) === booking.id) {
                    matchingBooking = booking
                }
            }

            const bandInfo = bandInformation(matchingBooking)
            window.alert(`${bandInfo}`)
        }
    }
)