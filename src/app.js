const fs = require('fs');
const {Observable, from} = require('rxjs');
const {map, mergeMap, last} = require('rxjs/operators');

const filename = process.argv[2] || "./ressources/british-english-large";
const minNoOfWords = parseInt(process.argv[3], 10) || 4;

const defaultOptions = {encoding: 'utf8'};

const createObservableFromFile = (path, options) => {
    return Observable.create((observer) => {
        const file$ = fs.createReadStream(path, options);

        file$.on('data', (chunk) => observer.next(chunk));
        file$.on('end', () => observer.complete());
        file$.on('close', () => observer.complete());
        file$.on('error', (error) => observer.error(error));

        // there seems to be no way to actually close the stream
        return () => file$.pause();
    });
};

const createSignature = (word) => {
    return word.replace(/[^a-z]/ig, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
};

const anagrams = {};

createObservableFromFile(filename, defaultOptions)
    .pipe(
        mergeMap((chunk) => new from(chunk.split('\n'))),
        map((word) => {
            const sign = createSignature(word);
            if (!anagrams.hasOwnProperty(sign)) {
                anagrams[sign] = [];
            }
            anagrams[sign].push(word);
            return anagrams;
        }),
        last((anas) => {
            return anas;
        }),
        map((anas) => {
            const results = [];
            for (const key in anas) {
                if (anas[key].length >= minNoOfWords) {
                    results.push(anas[key].join(", "));
                }
            }
            return results;
        })
    )
    .subscribe((data) => {
        console.log(data);
    });