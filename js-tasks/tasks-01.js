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

