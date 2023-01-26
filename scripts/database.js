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
    }],

    bandMembers: [{
        id: 1,
        bandId: 1,
        firstName: "Andy",
        lastName: "Hull",
        role: "lead singer/guitar"
    }, {
        id: 2,
        bandId: 1,
        firstName: "Andy",
        lastName: "Prince",
        role: "bass"
    }, {
        id: 3,
        bandId: 1,
        firstName: "Robert",
        lastName: "McDowell",
        role: "guitar"
    }, {
        id: 4,
        bandId: 1,
        firstName: "Tim",
        lastName: "Very",
        role: "drums"
    }, {
        id: 5,
        bandId: 1,
        firstName: "Brooks",
        lastName: "Tipton",
        role: "keys"
    }, {
        id: 6,
        bandId: 2,
        firstName: "Cory",
        lastName: "Brandan",
        role: "lead singer"
    }, {
        id: 7,
        bandId: 2,
        firstName: "Grayson",
        lastName: "Stewart",
        role: "guitar"
    }, {
        id: 8,
        bandId: 2,
        firstName: "Clay",
        lastName: "Crenshaw",
        role: "bass"
    }, {
        id: 9,
        bandId: 2,
        firstName: "Michael",
        lastName: "Palmquist",
        role: "guitar"
    }, {
        id: 10,
        bandId: 2,
        firstName: "Matt",
        lastName: "Marquez",
        role: "drums"
    }, {
        id: 11,
        bandId: 3,
        firstName: "Dustin",
        lastName: "Kensrue",
        role: "lead singer/guitar"
    }, {
        id: 12,
        bandId: 3,
        firstName: "Teppei",
        lastName: "Teranishi",
        role: "guitar/keys"
    }, {
        id: 13,
        bandId: 3,
        firstName: "Eddie",
        lastName: "Breckenridge",
        role: "bass"
    }, {
        id: 14,
        bandId: 3,
        firstName: "Riley",
        lastName: "Breckenridge",
        role: "drums"
    }, {
        id: 15,
        bandId: 4,
        firstName: "Noah",
        lastName: "Gundersen",
        role: "lead singer/guitar"
    }, {
        id: 16,
        bandId: 5,
        firstName: "Joe",
        lastName: "Musten",
        role: "lead singer"
    }, {
        id: 17,
        bandId: 5,
        firstName: "Mike",
        lastName: "Rich",
        role: "guitar"
    }, {
        id: 18,
        bandId: 5,
        firstName: "Johnny",
        lastName: "Smrdel",
        role: "bass"
    }, {
        id: 19,
        bandId: 5,
        firstName: "Jordan",
        lastName: "McGee",
        role: "drums"
    }, {
        id: 20,
        bandId: 6,
        firstName: "Spencer",
        lastName: "Chamberlain",
        role: "lead singer"
    }, {
        id: 21,
        bandId: 6,
        firstName: "Aaron",
        lastName: "Gillespie",
        role: "singer/drums"
    }, {
        id: 22,
        bandId: 6,
        firstName: "Tim",
        lastName: "McTague",
        role: "guitar"
    }, {
        id: 23,
        bandId: 6,
        firstName: "Chris",
        lastName: "Dudley",
        role: "keys"
    }, {
        id: 24,
        bandId: 6,
        firstName: "Grant",
        lastName: "Brandell",
        role: "bass"
    }, {
        id: 25,
        bandId: 6,
        firstName: "James",
        lastName: "Smith",
        role: "guitar"
    }, {
        id: 26,
        bandId: 7,
        firstName: "Ernie",
        lastName: "Fabian",
        role: "singer/guitar"
    }, {
        id: 27,
        bandId: 7,
        firstName: "Zeke",
        lastName: "McKinney",
        role: "lead singer/bass"
    }, {
        id: 28,
        bandId: 7,
        firstName: "Justin",
        lastName: "Jones",
        role: "drums"
    }, {
        id: 29,
        bandId: 7,
        firstName: "Nathan",
        lastName: "Moe",
        role: "guitar"
    }, {
        id: 30,
        bandId: 7,
        firstName: "Dylan",
        lastName: "Winstead",
        role: "guitar"
    }, {
        id: 31,
        bandId: 8,
        firstName: "Aaron",
        lastName: "Marsh",
        role: "lead singer/keys/guitar"
    }, {
        id: 32,
        bandId: 8,
        firstName: "Bryan",
        lastName: "Laurenson",
        role: "guitar"
    }, {
        id: 33,
        bandId: 8,
        firstName: "Stephen",
        lastName: "Laurenson",
        role: "guitar"
    }, {
        id: 34,
        bandId: 8,
        firstName: "Bobby",
        lastName: "Walker",
        role: "bass"
    }, {
        id: 35,
        bandId: 8,
        firstName: "Jordan",
        lastName: "Butcher",
        role: "drums"
    }, {
        id: 36,
        bandId: 9,
        firstName: "Phoebe",
        lastName: "Bridgers",
        role: "lead singer/guitar"
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

export const getBandMembers = () => {
    return database.bandMembers.map(bandMember => ({ ...bandMember }))
}