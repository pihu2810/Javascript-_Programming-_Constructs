const prompt = require('prompt-sync')();
let num = prompt("Enter a number : ");

if (num >= 1 && num <= 9) {
    console.log("units");
}
else if (num >= 10 && num <= 99) {
    console.log("Ten");
}
else if (num >= 100 && num <= 999) {
    console.log("Hundreds");
}
else if (num >= 1000 && num <= 9999) {
    console.log("Thousands");
}
else if (num >= 10000 && num <= 99999) {
    console.log("Ten thousands");
}

else  (num >= 100000 && num <= 999999); {
console.log("Lakhs")
}
