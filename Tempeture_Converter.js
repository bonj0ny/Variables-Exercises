//Store a celsius temperature into a variable.
//Convert it to fahrenheit and output "NN°C is NN°F".
//Now store a fahrenheit temperature into a variable.
//Convert it to celsius and output "NN°F is NN°C."

let C = Math.round(Math.random(1) * 50)
let C_in_F = ${C.toFixed(0) *(1.80 + 32)}
console.log(`${C} Celsius is equal to ${C.toFixed(0) *(1.80 + 32)} Fahrenheit`)
let F = 50 
console.log(`${F} Fahrenheit is equal to ${(F.toFixed(0) -32)/1.80} Celsius`)