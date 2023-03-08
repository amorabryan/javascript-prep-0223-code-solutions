const age = 28;
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
const johnDoe = isAdult(age);
console.log(johnDoe);

const student1Score = 69;
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
const studentOne = didStudentPass(student1Score);
console.log(studentOne);

const student2Score = 96;
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
const studentTwo = gradeCalculator(student2Score);
console.log(studentTwo);

const season = 'winter';
function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  } else {
    return 'please enter a valid season';
  }
}
const fourSeasons = seasonMessenger(season);
console.log(fourSeasons);

const dayOfTheWeek = 'Wednesday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'have a good weekend!';
  } else {
    return "It's a weekday!";
  }
}
const ferris = dayDetector(dayOfTheWeek);
console.log(ferris);
