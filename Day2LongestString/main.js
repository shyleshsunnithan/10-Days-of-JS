function allLongestStrings(arr) {
    const longestWords = [];
    let longestLen = 0;
    
    for(let word of arr) {
        longestLen = word.length > longestLen ? word.length : longestLen;
    }
    
   for(let word of arr) {
       if(longestLen === word.length) {
           longestWords.push(word)
       }
   }
    
    return longestWords;
}



/**
* Test Suite 
*/
describe('allLongestStrings()', () => {
    it('returns all longest strings', () => {
        // arrange
        const strings = ["aba", "aa", "ad", "vcd", "aba", "a"];
        
        // act
        const result = allLongestStrings(strings);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["aba", "vcd", "aba"]);
    });
});