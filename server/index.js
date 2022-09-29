const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3001;

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});