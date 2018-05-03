function forLoop(array) {
  var resultsArray= [];
  var count = 0;
  var myOutputLine = `I am ${i} strange loop`;
  for (var i=0; i<array.length; i++) {
    if (i === 1) {
      myOutputLine += `.`
      
    } else if (i[count]>1 && i[count]<26) {
      var newOutputline = myOutputLine += `s.`;
      count++;
      
  }
  return resultsArray.push(myOutputLine) + (newOutputline);
}
}