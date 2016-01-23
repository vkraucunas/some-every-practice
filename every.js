module.exports = {
  allEven : allEven,
  allSameType : allSameType,
  positiveMatrix : positiveMatrix,
  allSameVowels : allSameVowels
};

// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(function(el) {
    return (el % 2 === 0);
  });
}

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  return input.every(function (el) {
      return (typeof el === 'number');
    });
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(function (row) {
    return row.every(function (el) {
      if (el > 0) {
        return true;
      }
    });
  });
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.




//globals
  var forCompare = [];


//helper functions
var grabVowels = function(arr) {
  var vowels = ['a', 'i', 'o', 'y'];
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (arr[i] === vowels[j]) {
        newArr.push(arr[i]);
      }
    }
  }
  console.log('newArr is', newArr);
  return newArr;
};

var compare = function(arr) {
  var newArr = grabVowels(arr);
  var together = newArr.join('');
  console.log(together);
  var backwards = newArr.reverse().join('');
  console.log(backwards);
  if (together === backwards) {
    console.log('Compare is returning', true);
    return true;
  } else {
    console.log('Compare is returning', false);
    return false;
  }
};



//main function
function allSameVowels (input) {
  return input.every(function (el) {
    var newEl = el.split('');
    console.log('This is what it\'s working on', newEl);
    return compare(newEl);
    });
}





console.log(allSameVowels(['amalgim', 'zoom']));




// var booCompare = function(arr) {
//     compare(arr);
//     if (forCompare[0] === forCompare[1]) {
//       return true;
//     } else {
//       return false;
//     }
// };













