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

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.height = 800;
canvas.width = 800;

let cpX = 0;
let cpY = 0;

c.translate(canvas.width / 2, canvas.height / 2);

function yellowShapes(rotationRate) {
  const gradient = c.createLinearGradient(cpX, cpY - 281, cpX, cpY - 338);
  gradient.addColorStop(0, '#fecd3a');
  gradient.addColorStop(1, '#fddb95');

  c.save();
  c.rotate(rotationRate);

  for (let ii = 0; ii < 16; ii++) {
    c.rotate(Math.PI * 0.125);

    c.beginPath();
    c.moveTo(cpX - 50, cpY - 281);
    c.bezierCurveTo(cpX - 53, cpY - 308, cpX - 14, cpY - 324, cpX, cpY - 338);
    c.bezierCurveTo(
      cpX + 14,
      cpY - 324,
      cpX + 53,
      cpY - 308,
      cpX + 50,
      cpY - 281
    );
    c.quadraticCurveTo(cpX, cpY - 291, cpX - 50, cpY - 281);
    c.closePath();

    c.fillStyle = gradient;
    c.fill();
    c.stroke();
  }

  c.restore();
}

function orangeShapes(rotationRate) {
  c.save();
  c.rotate(rotationRate);

  const gradient = c.createLinearGradient(cpX, cpY - 227, cpX, cpY - 273);
  gradient.addColorStop(0, '#de7119');
  gradient.addColorStop(1, '#eea549');

  for (let i = 0; i < 16; i++) {
    c.rotate(Math.PI * 0.125);

    c.beginPath();
    c.moveTo(cpX, cpY - 227);
    c.bezierCurveTo(
      cpX + 12,
      cpY - 257,
      cpX + 48,
      cpY - 265,
      cpX + 55,
      cpY - 273
    );
    c.bezierCurveTo(
      cpX + 58,
      cpY - 262,
      cpX + 84,
      cpY - 244,
      cpX + 90,
      cpY - 210
    );
    c.quadraticCurveTo(cpX + 47, cpY - 225, cpX, cpY - 227);
    c.closePath();

    c.fillStyle = gradient;
    c.fill();
    c.strokeStyle = '#fdc182';
    c.stroke();
  }

  c.restore();
}

function pinkShapesOuter(rotationRate) {
  const gradient = c.createLinearGradient(cpX, cpY - 182, cpX, cpY - 213);
  gradient.addColorStop(0, '#f05534');
  gradient.addColorStop(1, '#fdc48f');

  c.save();
  c.rotate(rotationRate);

  for (let i = 0; i < 16; i++) {
    c.rotate(Math.PI * 0.125);

    c.beginPath();
    c.moveTo(cpX - 30, cpY - 182);
    c.bezierCurveTo(cpX - 30, cpY - 208, cpX - 3, cpY - 204, cpX, cpY - 213);
    c.bezierCurveTo(
      cpX + 3,
      cpY - 204,
      cpX + 30,
      cpY - 208,
      cpX + 30,
      cpY - 182
    );
    c.quadraticCurveTo(cpX, cpY - 188, cpX - 30, cpY - 182);
    c.closePath();

    c.fillStyle = gradient;
    c.fill();
    c.strokeStyle = 'rgba(240,85,52,.5)';
    c.stroke();
  }
  c.restore();
}

function pinkShapesInner(rotationRate) {
  const gradient = c.createLinearGradient(cpX, cpY - 172, cpX, cpY - 144);
  gradient.addColorStop(0, '#f05534');
  gradient.addColorStop(1, '#fdc48f');

  c.save();
  c.rotate(rotationRate);

  for (let i = 0; i < 16; i++) {
    c.rotate(Math.PI * 0.125);

    c.beginPath();
    c.moveTo(cpX - 30, cpY - 172);
    c.bezierCurveTo(cpX - 30, cpY - 155, cpX - 3, cpY - 151, cpX, cpY - 144);
    c.bezierCurveTo(
      cpX + 3,
      cpY - 151,
      cpX + 30,
      cpY - 155,
      cpX + 30,
      cpY - 172
    );
    c.quadraticCurveTo(cpX, cpY - 178, cpX - 30, cpY - 172);
    c.closePath();

    c.fillStyle = gradient;
    c.fill();
    c.strokeStyle = 'rgba(240,85,52,.5)';
    c.stroke();
  }
  c.restore();
}

function greenShapes(rotationRate) {
  c.save();
  c.rotate(rotationRate);

  for (let i = 0; i < 16; i++) {
    c.rotate(Math.PI * 0.125);

    c.beginPath();
    c.moveTo(cpX - 20, cpY - 130);
    c.bezierCurveTo(cpX - 20, cpY - 115, cpX - 3, cpY - 111, cpX, cpY - 110);
    c.bezierCurveTo(
      cpX + 3,
      cpY - 111,
      cpX + 20,
      cpY - 115,
      cpX + 20,
      cpY - 130
    );
    c.quadraticCurveTo(cpX, cpY - 134, cpX - 20, cpY - 130);
    c.closePath();

    c.fillStyle = '#887831';
    c.fill();
    c.strokeStyle = 'rgba(190,78,33,.5)';
    c.stroke();
  }
  c.restore();
}

function mustardOuter(rotationRate) {
  c.save();
  c.rotate(rotationRate);
  for (let i = 0; i < 16; i++) {
    c.rotate(Math.PI * 0.125);

    c.beginPath();
    c.moveTo(cpX - 11, cpY - 82);
    c.bezierCurveTo(cpX - 11, cpY - 95, cpX - 3, cpY - 91, cpX, cpY - 98);
    c.bezierCurveTo(cpX + 3, cpY - 91, cpX + 11, cpY - 95, cpX + 11, cpY - 82);
    c.quadraticCurveTo(cpX, cpY - 83, cpX - 11, cpY - 82);
    c.closePath();

    c.fillStyle = '#ddbe7f';
    c.fill();
    c.lineWidth = 4;
    c.strokeStyle = 'rgba(195,100,50,.5)';
    c.stroke();
  }
  c.restore();
}

