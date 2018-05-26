# Anagrams Kata

The anagrams kata is a beginners kata.

It's purpose is to get acquinted how this works.

Make the solution as well readable as possible

Since the kata is **not** about showing how smart you are, but about learning to do the solution
_as well as possible_, I give you a hint on how you can determine if two words are anagrams.

Two words are anagrams if they have the same "signature"

```javascript
const generateSignature = (word) => {
    // only working for non accentuated, non heavy metal umlauted languages, e.g. english
    word = word.replace(/\W/g, '');
    return word.toLowerCase().split('').sort().join('')
};
```

## Task

1. Try this kata as a NodeJS commandline programm.
1. Dont install any external modules, but use the default
1. Create a terminal programm that reads in a list of words and prints out all anagrams.<br/>
  Two words are considered anagrams if they contain the same letters in the same amount. Casing
  (lowercase/uppercase) should be ignored.<br/>
  Skip/delete non letter characters like a **'**
1. Output all anagrams line by line comma seperated like this:
  `stow, swot, tows, twos`

### additionals

if you got time, add these features to it

1. add tests for your functions/classes/methods
  I already set up the testing with [jasemine](https://jasmine.github.io/api/3.0/global)
  so you can run all tests wit `npm run test`
1. Make the programm take the wordfile as a commandline argument.
1. Make the programm output only anagramms that have more than 5 annagrammatic words
1. Make the programm take another commandline parameter, that is the number of annagrammatic words that are
  the minimum to get printed
1. add a counter to the output (how many annagrammatic words per line)
1. add a counter as last row, how many annagram lines were printed

## Discuss

- what was the most cumbersome in this kata? in nodejs?
- how much effort was it to put some additionals in?
- how much did you have to change existing functions/classes/methods/signatures to fit in
  more/other functionality?