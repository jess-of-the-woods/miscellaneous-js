var countChar = function (str, letter) {
  var result = ''
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      result++
    }
  }
//  console.log(result + ' ' + letter)
  return result + ' ' + letter
}

var countBs = function (str) {
  return countChar(str, 'b')
}

countBs('bbbhello')

// eloquent javascript chapter 3 exercise