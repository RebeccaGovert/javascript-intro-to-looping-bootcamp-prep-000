function forLoop(givenArray) {
  var strangeArray = [];
  var count = 0;
  for(var i=0; i<27;i++) {
    if (i === 1) {
      strangeArray.push("I am 1 strange loop.");
    }
    if (i>1) {
      strangeArray.push(`I am ${i} strange loops.`);
      count++;
  }
  }
  return strangeArray;
}