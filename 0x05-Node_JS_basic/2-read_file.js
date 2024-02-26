#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    const contents = fs.readFileSync(path, 'utf-8');
    const r = contents.trim().split('\n');

    const dataObj = {};

    console.log(`Number of students: ${r.length - 1}`);
    for (let i = 1; i < r.length; i += 1) {
      const key = r[i].split(',')[3];
      const value = r[i].split(',')[0];
      if (key in dataObj) {
        dataObj[key].push(value);
      } else {
        dataObj[key] = [value];
      }
    }
    for (const [key, value] of Object.entries(dataObj)) {
      const numStudents = value.length;
      console.log(`Number of students in ${key}: ${numStudents}. List: ${value.join(', ')}`);
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
