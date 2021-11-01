// 1. Write a function that can print any random number between any two given numbers (including them).

function ludu(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(ludu(1, 6));

// 2. How can you order roll numbers of students in your class sequentially?

const student = ['Akash', 'Batas', 'hablu', 'pani', 'Komola'];
console.log(student.sort());

// 3. How can you order names of students in your class sequentially?

const studentId = [1, 2, 3, 4, 5, 53, 2, 13, 23, 43, 53, 1, 3];
console.log(
  studentId.sort(function (a, b) {
    return b - a;
  })
);

// 4. Write a function that can tell us whether an year is a leap year or not.

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

isLeapYear(2028);

// 5. How would you determine the number of vowels in a sentence?

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowel(sentence) {
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}

console.log(countVowel('I love Bangladesh'));

// 6. How would you extract the duplicate numbers in an array? and sorting array.

const numbers = [1, 2, 3, 4, 5, 53, 2, 13, 23, 43, 53, 1, 3];
const duplicate = numbers.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});
console.log(
  duplicate.sort(function (a, b) {
    return a - b;
  })
);

// Conditional Check

let age = 18;
age = Number(age);
if (isNaN(age)) {
  console.log('Import not a Number');
} else {
  console.log(age < 18 ? 'Too Young' : 'Old Enough');
}
