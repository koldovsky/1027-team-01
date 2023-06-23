/*Taras Kravetskyi*/
// 1 Find the smallest integer in the array
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// 2 Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  const circumference = 2 * Math.PI * circle.radius;
  return Number(circumference.toFixed(6));
}

// 3 Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const arr = [];
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }

    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

/*Grachov Bogdan*/

// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript ( Find the smallest integer in the array )

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript ( Geometry Basics: Circle Circumference in 2D )

function circleCircumference(circle) {
  const circumference = 2 * Math.PI * circle.radius;
  return circumference;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript (Training JS #12: loop statement --for..in and for..of)

function giveMeFive(obj) {
  const resultArray = [];
  for (let key in obj) {
    if (key.length === 5) resultArray.push(key);
    if (obj[key].length === 5) resultArray.push(obj[key]);
  }
  return resultArray;
}


/*Yuliia Antsybor__________*/

//Find the smallest integer in the array
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//Geometry Basics: Circle Circumference in 2D
//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  const { radius } = circle;
  let circumference = 2 * Math.PI * radius;
  return parseFloat(circumference.toFixed(6));
}
