const express = require('express');
const OngController = require('./controller/OngController');
const IncidentsContoller = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsContoller.index);
routes.post('/incidents', IncidentsContoller.create);
routes.delete('/incidents/:id', IncidentsContoller.delete);



module.exports = routes;