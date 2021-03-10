const express = require('express');
const apiRouter = express.Router();
const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    createMeeting,
    deleteAllFromDatabase
  } = require('./db');

// MINIONS //

// GET /api/minions to get an array of all minions.
apiRouter.get('/minions', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

// POST /api/minions to create a new minion and save it to the database.
apiRouter.post('/minions', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);    
});

// GET /api/minions/:minionId to get a single minion by id
apiRouter.get('/minions/:minionId', (req, res, next) => {
    const minionToGet = getFromDatabaseById('minions', req.params.minionId);    
    res.send(minionToGet);
});

// PUT /api/minions/:minionId to update a single minion by id.
apiRouter.put('/minions/:minionId', (req, res, next) => {
    const minionToUpdate = updateInstanceInDatabase('minions', req.body);    
    res.send(minionToUpdate);
});

// DELETE /api/minions/:minionId to delete a single minion by id.
apiRouter.delete('/minions/:minionId', (req, res, next) => {
    const minionToDelete = deleteFromDatabasebyId('minions', req.params.minionId);
    res.status(204).send();
});

// IDEAS //

// GET /api/ideas to get an array of all ideas.
apiRouter.get('/ideas', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

// POST /api/ideas to create a new idea and save it to the database.
apiRouter.post('/ideas', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);    
});


// GET /api/ideas/:ideaId to get a single idea by id.
apiRouter.get('/ideas/:ideaId', (req, res, next) => {
    const ideaToGet = getFromDatabaseById('ideas', req.params.ideaId);    
    res.send(ideaToGet);
});


// PUT /api/ideas/:ideaId to update a single idea by i.
apiRouter.put('/ideas/:ideaId', (req, res, next) => {
    const ideaToUpdate = updateInstanceInDatabase('ideas', req.body);    
    res.send(ideaToUpdate);
});

// DELETE /api/ideas/:ideaId to delete a single idea by id.
apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
    const ideaToDelete = deleteFromDatabasebyId('ideas', req.params.ideaId);
    res.status(204).send();
});

// MEETINGS //

// GET /api/meetings to get an array of all meetings.
apiRouter.get('/meetings', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});


// POST /api/meetings to create a new meeting and save it to the database.
apiRouter.post('/meetings', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
});


// DELETE /api/meetings to delete all meetings from the database.
apiRouter.delete('/meetings', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
});


module.exports = apiRouter;
