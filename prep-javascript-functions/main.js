function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbersResult:', addTwoNumbersResult);

function convertHourstoMinutes(hours) {
  return (60 * hours);
}
const convertHourstoMinutesResult = convertHourstoMinutes(2);
console.log('convertHourstoMinutesResult:', convertHourstoMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
const getGreetingResult = getGreeting('World');
console.log('getGreetingResult:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5Result:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5Result:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbersResult:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}
const getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumferenceResult:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('John', 'Cena');
console.log('fullName:', fullName);

function cube(number) {
  return number * number * number;
}
const cubeResult = cube(5);
console.log('cubeResult:', cubeResult);
