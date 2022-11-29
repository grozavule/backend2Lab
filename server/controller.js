const houses = require('./db.json');
const PRICE_CHANGE_AMOUNT = 10000;
let upcomingHouseId = 4;

const findHouseById = id => {
    return houses.findIndex(house => house.id === +id);
}

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        let {id} = req.params;
        let index = findHouseById(id);
        
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        //console.log(req.body);
        let { address, price, imageURL } = req.body;
        let newHouse = {
            'id': upcomingHouseId,
            'address': address,
            'price': price,
            'imageURL': imageURL
        };
        houses.push(newHouse);
        upcomingHouseId++;
        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        let index = findHouseById(id);
        let house = houses[index];

        switch(type)
        {
            case 'plus':
                house.price += PRICE_CHANGE_AMOUNT;
                break;
            case 'minus':
                if(house.price <= 0)
                {
                    res.status(400).send(`The house price can't fall below $0`);
                    return;
                }
                else
                {
                    house.price -= PRICE_CHANGE_AMOUNT;
                }
                break;
        }
        res.status(200).send(houses);
    }
}