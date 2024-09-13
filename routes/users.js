const { Router } = require('bangjs-light');
const router = new Router();

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

// Get all users
router.get('/', (req, res) => {
    res.end(JSON.stringify(users));
});

// Add a new user
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).end(JSON.stringify({ error: 'Name is required' }));
    }

    const newUser = { id: users.length + 1, name };
    users.push(newUser);

    res.status(201).end(JSON.stringify({ message: 'User added', user: newUser }));
});



// Delete a user by ID
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    
    if (userIndex === -1) {
        return res.status(404).end(JSON.stringify({ error: 'User not found' }));
    }

    users.splice(userIndex, 1);
    res.status(200).end(JSON.stringify({ message: 'User deleted' }));
});

module.exports = router;
