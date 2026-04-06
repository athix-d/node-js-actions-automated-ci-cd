const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
    res.send('🚀 App is LIVE on EC2 via CI/CD!');
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    tasks.push(req.body);
    res.send('Task added');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});