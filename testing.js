var badInput = ['zoom', 'oligopoly'];
var goodInput = ['amalgam', 'zoom'];
var good = 'zoom';
var bad = 'oligopoly';
var goodNewEl = good.split('');
var forCompare = [];
var newArr = [];


var grabVowels = function(arr) {
  var vowels = ['a', 'i', 'o', 'y'];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (arr[i] === vowels[j]) {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
};



var compare = function(arr) {
  grabVowels(arr);
  var together = newArr.join('');
  var backwards = newArr.reverse().join('');
  if (together === backwards) {
    forCompare.push(true);
  } else {
    forCompare.push(false);
  }
};

var booCompare = function(str) {
    var anotherArr = str.split('');
    compare(anotherArr);
    if (forCompare[0] === forCompare[1]) {
      return true;
    } else {
      return false;
    }
};

console.log(booCompare(good));

