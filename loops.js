function forLoop(array) {
  var resultsArray= [];
  var count = 0;
    var myOutputLine = `I am ${i} strange loop`;
  for (var i=0; i<array.length; i++) {
    if (i === 1) {
      myOutputLine += `.`;
    resultsArray.push(myOutputLine);
      
    } else if (i>1 && i<26) {
      var newOutputline = myOutputLine += `s.`;
      count++;
      resultsArray.push(newOutputline);
  }
  return resultsArray;
}
}