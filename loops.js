function forLoop(array) {
  var myOutPutLine ='';
   for (var i = 0; i < 25; i++) {
   if (i === 1){
    myOutPutLine += `I am ${i} strange loop.`;
     
   } else {
     myOutPutLine -= `.` + `s.`;
   }
   }
   Console.log(myOutPutLine);
}
