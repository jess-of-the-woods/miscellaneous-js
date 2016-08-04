function reverseString(str) {
  newStr = str.split("");
  newStr.reverse();
  var joined = newStr.join("");
  console.log('joined', joined, 'typeof: ', typeof joined);
  str = String(joined);
  return str;
}

reverseString("why hello!");
