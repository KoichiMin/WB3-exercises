"use strict"

function getDate(){
    let d = new Date();
    let day = d.getDate()
    const months = ["January", "February", "March", "April",
                    "May", "June", "July", "August", "September",
                    "October", "November", "December"];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = daysOfWeek[d.getDay()]
    console.log(`${day}-${month}-${year}(${weekDay})`)


}

getDate()