const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/items');
const cors = require('cors');


const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/items", itemsRouter);


//nodemon is for watching the server.js. On change refresh the server
//npm run dev to start the server

app.listen(PORT, () => {
    console.log(`This is runnig on port: ${PORT}`);
})