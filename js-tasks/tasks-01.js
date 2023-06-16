// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript

function problem(x) {
  const num = parseFloat(x);
  if (Number.isNaN(num)) {
    return "Error";
  }
  return num * 50 + 6;
}
