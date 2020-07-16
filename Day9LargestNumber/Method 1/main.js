function largestNumber(num) {
    const place = ;
    
    for(let i = 0; i < num; i++) {
         place = place.concat('9');
    }
    
    
    return parseInt(place);
}



/**
* Test Suite 
*/
describe('largestNumber()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const num = 2;
        
        // act
        const result = largestNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(99);
    });
});