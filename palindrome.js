function palindrome(str) {
  var newStr = str.toLowerCase();
  var noSpace = newStr.replace(/ /gi,"").replace(/\W/gi, "").replace(/,/gi, "").replace(/_/, "");
  console.log(noSpace);
  
  var nextStr = noSpace.split("");
  nextStr.reverse();
  var joined = nextStr.join("");
  str = String(joined);
  var reverseString = str;
  
  if (reverseString === noSpace) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
