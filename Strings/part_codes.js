"use strict"

// let supplierInfo = "ACME:123-L"
// let supplierInfo = "DI:12345-M"
let supplierInfo = "ACE:1-12"

let supplier;
let productNumber;
let size;


function getInfo(){
    let findColon= supplierInfo.indexOf(":")
    let findDash = supplierInfo.indexOf("-")

    function getSupplier(){
        // that returns all characters before the :
        supplier = supplierInfo.substring(0, findColon)
        console.log(`Supplier Code : ${supplier}`)
    }
    function getProductNumber(){
        // that returns all characters between the : and -
        productNumber = supplierInfo.substring(findColon + 1, findDash)
        console.log(`Product Number : ${productNumber}`)
    }
    function getSize(){
        // that returns all characters after the -
        size = supplierInfo.substring(findDash + 1)
        console.log(`Size : ${size}`)
    }
    getSupplier();
    getProductNumber();
    getSize();

    
}

getInfo()

