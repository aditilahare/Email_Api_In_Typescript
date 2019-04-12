// lib/app.ts
import express = require('express');
const port = 3000;

// Create a new express application instance
const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log(`Server is listening on port ${port}!`);
});

export default app;