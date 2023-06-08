
// 1 Задание
let a = prompt("Введите сумму")
if (a <= 200) { 
    let b = a * 0.03
    alert(a - b)
} if (a <= 300) { 
    let b = a * 0.05
    alert(a - b)
} if (a <= 500) { 
    let b = a * 0.07
    alert(a - b)
}

// 2 Задание 
let pi = 3.14
let Circle = prompt("Введите длину окружности")
let Square = prompt("Введите периметр квадрата")
var ansSq = Number(Square) / 4 * 2
var ansCircle = Number(Circle)**2 /(4 * pi)
if (ansCircle > ansSq){
    alert('Этот круг не поместится')
} else {
    alert("Этот круг поместится")
}

let ac= console.log(hello);


 


