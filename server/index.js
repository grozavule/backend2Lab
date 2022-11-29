const express = require('express');
const cors = require('cors');

const controller = require('./controller.js');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/houses', controller.getHouses);
app.delete('/api/houses/:id', controller.deleteHouse);
app.put('/api/houses/:id', controller.updateHouse);
app.post('/api/houses', controller.createHouse);

app.listen(4004, () => 'Server running on port 4004');