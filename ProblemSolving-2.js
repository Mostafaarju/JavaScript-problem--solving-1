const sentence =
  'Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. if you are just getting started in web development, Learn with sumit has all the tools you need to learn the newest and most popular technologies.';

const matches = sentence.match(/sumits/gi);
const occurrences = matches ? matches.length : 0;
// console.log(occurrences);

let position = sentence.search(/sumit/i);
position = position >= 0 ? position : 'not found!';
console.log(position);

function linearSearch(arr, val) {
  // Optimize code
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return 'Not Found!';
}
console.log(linearSearch(['a', 'b', 'c', 'd'], 'z'));

function longestString(names) {
  let longestWord = '';

  for (name of names) {
    if (name.length > longestWord.length) {
      longestWord = name;
    }
  }
  return [longestWord, names.indexOf(longestWord)];
}
console.log(
  longestString([
    'Jamal Uddin',
    'Kamal Uddin',
    'Hanif Talukder',
    'A Lot of names',
  ])
);

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Buzz`);
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(100);

const mixedArray = [
  'lws',
  undefined,
  'learn with sumit',
  false,
  '',
  'Apple',
  40,
  'k',
  true,
  'Thanks',
  NaN,
];

const trueArray = mixedArray.filter(function (el) {
  if (el) {
    return true;
  } else {
    return false;
  }
});

console.log(trueArray);

// or

const trueArr = mixedArray.filter(Boolean);

console.log(trueArr);

const obj = {
  a: 'lws',
  b: undefined,
  c: 'learn with sumit',
  d: false,
  e: '',
  f: 'Apple',
  g: 40,
  h: 'k',
  i: true,
  j: 'Thanks',
  k: NaN,
};

const truthyObj = function (obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};

console.log(truthyObj(obj));

// let maxNumb = Math.max.apply(null, [2, 4, 5, 6, 85, 34, 23, 9]);

let maxNumb = Math.random.apply(null, [2, 4, 5, 6, 85, 34, 23, 9]);

console.log('MaxNumb' + ' ' + maxNumb);
