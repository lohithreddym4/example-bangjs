const { bang } = require('bangjs-light');
const app = new bang();

// Import routes and middleware
const usersRouter = require('./routes/users');
const dummy = require('./middlewares/testware');

// Use routes
app.useRoute('/users', usersRouter);

// Use middleware
app.use(dummy);

// Define routes
app.get('/', (req, res) => {
    res.end(JSON.stringify({ message: 'Hello World' }));
});

app.post('/upload', async (req, res) => {
    console.log(req.files);  // Log uploaded files
    console.log(req.fields); // Log request fields
    return res.end(JSON.stringify({ message: "done" }));
});

app.post('/check', async (req, res) => {
    return res.end(JSON.stringify({ message: "done" }));
}, {
    age: {
        required: true  // Validate that `age` is present
    }
});

app.get('/test', (req, res, sendResponse) => {
    const data = { message: 'Hello from BangJS' };
    const cookies = [{ name: 'sessionId', value: 'abc123' }];
    sendResponse(404, data, cookies);  // Send response with status code 404 and cookies
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
