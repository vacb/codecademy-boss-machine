const express = require('express');
const apiRouter = express.Router();
const db = require('./db.js')

// MINIONS //

// GET /api/minions to get an array of all minions.
apiRouter.get('/minions', (req, res, next) => {

});

// POST /api/minions to create a new minion and save it to the database.
apiRouter.post('/minions', (req, res, next) => {

});

// GET /api/minions/:minionId to get a single minion by id
apiRouter.get('/minions/:minionId', (req, res, next) => {

});

// PUT /api/minions/:minionId to update a single minion by id.
apiRouter.put('/minions/:minionId', (req, res, next) => {

});

// DELETE /api/minions/:minionId to delete a single minion by id.
apiRouter.delete('/minions/:minionId', (req, res, next) => {

});

// IDEAS //

// GET /api/ideas to get an array of all ideas..
apiRouter.get('/ideas', (req, res, next) => {

});

// POST /api/ideas to create a new idea and save it to the database.
apiRouter.post('/ideas', (req, res, next) => {

});

// GET /api/ideas/:ideaId to get a single idea by id.
apiRouter.get('/ideas/:ideaId', (req, res, next) => {

});

// PUT /api/ideas/:ideaId to update a single idea by i.
apiRouter.put('/ideas/:ideaId', (req, res, next) => {

});

// DELETE /api/ideas/:ideaId to delete a single idea by id.
apiRouter.delete('/ideas/:ideaId', (req, res, next) => {

});

// MEETINGS //

// GET /api/meetings to get an array of all meetings.
apiRouter.get('/meetings', (req, res, next) => {

});

// POST /api/meetings to create a new meeting and save it to the database.
apiRouter.post('/meetings', (req, res, next) => {

});


// DELETE /api/meetings to delete all meetings from the database.
apiRouter.delete('/meetings', (req, res, next) => {

});


module.exports = apiRouter;
