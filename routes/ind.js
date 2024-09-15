const { Router } = require('../../src/router.js');

const ind = new Router();

const requestLogger = (req, res, next) => {
    console.log(`Received ${req.method} request for routers  ${req.url}`);
    next();
};

ind.use(requestLogger);

// Define routes for ind
ind.get('/users/:id', async (req, res,sendRes) => {
    const { id } = req.params;
    // Simulate fetching user from database
    const user = { id, name: 'John Doe' };
    sendRes(200,"Good");
}, { id: 'string' }, []);

ind.post('/users', async (req, res,sendRes) => {
    // Simulate creating a new user
    const newUser = req.body;
    sendRes(201,{ message: 'User successfully' });
},null, []);

module.exports = { ind };

