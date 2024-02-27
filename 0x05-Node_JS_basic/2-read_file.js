#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  // try {
  //   const contents = fs.readFileSync(path, 'utf-8');
  //   const r = contents.trim().split('\n');

  //   const dataObj = {};

  //   console.log(`Number of students: ${r.length - 1}`);
  //   for (let i = 1; i < r.length; i += 1) {
  //     const key = r[i].split(',')[3];
  //     const value = r[i].split(',')[0];
  //     if (key in dataObj) {
  //       dataObj[key].push(value);
  //     } else {
  //       dataObj[key] = [value];
  //     }
  //   }
  //   for (const [key, value] of Object.entries(dataObj)) {
  //     const numStudents = value.length;
  //     console.log(`Number of students in ${key}: ${numStudents}. List: ${value.join(', ')}`);
  //   }
  // } catch (err) {
  //   console.log('Cannot load the database');
  // }
  if (fs.existsSync(path)) {
    try {
      const data = fs.readFileSync(path, 'utf8');

      const rows = data.trim().split('\n');

      const dataObj = {};

      for (let i = 1; i < rows.length; i += 1) {
        const [firstname, lastname, age, field] = rows[i].split(',');

        if (firstname && lastname && age && field) {
          dataObj[field] = (dataObj[field] || 0) + 1;
        }
      }

      console.log(`Number of students: ${Object.values(dataObj).reduce((acc, count) => acc + count, 0)}`);

      for (const field of Object.keys(dataObj)) {
        if (Object.prototype.hasOwnProperty.call(dataObj, field)) {
          const count = dataObj[field];
          const studentsList = rows
            .slice(1)
            .filter((row) => row.split(',')[3] === field)
            .map((row) => row.split(',')[0]);
          console.log(`Number of students in ${field}: ${count}. List: ${studentsList.join(', ')}`);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
