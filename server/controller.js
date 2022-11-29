const houses = require('./db.json');
let upcomingHouseId = 4;

module.exports = {
    getHouses: (req, res) => {
        console.log("getHouses was called");
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {

    },
    createHouse: (req, res) => {

    },
    updateHouse: (req, res) => {

    }
}