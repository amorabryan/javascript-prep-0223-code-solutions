function whileLoop1() {
  let i = 0;
  const array = [];
  while (i < 10) {
    array.push(i);
    i++;
  } return array;
}
whileLoop1();
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  let j = 0;
  const array = [];
  while (j < 20) {
    array.push(j);
    j += 2;
  } return array;
}
whileLoop2();
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  } return array;
}
forLoop1();
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion:', i, '!');
  }
}
forLoop2();

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};

function forInLoop1(object) {
  const array = [];
  for (const i in object) {
    array.push(i);
  } return array;
}
forInLoop1(object);
console.log('forInLoop1 output', forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const i in object) {
    array.push(object[i]);
  } return array;
}
forInLoop2(object);
console.log('forInLoop2 output', forInLoop2(object));
