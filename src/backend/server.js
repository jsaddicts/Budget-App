const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.listen(process.env.PORT, () => {
	console.log('Server is live at : ' + process.env.PORT)
})