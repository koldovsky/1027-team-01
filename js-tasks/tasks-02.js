// Grachov Bogdan
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript ( Convert a string to an array )

function stringToArray(string) {
    return string.split(" ");
  }
  
  // https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript ( DNA to RNA Conversion )
  
  function DNAtoRNA(dna) {
    let arr = dna.split("");
    for (let i = 0; i < arr.length; i++) {
      arr[i] === "T" ? (arr[i] = "U") : arr[i];
    }
    return arr.join("");
  }
  
  // https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript ( Find Maximum and Minimum Values of a List )
  
  var min = function (list) {
    list.sort((a, b) => a - b);
    return list[0];
  };
  
  var max = function (list) {
    list.sort((a, b) => b - a);
  
    return list[0];
  };
  
  // https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript ( Smallest value of an array )
  
  function min(arr, toReturn) {
    if (toReturn === "value") {
      return Math.min(...arr);
    } else {
      return arr.indexOf(Math.min(...arr));
    }
  }
  
  // https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript ( A wolf in sheep's clothing )
  
  function warnTheSheep(queue, reverseQueue, foundWolf) {
    if (queue[queue.length - 1] === "wolf") {
      return "Pls go away and stop eating my sheep";
    } else {
      reverseQueue = queue.reverse();
      foundWolf = reverseQueue.findLastIndex((item) => item === "wolf");
      return `Oi! Sheep number ${foundWolf}! You are about to be eaten by a wolf!`;
    }
  }
  
  // https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript ( Beginner - Lost Without a Map )
  
  function maps(x) {
    return x.map((item) => (item *= 2));
  }
  
  // https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript (Find the first non-consecutive number )
  
  function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) {
        return arr[i];
      }
    }
    return null;
  }


/*VitaliiMatviienko------------*/

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  return Math.min.apply(null, list);
};

var max = function (list) {
  return Math.max.apply(null, list);
};

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : toReturn === "index"
    ? arr.indexOf(Math.min(...arr))
    : "";
}

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  if (queue.indexOf("wolf") === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else if (queue.indexOf("wolf") < queue.length - 1) {
    return (
      "Oi! Sheep number " +
      (queue.length - queue.indexOf("wolf") - 1) +
      "! You are about to be eaten by a wolf!"
    );
  }
}

//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
  let xArr = [];
  for (let i = 0; i < x.length; i++) {
    xArr[i] = x[i] * 2;
  }
  return xArr;
}

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  if (arr.length - 1 == arr[arr.length - 1] - arr[0]) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1] - 1) return arr[i + 1];
    }
  }
}

//Yuliia Antsybor----------------*/

//1--Convert a string to an array--
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript 

function stringToArray(string) {
  const wordArray = string.split(" ");
  return wordArray;
}

//2--DNA to RNA Conversion--
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}


//3--Find Maximum and Minimum Values of a List--
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//4--Smallest value of an array--
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const value = Math.min(...arr);
  return toReturn == "value" ? value : arr.indexOf(value);
}

//Taras Kravetskyi
//1--Convert a string to an array--
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript 
function stringToArray(string){
return string.split(' ');
}

//2--DNA to RNA Conversion--
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  let array = dna.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "T") {
      array[i] = "U";
    }
  }
  return array.join("");
}

//3--Find Maximum and Minimum Values of a List--
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}

//4--Smallest value of an array--
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const minNumber = Math.min(...arr)
  
  if (toReturn === "value") {
    return minNumber;
  } else if (toReturn === "index") {
    return arr.indexOf(minNumber);
  }
}

//5--A wolf in sheep's clothing--
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  if (position === 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
  }
}











