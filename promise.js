function temp() {
  let counter = 0;
  return function () {
    counter += 1;
  };
}
const add = temp();
add();
console.log();

const paymentSuccess = true;
const mark = 80;

function enroll() {
  console.log('Course Enrolling');

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject('payment failed!');
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log('Course on progress.......');

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (mark >= 80) {
        resolve();
      } else {
        reject('you could not get enough marks to get the certificate');
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log('preparing your certificate!');

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Congrats! you got the certificate');
    }, 1000);
  });
  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
