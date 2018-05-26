/* of course you should require this from somewhere!! */
const generateSignature = (word) => {
    // only working for non accentuated, non heavy metal umlauted languages, e.g. english
    word = word.replace(/\W/g, '');
    return word.toLowerCase().split('').sort().join('')
};

describe('the anagram getSignature function', () => {
    it('should calculate the same signature', () => {
        const anagrams = [
            ['care', 'race'],
            ['Care', 'Race'],
            ["Care's", "Races"],
            ['CARE', 'race'],
            ['Shoe', 'Hose'],
            ['a', 'a'],
            ['A', 'a'],
            ['ab-cde', 'edcba'],
            ['--abcde', 'edcba+'],
            ['AbCdE', 'EdBcA']
        ];

        anagrams.forEach(pairs => {
            const sigA = generateSignature(pairs[0]);
            const sigB = generateSignature(pairs[1]);

            expect(sigA).toEqual(sigB);
        });
    });

    it('should calculate different signatures', () => {
        const nonAnagrams = [
            ['Race', 'Car'],
            ['Pretty', 'Woman'],
            ['CAREi', 'ICar'],
            ['Aabc', 'Abbc'],
            ['A', 'B'],
            ['-a', 'EdBcA']
        ];

        nonAnagrams.forEach(pairs => {
            const sigA = generateSignature(pairs[0]);
            const sigB = generateSignature(pairs[1]);

            expect(sigA).not.toEqual(sigB);
        });
    })
});
