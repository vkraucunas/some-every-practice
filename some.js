module.exports = {
  anyGreaterThan10 : anyGreaterThan10,
  longWord : longWord,
  truePossibilities : truePossibilities,
  lostCarcosa : lostCarcosa
};

// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some(function (el) {
    return (el > 10);
  });
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(function (el) {
    return (el.length > 10);
  });
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some(function (row) {
    return row.some(function (el) {
      return (el);
    });
  });
}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input.some(function (str) {
      if (str.indexOf('Lost') === -1) {
        return false;
      } else {
        return true;
      }
    });



}





