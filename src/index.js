/* eslint-disable no-console */

import fs from 'fs';
import cleaner from './cleaner';

fs.readFile('./data/sample.csv', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  const rows = data.split('\n').map(row => row.trim());
  const headers = rows[0].split(',').map(item => item.toLowerCase());
  for (let i = 1; i < rows.length; i++) {
  // This regex splits the record on commas not protected by quotes
    const record = rows[i].match(/(".*?"|[^",]+)(?=\s*,|\s*$)(?=\s*,|\s*$)/g);
    if (record != null) {
      for (let j = 0; j < record.length; j++) {
        // checks the cleaner module for methods applicable to the element
        if (cleaner[headers[j]]) {
          // replaces the record element with a cleaned version of the data
          record[j] = cleaner[headers[j]](record[j]);
        }
      }
      console.log(record);
    }
  }
});
