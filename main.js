function differentSymbolsNaive(str) {
   let uniques = {}
   str.split("").forEach(s => {
      if (!uniques[s]){
         uniques[s] = true
      }
   })
   return Object.keys(uniques).length
}



/**
* Test Suite 
*/
describe('differentSymbolsNaive()', () => {
   it('returns count of unique characters', () => {
       // arrange
       const str = 'cabca';
       
       // act
       const result = differentSymbolsNaive(str);

       // log
       console.log("result: ", result);
       
       // assert
       expect(result).toBe(3);
   });
});