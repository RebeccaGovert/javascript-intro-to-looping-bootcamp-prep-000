function forLoop(givenArray) {
  var strangeArray = [];
  var count = 0;
  for(var i=1;i<givenArray.length;i++) {
    if (i === 1) {
      strangeArray.push("I am 1 strange loop.");
    }
    if (i>1 && i<26) {
      strangeArray.push(`I am ${i} strange loops.`);
      count++;
  }
  }
  return strangeArray;
}