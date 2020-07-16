// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //first answer
        return str.split('').reverse().join('');
}

module.exports = reverse;

//second answer
    // let reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;
//thrid answer
    //return str.split('').reduce((rev, char) => char + rev, '');