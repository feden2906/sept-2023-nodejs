const express = require('express')
const {reader, writer} = require('./fs.service')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/users', async (req, res) => {
    try {
        const users = await reader();
        res.json(users);
    } catch (e) {
        res.status(400).json(e.message)
    }
});
app.post('/users', async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const users = await reader();

        const newUser = {id: users[users.length - 1].id + 1, name, email, password}
        users.push(newUser);
        await writer(users);
        res.status(201).json(newUser);
    } catch (e) {
        res.status(400).json(e.message)
    }
})

app.get('/users/:userId', async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const users = await reader();

        const user = users.find((user) => user.id === userId);
        if (!user) {
            throw new Error('user not found');
        }
        res.json(user);
    } catch (e) {
        res.status(400).json(e.message)
    }
})

app.put('/users/:userId', async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const userId = Number(req.params.userId);
        const users = await reader();

        const index = users.findIndex((user) => user.id === userId);
        if (index === -1) {
            throw new Error('user not found');
        }
        users[index] = {...users[index], name, email, password}
        await writer(users);

        res.status(201).json(users[index]);
    } catch (e) {
        res.status(400).json(e.message)
    }
})

app.delete('/users/:userId', async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const users = await reader();

        const index = users.findIndex((user) => user.id === userId);
        if (index === -1) {
            throw new Error('user not found');
        }
        users.splice(index, 1);
        await writer(users);
        res.sendStatus(204);
    } catch (e) {
        res.status(400).json(e.message)
    }
})

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}/`);
})
// CRUD