function mustardInner(rotationRate) {
  c.save();
  c.rotate(rotationRate);

  for (let i = 0; i < 16; i++) {
    c.rotate(Math.PI * 0.125);

    c.beginPath();
    c.moveTo(cpX - 11, cpY - 72);
    c.bezierCurveTo(cpX - 11, cpY - 65, cpX - 3, cpY - 61, cpX, cpY - 59);
    c.bezierCurveTo(cpX + 3, cpY - 61, cpX + 11, cpY - 65, cpX + 11, cpY - 72);
    c.quadraticCurveTo(cpX, cpY - 76, cpX - 11, cpY - 72);
    c.closePath();

    c.fillStyle = '#ddbe7f';
    c.fill();
    c.lineWidth = 4;
    c.strokeStyle = 'rgba(195,100,50,.5)';
    c.stroke();
  }
  c.restore();
}

function innerShapes(rotationRate) {
  c.save();
  c.rotate(rotationRate);

  for (let i = 0; i < 20; i++) {
    c.rotate(Math.PI * 0.105);

    c.beginPath();
    c.moveTo(cpX - 8, cpY - 48);
    c.lineTo(cpX, cpY - 54);
    c.lineTo(cpX + 8, cpY - 48);

    c.lineWidth = 3;
    c.strokeStyle = '#d4a45c';
    c.stroke();
  }

  for (let i = 0; i < 20; i++) {
    c.rotate(Math.PI * 0.105);

    c.beginPath();
    c.arc(cpX, cpY - 44, 3, Math.PI * 2, Math.PI, true);

    c.lineWidth = 3;
    c.strokeStyle = '#d4a45c';
    c.stroke();
  }

  for (let i = 0; i < 20; i++) {
    c.rotate(Math.PI * 0.105);

    c.beginPath();
    c.moveTo(cpX - 5, cpY - 28);
    c.lineTo(cpX, cpY - 34);
    c.lineTo(cpX + 5, cpY - 28);

    c.lineWidth = 3;
    c.strokeStyle = '#edc66f';
    c.stroke();
  }

  for (let i = 0; i < 20; i++) {
    c.rotate(Math.PI * 0.105);

    c.beginPath();
    c.arc(cpX, cpY - 22, 2, Math.PI * 2, Math.PI, true);
    c.closePath();

    c.lineWidth = 2;
    c.strokeStyle = '#a80c1c';
    c.stroke();
  }
  c.restore();
}

function backgroundCircle() {
  c.beginPath();
  c.arc(cpX, cpY, 340, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#758a62';
  c.fill();
  c.lineWidth = 5;
  c.strokeStyle = '#973235';
  c.stroke();

  //Pink Circle
  c.beginPath();
  c.arc(cpX, cpY, 283, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#f76a4f';
  c.fill();
  c.lineWidth = 5;
  c.strokeStyle = '#973235';
  c.stroke();

  //Pink Circle
  c.beginPath();
  c.arc(cpX, cpY, 283, 0, Math.PI * 2, true);
  c.closePath();

  c.lineWidth = 5;
  c.strokeStyle = '#973235';
  c.stroke();

  //Dark Green Circle
  c.beginPath();
  c.arc(cpX, cpY, 223, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#6a6b35';
  c.fill();
  c.lineWidth = 5;
  c.strokeStyle = '#973235';
  c.stroke();

  // Red
  c.beginPath();
  c.arc(cpX, cpY, 180, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#ab161a';
  c.fill();
  c.lineWidth = 5;
  c.strokeStyle = '#973235';
  c.stroke();

  // Light Green
  c.beginPath();
  c.arc(cpX, cpY, 137, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#f8a661';
  c.fill();
  c.lineWidth = 5;
  c.strokeStyle = '#973235';
  c.stroke();

  // Yellow
  c.beginPath();
  c.arc(cpX, cpY, 105, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#f4b045';
  c.fill();
  c.lineWidth = 5;
  c.strokeStyle = '#973235';
  c.stroke();

  // Mustard
  c.beginPath();
  c.arc(cpX, cpY, 78, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#e18b18';
  c.fill();
  c.lineWidth = 5;
  c.strokeStyle = '#973235';
  c.stroke();

  // Cream
  c.beginPath();
  c.arc(cpX, cpY, 56, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#f0d295';
  c.fill();

  // Yellow
  c.beginPath();
  c.arc(cpX, cpY, 36, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#e7931f';
  c.fill();

  // Yellow
  c.beginPath();
  c.arc(cpX, cpY, 15, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#f48a17';
  c.fill();
  c.lineWidth = 5;
  c.strokeStyle = '#973235';
  c.stroke();

  // Orange
  c.beginPath();
  c.arc(cpX, cpY, 7, 0, Math.PI * 2, true);
  c.closePath();

  c.fillStyle = '#e96519';
  c.fill();
}

let s04 = 0;
let s05 = 0;
let s06 = 0;
let s07 = 0;
let s08 = 0;
let s09 = 0;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  backgroundCircle();
  yellowShapes(s07);
  orangeShapes(s06);
  pinkShapesOuter(s04);
  pinkShapesInner(s05);
  greenShapes(s06);
  mustardOuter(s07);
  mustardInner(s08);
  innerShapes(s09);

  s04 += 0.003;
  s05 += 0.0008;
  s06 -= 0.002;
  s07 += 0.0012;
  s08 -= 0.0049;
  s09 += 0.0109;
}

animate();
