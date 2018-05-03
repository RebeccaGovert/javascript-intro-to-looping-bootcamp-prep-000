function forLoop(array) {
  var results = 'I am ';
  for (let i=0; i<25; i++) {
    if (i===1){
    results.push('I am ' + i + ' strange loop.');
  } else {
    if (i>1) {
     results.push('I am ${i} strange loops.`);
    }
  }
  }
}