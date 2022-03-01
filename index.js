const express = require('express');
const app = express();
const port = 3000;

//route
app.get('/', (req, res) => {
    return res.send('Hello World!');
});

// localhost - 127.0.0.1
app.listen(port, () => console.log(`Example app listening on port ${port}`));