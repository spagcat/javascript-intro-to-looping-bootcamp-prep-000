
function forLoop(array) {
  var myArray = array;
  for(let i = 0; i < 25; i++) {
      if(i === 1) {
      myArray.push(`I am 1 strange loop.`);
      } else {
      myArray.push(`I am ${i} strange loops.`);
    }
  return myArray;
  }
}