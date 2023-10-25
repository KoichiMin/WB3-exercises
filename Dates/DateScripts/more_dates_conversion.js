"use strict"

let birthday = new Date("11/13/1994")
let date = birthday.toLocaleString()
console.log(date)

let momBday = new Date("Jul 20 1960");
let newDate = momBday.toLocaleString()
console.log(newDate)

let dadBday = new Date("1957, 07, 26")
let newNewDate = dadBday.toLocaleString()
console.log(newNewDate)