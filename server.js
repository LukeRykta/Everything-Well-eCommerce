const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


const port = process.env.PORT || 5000;

// Connect to the database
mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use('/api', require('./routes/todo'));

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

const hostname = '127.0.0.1';
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});