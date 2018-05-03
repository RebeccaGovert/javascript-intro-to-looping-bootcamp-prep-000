function forLoop(array) {
 var count= 0;
 var i = 0;
 var myString = ``;
 var newArray= [];
 for (i=0; i<25; i++) {
   if(i===1) {
   myString = `I am 1 strange loop.` ;
   newArray.push(myString);
    } 
 if (i>1 i<25) {
     myString = `I am ${i} strange loops.`
     count++;
     newArray.push(myString);
   }
   }
 return myArray;
}

/*
const [array, t] = makeArray()
      const strangeArray = forLoop(array)

      expect(strangeArray.length).to.equal(t + 25)

      const testArray = strangeArray.slice(array.length)

      for (let i = 0, l = testArray.length; i < l; i++) {
        let s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`
        expect(testArray[i]).to.equal(s)
        */