const express = require('express');
const connectdb = require('./config/db')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000

connectdb();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.listen(port, () => console.log(`Server running on port ${port}`));