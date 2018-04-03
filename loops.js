
function forLoop(array) {
  for(let i = 1; i <= 25; i++) {
    array = [];
      if(i === 1) {
      array.push('I am ' + parseInt(i) + ' strange loop.');
      } else {
      array.push('I am ' + parseInt(i) + 'strange loops.');
    }
  return array;
  }
}