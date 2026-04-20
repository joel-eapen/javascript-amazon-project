import { formatCurrency } from "../scripts/utils/money.js";
console.log('test suite for money.js');
console.log("Testing formatCurrency function...");

if(formatCurrency(2095) === "20.95") {
    console.log("Test passed");
} else {
    console.log("Test failed");
}

if(formatCurrency(0) === "0.00"){
    console.log("Test passed");
} else {
    console.log("Test failed");
}

if(formatCurrency(2000.4) === "20.00") {
    console.log("Test passed");
}   else {
    console.log("Test failed");
}