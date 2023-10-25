"use strict"

// let fullName = "Brenda Kaye";
// let fullName = "Ian Auston";
let fullName = "Siddalee Grace";


let spaceInName = fullName.indexOf(" ");

let firstName = fullName.substring(0, spaceInName);
let lastName = fullName.substring(spaceInName + 1);

console.log(`Full Name: ${fullName}, First Name: ${firstName}, Last Name: ${lastName}`)

