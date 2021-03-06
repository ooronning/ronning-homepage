'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('common'));
app.use(express.static('./build'));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`now listening on ${listener.address().port}`)
});