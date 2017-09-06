/* eslint-disable no-unused-vars, no-param-reassign */
export default {

  zip(zipString) {
    while (zipString.length < 5) {
      zipString = `0${zipString}`;
    }
    return zipString;
  },
  name(nameString) {
    return nameString.toLowerCase().replace(/(^| )(\w)/g, s => s.toLocaleUpperCase());
  },
  address(addressString) {
    const a = '\u{100}';
    const b = '\u{10FFF0}';
    const replacement = '\u{FFFD}';
    const re = new RegExp(`[${a}-${b}]`, 'g');
    return addressString.replace(re, replacement);
  },
  duration(timeString) {
    const time = timeString.split(':').map(item => parseFloat(item));
    return time[2] + (time[1] * 60) + (time[0] * 60 * 60);
  },
  fooduration(timeString) {
    return this.duration(timeString);
  },
  barduration(timeString) {
    return this.duration(timeString);
  },

};
