const paymentSuccess = false;
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

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('Congrats! you got the certificate');
    }, 1000);
  });
  return promise;
}

async function course() {
  try {
    await enroll();
    await progress();
    const message = await getCertificate();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

course();

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
