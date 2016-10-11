function FizzBuzz(n) {
  var string = '';
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            string += 'fizzbuzz'
        }
        else if (i % 3 === 0) {
            string += 'fizz'
        }
        else if (i % 5 === 0) {
            string += 'buzz'
        }
        else {
            string += '.'
        }
    }
  return string
}
console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
