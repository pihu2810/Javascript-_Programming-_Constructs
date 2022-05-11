 
//The Number.MAX_VALUE property represents the maximum numeric value representable in JavaScript.
//The Number.MIN_VALUE property represents the minimum numeric value representable in JavaScript.
min = Number.MAX_VALUE
max = Number.MIN_VALUE

for (let a = 0; a < 5; a++) {
    let num = Math.floor(Math.random() * 899)+100; 
    console.log(num);
    if (num > max)
        max = num
    if (num < min)
        min=num;
}

console.log("Maximum = " + max, "\nMinimum = " + min)