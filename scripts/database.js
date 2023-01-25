/*
    Create a database array that holds objects with properties:
    -Venues
        > id - int
        > Name of venue - string
        > Address - string
        > Square footage - int
        > Max capacity - int
    -Bands
        > id - int
        > Band name - string
        > # of members - int
        > Genre - string
        > Year formed as band - int
    -Bookings
        > id - int
        > Band id - int
        > Venue id - int
        > Date of booking - string

    Export a copy of each array
*/

const database = {
    venues: [{
        id: 1,
        name: "Exit/In",
        address: "2208 Ellliston Place",
        squareFoot: 4110,
        capacity: 500

    }, {
        id: 2,
        name: "The End",
        address: "2219 Elliston Place",
        squareFoot: 2376,
        capacity: 200

    }, {
        id: 3,
        name: "Marathon Music Works",
        address: "1402 Clinton Street",
        squareFoot: 14000,
        capacity: 1800
        
    }, {
        id: 4,
        name: "Basement East",
        address: "917 Woodland Street",
        squareFoot: 5000,
        capacity: 400
        
    }, {
        id: 5,
        name: "Mercy Lounge",
        address: "1 Cannery Row",
        squareFoot: 4500,
        capacity: 500
        
    }],

    bands: [{
        id: 1,
        name: "Manchester Orchestra",
        memberCount: 5,
        genre: "Indie Rock",
        yearFormed: 2004

    }, {
        id: 2,
        name: "Norma Jean",
        memberCount: 5,
        genre: "Metalcore",
        yearFormed: 1997
    }, {
        id: 3,
        name: "Thrice",
        memberCount: 4,
        genre: "Rock",
        yearFormed: 1998

    }, {
        id: 4,
        name: "Noah Gundersen",
        memberCount: 1,
        genre: "Indie Folk",
        yearFormed: 2005

    }, {
        id: 5,
        name: "Advent",
        memberCount: 4,
        genre: "Hardcore",
        yearFormed: 2005

    }, {
        id: 6,
        name: "Underoath",
        memberCount: 6,
        genre: "Post-Hardcore",
        yearFormed: 1997

    }, {
        id: 7,
        name: "idle threat",
        memberCount: 5,
        genre: "Rock",
        yearFormed: 2014

    }, {
        id: 8,
        name: "Copeland",
        memberCount: 5,
        genre: "Rock",
        yearFormed: 2001

    }, {
        id: 9,
        name: "Phoebe Bridgers",
        memberCount: 1,
        genre: "Indie Folk",
        yearFormed: 2014

    }],

    bookings: [{
        id: 1,
        bandId: 1,
        venueId: 3,
        date: "February 3rd, 2023"

    }, {
        id: 2,
        bandId: 2,
        venueId: 1,
        date: "February 10th, 2023"

    },{
        id: 3,
        bandId: 3,
        venueId: 5,
        date: "February 17th, 2023"
        
    },{
        id: 4,
        bandId: 4,
        venueId: 4,
        date: "February 24th, 2023"
        
    },{
        id: 5,
        bandId: 5,
        venueId: 2,
        date: "March 3rd, 2023"
        
    },{
        id: 6,
        bandId: 6,
        venueId: 1,
        date: "February 3rd, 2023"
    },{
        id: 7,
        bandId: 3,
        venueId: 1,
        date: "February 3rd, 2023"

    }, {
        id: 8,
        bandId: 7,
        venueId: 2,
        date: "March 3rd, 2023"
    }, {
        id: 9,
        bandId: 8,
        venueId: 3,
        date: "February 4th, 2023"

    }, {
        id: 10,
        bandId: 7,
        venueId: 5,
        date: "February 17th, 2023"

    }, {
        id: 11,
        bandId: 9,
        venueId: 4,
        date: "February 11th, 2023"
    }]
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}