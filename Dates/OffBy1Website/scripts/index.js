window.onload = init;

let buttonConvert;
function init(){
    buttonConvert = document.getElementById('buttonConvert');
    buttonConvert.onclick = buttonClick;
}

function buttonClick(){
    const inputDate = document.getElementById('inputDate').value;
    
    let dateObj = new Date(inputDate);

    let date = dateObj.toString();


    let outputDate = document.getElementById('outputDate');
    outputDate.innerText = date;


}