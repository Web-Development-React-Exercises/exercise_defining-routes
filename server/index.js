const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());


const port = 3001;

const names = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Joe' },
    { name: 'Jill' },
    { name: 'Jack' }
]

app.get('/', (req, res) => {
    res.status(200).json({names});
});

app.post('/new', (req, res) => {
    names.push(req.body);
    res.status(200).json(req.body);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});