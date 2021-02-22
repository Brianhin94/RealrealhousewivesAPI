require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
// const router = express.Router();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome, fellow Housewife fan!' })
});

app.use('/api', require('./controllers/housewife'));

app.listen(
    process.env.PORT || 3002,
    () => console.log(`🎧 You're listening to the smooth sounds of port ${process.env.PORT || 3002}`)
);
