#!/usr/bin/node

const app = require('express')();
const countStudents = require('./3-read_file_async');
const port = 1245;

app.get('/', (request, response) => response.send('Hello Holberton School!'));
app.get('/students', async (req, response) => {
  const title = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    response.send(`${title}${data.join('\n')}`);
  } catch (error) {
    response.send(`${title}${error.message}`);
  }
});
app.listen(port);
module.exports = app;
