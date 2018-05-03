function forLoop(array) {
 var count= 0;
 var i = 0;
 var myString = ``;
 var newArray= [];
 for (i=0; i<array.length; i++) {
   if(i===1) {
   myString = `I am ${i} strange loop.` ;
   newArray.push(myString);
    } 
 if (i>1 && i<25) {
     myString = `I am ${i} strange loops.`
     count++;
     newArray.push(myString);
   }
   }
 }
}