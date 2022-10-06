// // Old Code
// function getUsers() {
//   fetch('https://some-url-here.com/')
//     .then((resp) => resp.json())
//     .then((data) => someFunctionToUseReturnedData(data))
//     .catch((err) => console.log(err));
// }

// // New Code

// Having a non-function as either parameter
Promise.resolve(1).then(2).then(console.log);
Promise.reject(3).then(2, 2).then(console.log, console.log);

/* asynchronicity of the then method 
// using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

const thenProm = resolvedProm.then((value) => {
  console.log(
    'this gets called after the end of the main stack. the value received and returned is: ',
    value
  );
  return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
  console.log(thenProm);
}, 2000);

// logs, in order:
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
*/

/*
//Promise with then, then and catch, and multiple then and multiple catch
const promise1 = new Promise((resolve, reject) => {
  const random = Math.random() * 100;
  if (random > 75) {
    resolve('Success!');
  } else {
    reject('Failure');
  }
  console.log('Logging', random);
});

promise1
  .then(
    (value) => console.log(value),
    (err) => console.log('Error 1', err)
  )
  .catch((err) => console.log('Error 2', err));

promise1
  .then()
  .then()
  .then((value) => console.log('Value 1', value))
  .then((value) => console.log('Value 2', value))
  .then((value) => console.log('Value 3', value))
  .catch()
  .catch((err) => console.log('Error', err));
*/
