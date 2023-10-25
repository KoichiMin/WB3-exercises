"use strict"

let d = new Date("10-9-2022");

let date = d.toString();
console.log(date)

let dateString = d.toDateString()
console.log(dateString)

let UtcString = d.toUTCString()
console.log(UtcString)

let localString = d.toLocaleString()
console.log(localString)

