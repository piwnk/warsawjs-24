const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./router');

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);
app.listen(port, () => console.log(`Example app listening on port ${port}`));
