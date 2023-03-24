const numbers = []
const genap = []
const ganjil = []

let jumlah_index = 100

//Generate 100 random numbers from 1 - 50
for(x = 0; x < jumlah_index; x++){
    numbers.push(Math.floor((Math.random() * 50) + 1))
}
console.log(numbers)
console.log("---------------------------------------")

//Spliter of even and odd Numbers
    for (var i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 == 0){
            genap.push(numbers[i])
        } else {
            ganjil.push(numbers[i])
        }
    }

//Function of total / sum
function sumortotal(arguments){
    let sum = 0
    for (let q = 0; q < arguments.length; q++){
        sum += arguments[q]
    }
    return sum;
}

//Function of minimum
function minimumar(arguments){
    min = Infinity;
    for (let minx = 0; minx < arguments.length; minx++){
        if (arguments[minx] < min) {
            min = arguments[minx]
            
        }
    }
    return min;
}
//Function of maximum
function maximumar(arguments){
    max = -Infinity;
    for (let maxy = 0; maxy < arguments.length; maxy++){
        if (arguments[maxy] > max) {
            max = arguments[maxy]
        }
    }
    return max;
}

//Average code
let avggenap = sumortotal(genap) / genap.length
let avgganjil = sumortotal(ganjil) / ganjil.length

console.log(genap)
console.log("Genap : total = " + sumortotal(genap))
console.log("Genap : rata-rata = " + avggenap)
console.log("Genap : Minimum = " + minimumar(genap))
console.log("Genap : Maximum = " + maximumar(genap))

console.log(ganjil)
console.log("Ganjil : total = " + sumortotal(ganjil))
console.log("Ganjil : rata-rata = " + avgganjil)
console.log("Ganjil : Minimum = " + minimumar(ganjil))
console.log("Ganjil : Maximum = " + maximumar(ganjil))

console.log("---------------------------------------")
//comparison
if (sumortotal(genap) < sumortotal(ganjil)){
    console.log("Perbandingan total ganjil lebih besar")
} else {
    console.log("Perbandingan total genap lebih besar")
}
if (avggenap < avgganjil){
    console.log("Perbandingan rata-rata ganjil lebih besar")
} else {
    console.log("Perbandingan rata-rata genap lebih besar")
}
if (minimumar(genap) < minimumar(ganjil)){
    console.log("Perbandingan minimum ganjil lebih besar")
} else {
    console.log("Perbandingan minimum genap lebih besar")
}
if (maximumar(genap) < maximumar(ganjil)){
    console.log("Perbandingan maximum ganjil lebih besar")
} else {
    console.log("Perbandingan maximum genap lebih besar")
}
console.log("---------------------------------------")