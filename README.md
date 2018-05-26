# Anagrams Kata

The anagrams kata is a beginners kata.

It's purpose is to get acquinted how this works.

Make the solution as well readable as possible

## Task

Create a terminal programm that reads in a list of words and prints out all anagrams.

Two words are considered anagrams if they contain the same letters in the same amount. Casing (lowercase/uppercase)
should be ignored.

Skip/delete non letter characters like a **'**

Output all anagrams line by line comma seperated like this:

```
stow, swot, tows, tows, twos, twos
```

Make the programm take the wordfile as a commandline argument.

If you get this working make the programm only output anagrams with more than 5 anagrammtic words.
Make it so you can provide the minimum amount of anagrammatic words as another commandline argument, so
it could be called like that.

```
node ./app.js ../ressources/british-english-large 5
```

If you do this the second or third time or feel very confident, create tests.

I provided an english dicitonary file in the [ressources directory](./ressources) with over 100_000 english words to read
