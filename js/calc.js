function add(num1, num2) {
    return Number(num1) + Number(num2)
}
document.getElementById('addButton').addEventListener('click', function () {
    var num1 = document.getElementById('firstValue').value
    var num2 = document.getElementById('secondValue').value

    var answer = add(num1, num2)

    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = '';
})
//subtract
function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}
document.getElementById('subtractButton').addEventListener('click', function () {
    var num1 = document.getElementById('firstValue').value
    var num2 = document.getElementById('secondValue').value

    var answer = subtract(num1, num2)

    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = '';
})
//divide
function divide(num1, num2) {
    return Number(num1) / Number(num2)
}
document.getElementById('divideButton').addEventListener('click', function () {
    var num1 = document.getElementById('firstValue').value
    var num2 = document.getElementById('secondValue').value

    var answer = divide(num1, num2)

    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = '';
})
// multiply
function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}
document.getElementById('multiplyButton').addEventListener('click', function () {
    var num1 = document.getElementById('firstValue').value
    var num2 = document.getElementById('secondValue').value

    var answer = multiply(num1, num2)

    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = '';
})
function remainder(num1, num2) {
    return Number(num1) % Number(num2)
}
document.getElementById('remainderButton').addEventListener('click', function () {
    var num1 = document.getElementById('firstValue').value
    var num2 = document.getElementById('secondValue').value

    var answer = remainder(num1, num2)

    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = '';
})

function increment(num1, num2) {
    return Number(num1) = Number(num2++)
}
document.getElementById('incrementButton').addEventListener('click', function () {
    var num1 = document.getElementById('firstValue').value
    var num2 = document.getElementById('secondValue').value

    var answer = increment(num1, num2)

    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = '';
})
function decrement(num1, num2) {
    return Number(num1) = Number(num2--)
}
document.getElementById('decrementButton').addEventListener('click', function () {
    var num1 = document.getElementById('firstValue').value
    var num2 = document.getElementById('secondValue').value

    var answer = decrement(num1, num2)

    document.getElementById('firstValue').value = answer
    document.getElementById('secondValue').value = '';
})

document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('firstValue').value = '';
    document.getElementById('secondValue').value = '';
})

var answer
answer = (add(40, 110))
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)
answer = remainder(answer, 2)
console.assert(answer === 1)
answer = increment(answer, 2)
console.assert(answer === 2)
answer = decrement(answer, 2)
console.assert(answer === 2)
