// 1- Messi goals function
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 2 Make negative
function makeNegative(num) {
  return -Math.abs(num);
}

//3-Grasshopper - Terminal game move function
function move(position, roll) {
  return position += roll * 2
}
// 4 Personalized Message
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
// 5 Keep Hydrated 
function litres(time) {
  return ~~(time/2);
}

//6 -Opposites Attract
function lovefunc(flower1, flower2)
{
  return flower1 % 2 !== flower2 %2;
}


/*__________________________________________________________*/










//Sergii Orlov
// 1- Messi goals function
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
// 2- Return Negative
function makeNegative(num) {
  return (Math.sign(num) === 1) ? -num : num;
}
//3-Grasshopper - Terminal game move function
function move(position, roll) {
  return position += roll * 2
}
//4-Grasshopper - Personalized Message
function greet(name, owner) {
  return (name === owner) ? "Hello boss" : "Hello guest";
}
//5- Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}
//6 -Opposites Attract
function lovefunc(flower1, flower2) {
  return (flower1 % 2 != flower2 % 2) ? true : false;
}
/*---------------------------------------------------------*/

//Yyliia Antsybor

//1- Messi goals function
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 2- Return Negative
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//4-Grasshopper - Personalized Message
function greet(name, owner) {
  if (name == owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

//5- Keep hydrated
function litres(time) {
  let liters = time * 0.5;
  let roundedLiters = Math.floor(liters);
  return roundedLiters;
}
// Opposite attract
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// Grachov Bogdan

// https://www.codewars.com/kata/55f73be6e12baaa5900000d4 ( Messi goals function )

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102 ( Return Negative )

function makeNegative(num) {
  if (num > 0) {
    return 0 - num;
  } else {
    return num;
  }
}

// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2  ( Terminal game move function )

function move(position, roll) {
  return roll * 2 + position;
}

// https://www.codewars.com/kata/5772da22b89313a4d50012f7 (  Personalized Message )

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// https://www.codewars.com/kata/582cb0224e56e068d800003c ( Keep Hydrated! )

function litres(time) {
  return Math.floor(time * 0.5);
}

// https://www.codewars.com/kata/555086d53eac039a2a000083  ( Opposites Attract )

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Taras Kraveyskyi 
// 1 Messi Goals
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 2 Make negative
function makeNegative(num) {
  return -Math.abs(num);
}
 
// 3 Game Move 
function move (position, roll) {
  return position + roll * 2
}

// 4 Personalized Message
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// 5 Keep Hydrated 
function litres(time) {
  return ~~(time/2);
}

// 6 Opposites Attract
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0) !== (flower2 % 2 === 0);
}

//Alina Denysenko 
function makeNegative(num) {
if (num<0)
{return num;}
else
{return -num;}
}

function lovefunc(flower1, flower2)
{
  return flower1 % 2 !== flower2 %2;
}







