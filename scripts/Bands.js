/*
    Import getter functions (venues and bands) from database
    Invoke functions assigning it to a variables, venues + bands
    Iterate the array with for loop inside of a function, bandsList
    Return an HTML string that lists the names of the bands
    Create an Event Listener that, when clicked, displays
        a window alert that shows all the venues that the band is playing
    Export function to main.js
*/

import { getVenues, getBands, getBookings, getBandMembers } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()
const bandMembers = getBandMembers()

export const bandsList = () => {
    let bandsHTML = `<ul>`

    for (const band of bands) {
        bandsHTML += `<li id="band--${band.id}">${band.name}</li>`
    }

    bandsHTML += `</ul>`
    return bandsHTML
}

const venuesBookedForBand = (band) => {
    let venueBooked = ``

    for (const booking of bookings) {
        if (booking.bandId === band.id) {
            for (const venue of venues) {
                if (booking.venueId === venue.id) {
                    venueBooked += `${venue.name} \n`
                }
            }
        }
    }
    return venueBooked
}

const bandBio = (band) => {
    let memberBioList = ``

    for (const member of bandMembers) {
        if (member.bandId === band.id) {
            memberBioList += `${member.firstName} ${member.lastName} (${member.role}) \n`
        }
    }
    return memberBioList
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")

            let matchingBand = null
            for (const band of bands) {
                if (parseInt(bandId) === band.id) {
                    matchingBand = band
                }
            }
            const memberBio = bandBio(matchingBand)
            const venueBooked = venuesBookedForBand(matchingBand)
            window.alert(`${memberBio}\nUpcoming shows:\n${venueBooked}`)
        }
    }
)