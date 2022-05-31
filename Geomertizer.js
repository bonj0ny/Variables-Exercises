//Calculate properties of a circle, using the definitions here.

//Store a radius into a variable.
//Calculate the circumference based on the radius, and output "The circumference is NN".
//Calculate the area based on the radius, and output "The area is NN".

let radius = 2
let circumference = 2 * Math.PI *(radius**2)
let area =  Math.PI * (radius**2)

console.log(`The circumference is ${circumference.toFixed(2)} \nThe area is ${area.toFixed(2)}`)