const person = {
  firstName: 'John',
  lastName: 'Cena',
  hobby: 'wrestling'
};
console.log(person);

const fullName = (person.firstName + ' ' + person.lastName);
console.log("The person's name is:", fullName);

person.job = 'movie actor';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'wrestler';
console.log("The person's previous job is:", person['previousJob']);

console.log(person);
