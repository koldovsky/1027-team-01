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

// 4 Understanding closures - the basic
//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript

function buildFun(n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    (function (index) {
      res.push(function () {
        return index;
      });
    })(i);
  }
  return res;
}

 //or 

function buildFun(n) {
  return Array.from({ length: n }, (ignored, index) => () => index);
}


// 5 Fun with ES6 Classes #2 - Animals and Inheritance
//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
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
  return parseFloat(circumference.toFixed(6));
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


/*Vitalii Matviienko----------------*/

//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  const arrByObj = [];
  for (var key in obj)
    {
      if (key.length === 5)
      {
        arrByObj.push(key);
      }
      if (obj[key].length === 5)
      {
        arrByObj.push(obj[key]);
      }
    }  
  return arrByObj;
}
