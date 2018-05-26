const fs = require('fs');

fs.readFile('../ressources/british-english-large', (err, data) => {
    if (err) {
        console.warn('An ERROR ocurred: ', err);
        return;
    }
    const anagrams = {};
    data.toString().split(/\r?\n/).forEach(word => {

        word = word.replace(/\W/, '');
        word = word.toLowerCase();

        const key = word.split('').sort().join('');
        if (!anagrams[key]) {
            anagrams[key] = [];
        }

        anagrams[key].push(word);
    });

    Object.keys(anagrams).forEach(key => {
        if (anagrams[key].length > 5) {
            console.log(anagrams[key].join(', '));
        }
    });
});