module.exports = function romanize(num){
  var romanList = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    romanNum = "",
    i;
  for (i in romanList) {
    while (num >= romanList[i]) {
      romanNum += i;
      num -= romanList[i];
    }
  }
  return romanNum;
}

// console.log(romanize(100));



